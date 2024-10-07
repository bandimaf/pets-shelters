const { Contacts } = require('../models/models');
const { Shelter } = require('../models/models');
const ApiError = require('../errors/ApiError');

const jwt = require('jsonwebtoken')

class ContactsController {
    async create(req, res, next) {
        try {
            const { type, contact, idShelter } = req.body;
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

            const contacts = await Contacts.create({ type, contact, idShelter })
            return res.json(contacts)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async update(req, res, next) {
        try {
            const { id, type, contact } = req.body;

            // Find the pet to update
            const contacts = await Contacts.findByPk(id);
            if (!contacts) {
                return res.status(404).send({ message: 'News not found' });
            }

            const token = req.headers.authorization.split(' ')[1] // Bearer asfasnfkajsfnjk
            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            if (decoded.role !== 'ADMIN') {
                if (decoded.idShelter != contacts.idShelter) {
                    return res.status(403).json({message: "Вы можете редактировать лишь свой приют"})
                }
            }

            contacts.type = type || contacts.type;
            contacts.contact = contact || contacts.contact;

            // Save the updated pet data
            await contacts.save();

            return res.json(contacts);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async delete(req, res, next) {
        try {
            const { id } = req.params;

            // Find the pet to delete
            const contacts = await Contacts.findByPk(id);
            if (!contacts) {
                return res.status(404).send({ message: 'News not found' });
            }

            const token = req.headers.authorization.split(' ')[1] // Bearer asfasnfkajsfnjk
            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            if (decoded.role !== 'ADMIN') {
                if (decoded.idShelter != contacts.idShelter) {
                    return res.status(403).json({message: "Вы можете редактировать лишь свой приют"})
                }
            }

            // Delete the pet record
            await contacts.destroy();

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
        let contacts;

        if (!idShelter) {
            contacts = await Contacts.findAndCountAll({ limit, offset });
         } else {
            contacts = await Contacts.findAndCountAll({where: {idShelter}, limit, offset});
         }

        return res.json(contacts);

    }

    async getOne(req, res) {
        const { id } = req.params;
        const contacts = await Contacts.findOne({ where: { id } });
        res.json(contacts);
    }
}

module.exports = new ContactsController();