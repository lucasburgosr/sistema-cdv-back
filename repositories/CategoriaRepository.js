const Categoria = require('../models/Categoria.js')

class CategoriaRepository {
    async create(data) {
        return await Categoria.create(data)
    }

    async findById(id) {
        return await Categoria.findByPk(id)
    }

    async findAll() {
        return await Categoria.findAll();
    }

    async update(id, data) {
        return await Categoria.update(data, { where: { id } });
    }

    async delete(id) {
        return await Categoria.destroy();
    }

}

module.exports = new CategoriaRepository();