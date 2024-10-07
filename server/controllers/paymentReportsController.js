const { Payment_reports, Fundraising } = require('../models/models');
const { Shelter } = require('../models/models');
const ApiError = require('../errors/ApiError');

const jwt = require('jsonwebtoken')

class PaymentReportsController {
    async create(req, res, next) {
        try {
            const { date, time, name, sum, idFundraising } = req.body;
            const fundraising = await Fundraising.findByPk(idFundraising);

            if (!fundraising) {
                return res.status(404).send({ message: 'fundraising not found' });
            }
            const token = req.headers.authorization.split(' ')[1] // Bearer asfasnfkajsfnjk
            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            if (decoded.role !== 'ADMIN') {
                if (decoded.idShelter != fundraising.idShelter) {
                    return res.status(403).json({message: "Вы можете редактировать лишь свой приют"})
                }
            }

            const payment_reports = await Payment_reports.create({ date, time, name, sum, idFundraising })
            return res.json(payment_reports)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async update(req, res, next) {
        try {
            const { id, date, time, name, sum } = req.body;

            // Find the pet to update
            const payment_reports = await Payment_reports.findByPk(id);
            if (!payment_reports) {
                return res.status(404).send({ message: 'News not found' });
            }

            const fundraising = await Fundraising.findByPk(payment_reports.idFundraising);

            const token = req.headers.authorization.split(' ')[1] // Bearer asfasnfkajsfnjk
            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            if (decoded.role !== 'ADMIN') {
                if (decoded.idShelter != fundraising.idShelter) {
                    return res.status(403).json({message: "Вы можете редактировать лишь свой приют"})
                }
            }

            payment_reports.date = date || payment_reports.date;
            payment_reports.time = time || payment_reports.time;
            payment_reports.name = name || payment_reports.name;
            payment_reports.sum = sum || payment_reports.sum;

            // Save the updated pet data
            await payment_reports.save();

            return res.json(payment_reports);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async delete(req, res, next) {
        try {
            const { id } = req.params;

            // Find the pet to delete
            const payment_reports = await Payment_reports.findByPk(id);
            if (!payment_reports) {
                return res.status(404).send({ message: 'News not found' });
            }

            const fundraising = await Fundraising.findByPk(payment_reports.idFundraising);

            const token = req.headers.authorization.split(' ')[1] // Bearer asfasnfkajsfnjk
            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            if (decoded.role !== 'ADMIN') {
                if (decoded.idShelter != fundraising.idShelter) {
                    return res.status(403).json({message: "Вы можете редактировать лишь свой приют"})
                }
            }

            // Delete the pet record
            await fundraising.destroy();

            // Send confirmation of deletion
            return res.status(204).send();
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getAll(req, res) {
        
        let { limit, page, idFundraising } = req.query;
        page = page || 1;
        limit = limit || 5;
        let offset = page * limit - limit;

        const payment_reports = await Payment_reports.findAndCountAll({ limit, offset });

        return res.json(payment_reports);

    }

    // async getAllforShelter(req, res) {
        
    //     let { limit, page, idShelter } = req.query;
    //     page = page || 1;
    //     limit = limit || 5;
    //     let offset = page * limit - limit;

    //     const countFundraising = await Fundraising.count({ where: {idShelter}, limit, offset });

    //     const payment_reports = await Payment_reports.findAndCountAll({ limit, offset });

    //     return res.json(payment_reports);

    // }

    async getOne(req, res) {
        const { id } = req.params;
        const payment_reports = await Payment_reports.findOne({ where: { id } });
        res.json(payment_reports);
    }
}

module.exports = new PaymentReportsController();