const ApiError = require('../errors/ApiError');
const { Admins } = require('../models/models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const generateJwt = (id, login, role) => {
    return jwt.sign({ id, login, role }, process.env.SECRET_KEY, { expiresIn: '24h' })
}

class AdminsController {

    async registration(req, res, next) {

        const { login, password} = req.body

        if (!login || !password) {
            return next(ApiError.badRequest("Некорректный login или password"));
        }

        const candidate = await Admins.findOne({ where: { login } });

        if (candidate) {
            return next(ApiError.badRequest('Админ уже зарегестрирован'))
        }

        const hashPassword = await bcrypt.hash(password, 5)
        const admins = await Admins.create({ login, password: hashPassword });
        const token = generateJwt(admins.id, admins.login)
        return res.json({ token });

    }
    
    async login(req, res, next) {
        const { login, password } = req.body
        const admin = await Admins.findOne({ where: { login } })

        if (!admin) {
            return next(ApiError.internal("Админ не найден"))
        }

        let comparePassword = bcrypt.compareSync(password, admin.password);
        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль'));
        }

        const token = generateJwt(admin.id, admin.login, admin.role)
        res.json({token})
    }

    //??????
    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.login, req.user.role)
        res.json({token})
    }
}

module.exports = new AdminsController();