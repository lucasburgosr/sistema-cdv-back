const Promocion = require('../models/Promocion');

class PromocionRepository {
    async create(data) {
        return await Promocion.create(data)
    }

    async findById(id) {
        return await Promocion.findByPk(id)
    }

    async findAll() {
        return await Promocion.findAll()
    }

    async update(id, data) {
        return await Promocion.update(data, { where: { id } });
    }

    async delete(id) {
        return await Promocion.destroy();
    }
}

module.exports = new PromocionRepository();