const PrecioMinorista = require('../models/PrecioMinorista.js')

class PrecioMinoristaRepository {
    async create(data) {
        return await PrecioMinorista.create(data)
    }

    async findById(id) {
        return await PrecioMinorista.findByPk(id)
    }

    async findAll() {
        return await PrecioMinorista.findAll({
            include: [
                {
                    model: Producto,
                    attributes: ['descripcion']
                }
            ]
        });
    }

    async updateByProductoId(productoId, data) {
        return await PrecioMinorista.update(data, { where: { productoId } });
    }

    async update(id, data) {
        return await PrecioMinorista.update(data, { where: { id } });
    }

    async delete(id) {
        return await PrecioMinorista.destroy();
    }

}

module.exports = new PrecioMinoristaRepository();