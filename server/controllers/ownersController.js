const { Owners } = require('../models/models');
const { Shelter } = require('../models/models');
const ApiError = require('../errors/ApiError');

const jwt = require('jsonwebtoken')

class OwnersController {
    async create(req, res, next) {
        try {
            const { name, tel, email, adress, networks, idShelter } = req.body;
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

            const owner = await Owners.create({ name, tel, email, adress, networks, idShelter })
            return res.json(owner)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async update(req, res, next) {
        try {
            const { id, name, tel, email, adress, networks } = req.body;

            // Find the pet to update
            const owner = await Owners.findByPk(id);
            if (!owner) {
                return res.status(404).send({ message: 'News not found' });
            }

            const token = req.headers.authorization.split(' ')[1] // Bearer asfasnfkajsfnjk
            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            if (decoded.role !== 'ADMIN') {
                if (decoded.idShelter != owner.idShelter) {
                    return res.status(403).json({message: "Вы можете редактировать лишь свой приют"})
                }
            }

            owner.name = name || owner.name;
            owner.tel = tel || owner.tel;
            owner.email = email || owner.email;
            owner.adress = adress || owner.adress;
            owner.networks = networks || owner.networks;

            // Save the updated pet data
            await owner.save();

            return res.json(owner);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async delete(req, res, next) {
        try {
            const { id } = req.params;

            // Find the pet to delete
            const owner = await Owners.findByPk(id);
            if (!owner) {
                return res.status(404).send({ message: 'News not found' });
            }

            const token = req.headers.authorization.split(' ')[1] // Bearer asfasnfkajsfnjk
            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            if (decoded.role !== 'ADMIN') {
                if (decoded.idShelter != owner.idShelter) {
                    return res.status(403).json({message: "Вы можете редактировать лишь свой приют"})
                }
            }

            // Delete the pet record
            await owner.destroy();

            // Send confirmation of deletion
            return res.status(204).send();
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getAll(req, res) {
        
        let { limit, page, idShelter } = req.query;
        page = page || 1;
        limit = limit || 5;
        let offset = page * limit - limit;
        let owner;

         if (!idShelter) {
            owner = await Owners.findAndCountAll({ limit, offset });
         } else {
            owner = await Owners.findAndCountAll({where: {idShelter}, limit, offset});
         }

        return res.json(owner);

    }

    async getOne(req, res) {
        const { id } = req.params;
        const owner = await Owners.findOne({ where: { id } });
        res.json(owner);
    }
}

module.exports = new OwnersController();