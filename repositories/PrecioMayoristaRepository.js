const PrecioMayorista = require('../models/PrecioMayorista.js')

class PrecioMayoristaRepository {
    async create(data) {
        return await PrecioMayorista.create(data)
    }

    async findById(id) {
        return await PrecioMayorista.findByPk(id)
    }

    async findAll() {
        return await PrecioMayorista.findAll({
            include: [
                {
                    model: Producto,
                    attributes: ['descripcion']
                }
            ]
        });
    }

    async findOne(criteria) {
        return await PrecioMayorista.findOne({ where: criteria });
    }

    async update(id, data) {
        return await PrecioMayorista.update(data, { where: { id } });
    }

    async updateByProductoId(productoId, data) {
        return await PrecioMayorista.update(data, { where: { productoId } });
    }

    async delete(id) {
        return await PrecioMayorista.destroy();
    }

}

module.exports = new PrecioMayoristaRepository();