const {Fundraising} = require('../models/models');
const {Shelter} = require('../models/models');
const ApiError = require('../errors/ApiError');
const uuid = require('uuid');
const path = require('path');

const jwt = require('jsonwebtoken')

class FundraisingController {
    async create(req, res, next) {
        try {
            const {title, date, description, goal, required_amount, collected_amount, idShelter} = req.body;
            const shelter = await Shelter.findByPk(idShelter);

            if (!shelter) {
              return res.status(404).send({ message: 'Shelter not found' });
            }

            const token = req.headers.authorization.split(' ')[1] // Bearer asfasnfkajsfnjk
            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            if (decoded.role !== 'ADMIN') {
                if (decoded.idShelter != idShelter) {
                    return res.status(403).json({message: "Вы можете редактировать лишь свой приют"})
                }
            }

            const {main_image} = req.files;
            let fileName = uuid.v4() + ".jpg";
            main_image.mv(path.resolve(__dirname, '..', 'static', fileName));
            // не созданы images и reports
            const fundraising = await Fundraising.create({title, date, idShelter, description, goal, required_amount, collected_amount, main_image: fileName})
            return res.json(fundraising)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async update(req, res, next) {
        try {
            const { id, title, goal, description, required_amount, collected_amount } = req.body;

            // Find the pet to update
            const fundraising = await Fundraising.findByPk(id);
            if (!fundraising) {
                return res.status(404).send({ message: 'Fundraising not found' });
            }

            const token = req.headers.authorization.split(' ')[1] // Bearer asfasnfkajsfnjk
            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            if (decoded.role !== 'ADMIN') {
                if (decoded.idShelter != fundraising.idShelter) {
                    return res.status(403).json({message: "Вы можете редактировать лишь свой приют"})
                }
            }

            // Update pet details (if provided)
            fundraising.title = title || fundraising.title;
            fundraising.description = description || fundraising.description;
            fundraising.required_amount = required_amount || fundraising.required_amount;
            fundraising.collected_amount = collected_amount || fundraising.collected_amount;
            fundraising.goal = goal || fundraising.goal;

            // Handle main image update (if uploaded)
            if (req.files && req.files.main_image) {
                const { main_image } = req.files;
                const fileName = uuid.v4() + ".jpg";
                main_image.mv(path.resolve(__dirname, '..', 'static', fileName));
                fundraising.main_image = fileName;
            }

            // Save the updated pet data
            await fundraising.save();

            return res.json(fundraising);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async delete(req, res, next) {
        try {
            const { id } = req.params;

            // Find the pet to delete
            const fundraising = await Fundraising.findByPk(id);
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

            // Delete the pet record
            await fundraising.destroy();

            // Send confirmation of deletion
            return res.status(204).send();
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getAll(req, res) {
        let { limit, page, goal, idShelter } = req.query;
        page = page || 1;
        limit = limit || 3;
        let offset = page * limit - limit;
        let fundraising;

        if (!goal && !idShelter) {
            fundraising = await Fundraising.findAndCountAll({limit, offset});
        }
        
        if (!goal && idShelter) {
            fundraising = await Fundraising.findAndCountAll({where: {idShelter}, limit, offset});
        }

        if (goal && !idShelter) {
            fundraising = await Fundraising.findAndCountAll({where: {goal}, limit, offset});
        }

        if (goal && idShelter) {
            fundraising = await Fundraising.findAndCountAll({where: {goal, idShelter}, limit, offset});
        }

        return res.json(fundraising);
    }

    async getOne(req, res) {
        const {id} = req.params;
        const fundraising = await Fundraising.findOne({where:{id}});
        res.json(fundraising);
    }
}

module.exports = new FundraisingController();