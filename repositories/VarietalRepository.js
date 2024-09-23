const Varietal = require('../models/Varietal.js')

class VarietalRepository {
    async create(data) {
        return await Varietal.create(data)
    }

    async findById(id) {
        return await Varietal.findByPk(id)
    }

    async findAll() {
        return await Varietal.findAll();
    }

    async update(id, data) {
        return await Varietal.update(data, { where: { id } });
    }

    async delete(id) {
        return await Varietal.destroy();
    }

}

module.exports = new VarietalRepository();