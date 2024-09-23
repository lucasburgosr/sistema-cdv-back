const PrecioBuenosAires = require('../models/PrecioBuenosAires.js')

class PrecioBuenosAiresRepository {
    async create(data) {
        return await PrecioBuenosAires.create(data)
    }

    async findById(id) {
        return await PrecioBuenosAires.findByPk(id)
    }

    async findAll() {
        return await PrecioBuenosAires.findAll({
            include: [
                {
                    model: Producto,
                    attributes: ['descripcion']
                }
            ]
        });
    }

    async update(id, data) {
        return await PrecioBuenosAires.update(data, { where: { id } });
    }

    async updateByProductoId(productoId, data) {
        return await PrecioBuenosAires.update(data, { where: { productoId } });
    }

    async delete(id) {
        return await PrecioBuenosAires.destroy();
    }

}

module.exports = new PrecioBuenosAiresRepository();