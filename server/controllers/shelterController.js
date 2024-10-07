const ApiError = require('../errors/ApiError');
const { Shelter } = require('../models/models');
const path = require('path');
const uuid = require('uuid');

const jwt = require('jsonwebtoken')

class ShelterController {
    async create(req, res, next) {
        try {
            const {name, description} = req.body;

            const {main_image} = req.files;
            let fileName = uuid.v4() + ".jpg";
            main_image.mv(path.resolve(__dirname, '..', 'static', fileName));
            const shelter = await Shelter.create({name, description, main_image: fileName})
            return res.json(shelter)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async update(req, res, next) {
        try {
            const { id, name, description} = req.body;

            // Find the pet to update
            const shelter = await Shelter.findByPk(id);
            if (!shelter) {
                return res.status(404).send({ message: 'Приют не найден' });
            }

            const token = req.headers.authorization.split(' ')[1] // Bearer asfasnfkajsfnjk
            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            if (decoded.role !== 'ADMIN') {
                if (decoded.idShelter != shelter.idShelter) {
                    return res.status(403).json({message: "Вы можете редактировать лишь свой приют"})
                }
            }

            // Update pet details (if provided)
            shelter.name = name || shelter.name;
            shelter.description = description || shelter.description;


            // Handle main image update (if uploaded)
            if (req.files && req.files.main_image) {
                const { main_image } = req.files;
                const fileName = uuid.v4() + ".jpg";
                main_image.mv(path.resolve(__dirname, '..', 'static', fileName));
                news.main_image = fileName;
            }

            // Save the updated pet data
            await shelter.save();

            return res.json(shelter);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async delete(req, res, next) {
        try {
            const { id } = req.params;

            // Find the pet to delete
            const shelter = await Shelter.findByPk(id);
            if (!shelter) {
                return res.status(404).send({ message: 'Приют не найден' });
            }

            // Delete the pet record
            await shelter.destroy();

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
        let shelter = await Shelter.findAndCountAll({ limit, offset });

        return res.json(shelter);

    }

    async getOne(req, res) {
        const {id} = req.params;
        const shelter = await Shelter.findOne({where:{id}});
        res.json(shelter);
    }
}

module.exports = new ShelterController();