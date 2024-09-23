const PrecioDistribucion = require('../models/PrecioDistribucion.js')

class PrecioDistribucionRepository {
    async create(data) {
        return await PrecioDistribucion.create(data)
    }

    async findById(id) {
        return await PrecioDistribucion.findByPk(id)
    }

    async findAll() {
        return await PrecioDistribucion.findAll({
            include: [
                {
                    model: Producto,
                    attributes: ['descripcion']
                }
            ]
        });
    }

    async update(id, data) {
        return await PrecioDistribucion.update(data, { where: { id } });
    }

    async updateByProductoId(productoId, data) {
        return await PrecioDistribucion.update(data, { where: { productoId } });
    }

    async delete(id) {
        return await PrecioDistribucion.destroy();
    }

}

module.exports = new PrecioDistribucionRepository();