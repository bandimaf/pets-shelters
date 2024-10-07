const { Adress } = require('../models/models');
const { Shelter } = require('../models/models');
const ApiError = require('../errors/ApiError');

const jwt = require('jsonwebtoken')

class AdressesController {
    async create(req, res, next) {
        try {
            const { city, street, building, description, idShelter } = req.body;
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

            const adress = await Adress.create({ city, street, building, description, idShelter })
            return res.json(adress)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async update(req, res, next) {
        try {
            const { id, city, street, building, description } = req.body;

            // Find the pet to update
            const adress = await Adress.findByPk(id);
            if (!adress) {
                return res.status(404).send({ message: 'News not found' });
            }

            const token = req.headers.authorization.split(' ')[1] // Bearer asfasnfkajsfnjk
            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            if (decoded.role !== 'ADMIN') {
                if (decoded.idShelter != adress.idShelter) {
                    return res.status(403).json({message: "Вы можете редактировать лишь свой приют"})
                }
            }

            adress.city = city || adress.city;
            adress.street = street || adress.street;
            adress.building = building || adress.building;
            adress.description = description || adress.description;

            // Save the updated pet data
            await adress.save();

            return res.json(adress);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async delete(req, res, next) {
        try {
            const { id } = req.params;

            // Find the pet to delete
            const adress = await News.findByPk(id);
            if (!adress) {
                return res.status(404).send({ message: 'News not found' });
            }

            const token = req.headers.authorization.split(' ')[1] // Bearer asfasnfkajsfnjk
            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            if (decoded.role !== 'ADMIN') {
                if (decoded.idShelter != adress.idShelter) {
                    return res.status(403).json({message: "Вы можете редактировать лишь свой приют"})
                }
            }

            // Delete the pet record
            await adress.destroy();

            // Send confirmation of deletion
            return res.status(204).send();
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getAll(req, res) {
        let { limit, page } = req.query;
        page = page || 1;
        limit = limit || 5;
        let offset = page * limit - limit;
        let adress = await Adress.findAndCountAll({ limit, offset });

        return res.json(adress);

    }

    async getOne(req, res) {
        const { id, idShelter } = req.params;

        let adress;

        if (idShelter) {
            adress = await Adress.findOne({ where: { idShelter } });
        } else {
            adress = await Adress.findOne({ where: { id } });
        }

        res.json(adress);
    }
}

module.exports = new AdressesController();