const Bodega = require('../models/Bodega.js')

class BodegaRepository {
    async create(data) {
        return await Bodega.create(data)
    }

    async findById(id) {
        return await Bodega.findByPk(id)
    }

    async findAll() {
        return await Bodega.findAll();
    }

    async update(id, data) {
        return await Bodega.update(data, { where: { id } });
    }

    async delete(id) {
        return await Bodega.destroy();
    }

}

module.exports = new BodegaRepository();