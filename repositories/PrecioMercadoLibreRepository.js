const PrecioMercadoLibre = require('../models/PrecioMercadoLibre.js')
const Producto = require('../models/Producto.js')

class PrecioMercadoLibreRepository {
    async create(data) {
        return await PrecioMercadoLibre.create(data)
    }

    async findById(id) {
        return await PrecioMercadoLibre.findByPk(id)
    }

    async findAll() {
        return await PrecioMercadoLibre.findAll({
            include: [
                {
                    model: Producto,
                    attributes: ['descripcion']
                }
            ]
        });
    }

    async update(id, data) {
        return await PrecioMercadoLibre.update(data, { where: { id } });
    }

    async updateByProductoId(productoId, data) {
        return await PrecioMercadoLibre.update(data, { where: { productoId } });
    }

    async delete(id) {
        return await PrecioMercadoLibre.destroy();
    }

}

module.exports = new PrecioMercadoLibreRepository();