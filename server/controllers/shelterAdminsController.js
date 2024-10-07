const ApiError = require('../errors/ApiError');
const { SheltersAdmins } = require('../models/models');
const { Shelter } = require('../models/models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const path = require('path');
const uuid = require('uuid');

const generateJwt = (id, name, login, role, idShelter) => {
    return jwt.sign({ id, name, login, role, idShelter }, process.env.SECRET_KEY, { expiresIn: '24h' })
}

class SheltersAdminsController {
    async registration(req, res, next) {

        const { login, password, role, name, idShelter } = req.body

        if (!login || !password) {
            return next(ApiError.badRequest("Некорректный login или password"));
        }

        const candidate = await SheltersAdmins.findOne({ where: { login } });

        if (candidate) {
            return next(ApiError.badRequest('Сотрудник уже зарегестрирован'))
        }

        const id = idShelter;

        const shelter = await Shelter.findOne({ where: { id } });

        if (!shelter) {
            return next(ApiError.badRequest('Приют не найден'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const sheltersAdmins = await SheltersAdmins.create({ login, role, name, idShelter, password: hashPassword });
        const token = generateJwt(sheltersAdmins.id, sheltersAdmins.name, sheltersAdmins.login, sheltersAdmins.role, sheltersAdmins.idShelter)
        return res.json({ token });

    }
    async login(req, res, next) {
        const { login, password } = req.body
        const shelterAdmin = await SheltersAdmins.findOne({ where: { login } })

        if (!shelterAdmin) {
            return next(ApiError.internal("Пользователь не найден"))
        }

        let comparePassword = bcrypt.compareSync(password, shelterAdmin.password);
        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль'));
        }

        const token = generateJwt(shelterAdmin.id, shelterAdmin.name, shelterAdmin.login, shelterAdmin.role, shelterAdmin.idShelter)
        res.json({token})
    }

    async update(req, res, next) {
        try {
            const { id, name } = req.body;

            // Find the pet to update
            const shelterAdmin = await SheltersAdmins.findByPk(id);
            if (!shelterAdmin) {
                return res.status(404).send({ message: 'Сотрудник не найден' });
            }

            // Update pet details (if provided)
            shelterAdmin.name = name || shelter.name;

            // Handle main image update (if uploaded)
            if (req.files && req.files.main_image) {
                const { main_image } = req.files;
                const fileName = uuid.v4() + ".jpg";
                main_image.mv(path.resolve(__dirname, '..', 'static', fileName));
                shelterAdmin.main_image = fileName;
            }

            // Save the updated pet data
            await shelterAdmin.save();

            return res.json(shelterAdmin);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    //??????
    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.login, req.user.role, req.idShelter)
        res.json({token})
    }

    async getAll(req, res) {
        let { limit, page } = req.query;
        page = page || 1;
        limit = limit || 5;
        let offset = page * limit - limit;
        let shelterAdmin = await SheltersAdmins.findAndCountAll({ limit, offset });

        return res.json(shelterAdmin);

    }

    async getOne(req, res) {
        const { id } = req.params;
        const shelterAdmin = await SheltersAdmins.findOne({ where: { id } });
        res.json(shelterAdmin);
    }

    async delete(req, res, next) {
        try {
            const { id } = req.params;

            // Find the pet to delete
            const shelterAdmin = await SheltersAdmins.findByPk(id);
            if (!shelterAdmin) {
                return res.status(404).send({ message: 'News not found' });
            }

            // Delete the pet record
            await shelterAdmin.destroy();

            // Send confirmation of deletion
            return res.status(204).send();
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
}

module.exports = new SheltersAdminsController();