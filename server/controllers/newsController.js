const { News } = require('../models/models');
const { Shelter } = require('../models/models');
const ApiError = require('../errors/ApiError');
const uuid = require('uuid');
const path = require('path');

const jwt = require('jsonwebtoken')

class NewsController {
    async create(req, res, next) {
        try {
            const { title, date, description, idShelter } = req.body;
            const shelter = await Shelter.findByPk(idShelter);

            if (!shelter) {
                return res.status(404).send({ message: 'Shelter not found' });
            }
            const token = req.headers.authorization.split(' ')[1] // Bearer asfasnfkajsfnjk
            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            if (decoded.role !== 'ADMIN') {
                if (decoded.idShelter != idShelter) {
                    return res.status(403).json({message: "Вы можете опубликовать новость лишь для своего приюта"})
                }
            }

            const { main_image } = req.files;
            let fileName = uuid.v4() + ".jpg";
            main_image.mv(path.resolve(__dirname, '..', 'static', fileName));
            const news = await News.create({ title, date, description, main_image: fileName, idShelter })
            return res.json(news)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async update(req, res, next) {
        try {
            const { id, title, description } = req.body;

            // Find the pet to update
            const news = await News.findByPk(id);
            if (!news) {
                return res.status(404).send({ message: 'News not found' });
            }

            const token = req.headers.authorization.split(' ')[1] // Bearer asfasnfkajsfnjk
            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            if (decoded.role !== 'ADMIN') {
                if (decoded.idShelter != news.idShelter) {
                    return res.status(403).json({message: "Вы можете редактировать лишь свой приют"})
                }
            }

            // Update pet details (if provided)
            news.title = title || news.title;
            news.description = description || news.description;


            // Handle main image update (if uploaded)
            if (req.files && req.files.main_image) {
                const { main_image } = req.files;
                const fileName = uuid.v4() + ".jpg";
                main_image.mv(path.resolve(__dirname, '..', 'static', fileName));
                news.main_image = fileName;
            }

            // Save the updated pet data
            await news.save();

            return res.json(news);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async delete(req, res, next) {
        try {
            const { id } = req.params;

            // Find the pet to delete
            const news = await News.findByPk(id);
            if (!news) {
                return res.status(404).send({ message: 'News not found' });
            }

            const token = req.headers.authorization.split(' ')[1] // Bearer asfasnfkajsfnjk
            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            if (decoded.role !== 'ADMIN') {
                if (decoded.idShelter != news.idShelter) {
                    return res.status(403).json({message: "Вы можете редактировать лишь свой приют"})
                }
            }

            // Delete the pet record
            await news.destroy();

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
        let news;

        if (!idShelter) {
            news = await News.findAndCountAll({ limit, offset });
        }

        if (idShelter) {
            news = await News.findAndCountAll({ where: { idShelter }, limit, offset });
        }

        return res.json(news);

    }

    async getOne(req, res) {
        const { id } = req.params;
        const news = await News.findOne({ where: { id } });
        res.json(news);
    }
}

module.exports = new NewsController();