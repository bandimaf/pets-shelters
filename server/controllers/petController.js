const { Pet } = require('../models/models');
const { Shelter } = require('../models/models');
const ApiError = require('../errors/ApiError');
const uuid = require('uuid');
const path = require('path');

const jwt = require('jsonwebtoken')

class PetController {
    async create(req, res, next) {
        try {
            const { name, age, arrival_date, about, health_feature, need_treatment, gender, type, idShelter } = req.body;
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

            const { main_image } = req.files;
            let fileName = uuid.v4() + ".jpg";
            main_image.mv(path.resolve(__dirname, '..', 'static', fileName));
            // не созданы images и reports
            const pet = await Pet.create({ idShelter, name, age, arrival_date, about, health_feature, need_treatment, gender, type, main_image: fileName })
            return res.json(pet)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async update(req, res, next) {
        try {
            const { id, name, age, arrival_date, about, health_feature, need_treatment, gender, type, departure_date, reason_departure, idOwner } = req.body;

            // Find the pet to update
            const pet = await Pet.findByPk(id);
            if (!pet) {
                return res.status(404).send({ message: 'Pet not found' });
            }

            const token = req.headers.authorization.split(' ')[1] // Bearer asfasnfkajsfnjk
            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            if (decoded.role !== 'ADMIN') {
                if (decoded.idShelter != pet.idShelter) {
                    return res.status(403).json({message: "Вы можете редактировать лишь свой приют"})
                }
            }

            // Update pet details (if provided)
            pet.name = name || pet.name;
            pet.age = age || pet.age;
            pet.arrival_date = arrival_date || pet.arrival_date;
            pet.about = about || pet.about;
            pet.health_feature = health_feature || pet.health_feature;
            pet.need_treatment = need_treatment || pet.need_treatment;
            pet.gender = gender || pet.gender;
            pet.type = type || pet.type;
            pet.departure_date = departure_date || pet.departure_date;
            pet.reason_departure = reason_departure || pet.reason_departure;
            pet.idOwner = idOwner || pet.idOwner;


            // Handle main image update (if uploaded)
            if (req.files && req.files.main_image) {
                const { main_image } = req.files;
                const fileName = uuid.v4() + ".jpg";
                main_image.mv(path.resolve(__dirname, '..', 'static', fileName));
                pet.main_image = fileName;
            }

            // Save the updated pet data
            await pet.save();

            return res.json(pet);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async delete(req, res, next) {
        try {
            const { id } = req.params;

            // Find the pet to delete
            const pet = await Pet.findByPk(id);
            if (!pet) {
                return res.status(404).send({ message: 'Pet not found' });
            }

            const token = req.headers.authorization.split(' ')[1] // Bearer asfasnfkajsfnjk
            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            if (decoded.role !== 'ADMIN') {
                if (decoded.idShelter != pet.idShelter) {
                    return res.status(403).json({message: "Вы можете редактировать лишь свой приют"})
                }
            }

            // Delete the pet record
            await pet.destroy();

            // Send confirmation of deletion
            return res.status(204).send();
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getAll(req, res) {
        let { limit, page, age, type, gender, idShelter } = req.query;
        page = page || 1;
        limit = limit || 3;
        let offset = page * limit - limit;
        let pet;

        if (!age && !type && !gender && !idShelter) {
            pet = await Pet.findAndCountAll({limit, offset});
        }
        
        if (age && !type && !gender && !idShelter) {
            pet = await Pet.findAndCountAll({where: {age}, limit, offset});
        }

        if (age && type && !gender && !idShelter) {
            pet = await Pet.findAndCountAll({where: {age, type}, limit, offset});
        }

        if (age && !type && gender && !idShelter) {
            pet = await Pet.findAndCountAll({where: {age, gender}, limit, offset});
        }

        if (age && !type && !gender && idShelter) {
            pet = await Pet.findAndCountAll({where: {age, idShelter}, limit, offset});
        }

        if (!age && type && gender && !idShelter) {
            pet = await Pet.findAndCountAll({where: {type, gender}, limit, offset});
        }

        if (!age && type && !gender && idShelter) {
            pet = await Pet.findAndCountAll({where: {type, idShelter}, limit, offset});
        }

        if (!age && !type && gender && idShelter) {
            pet = await Pet.findAndCountAll({where: {gender, idShelter}, limit, offset});
        }

        if (age && type && gender && !idShelter) {
            pet = await Pet.findAndCountAll({where: {age, gender, type}, limit, offset});
        }

        if (age && type && !gender && idShelter) {
            pet = await Pet.findAndCountAll({where: {age, idShelter, type}, limit, offset});
        }

        if (age && !type && gender && idShelter) {
            pet = await Pet.findAndCountAll({where: {age, idShelter, gender}, limit, offset});
        }

        if (!age && type && gender && idShelter) {
            pet = await Pet.findAndCountAll({where: {type, idShelter, gender}, limit, offset});
        }

        if (age && type && gender && idShelter) {
            pet = await Pet.findAndCountAll({where: {age, type, idShelter, gender}, limit, offset});
        }

        return res.json(pet);
    }

    async getOne(req, res) {
        const {id} = req.params;
        const pet = await Pet.findOne({where:{id}});
        res.json(pet);
    }
}

module.exports = new PetController();