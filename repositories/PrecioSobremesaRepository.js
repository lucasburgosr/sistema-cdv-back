const PrecioSobremesa = require('../models/PrecioSobremesa.js')

class PrecioSobremesaRepository {
    async create(data) {
        return await PrecioSobremesa.create(data)
    }

    async findById(id) {
        return await PrecioSobremesa.findByPk(id)
    }

    async findAll() {
        return await PrecioSobremesa.findAll({
            include: [
                {
                    model: Producto,
                    attributes: ['descripcion']
                }
            ]
        });
    }

    async update(id, data) {
        return await PrecioSobremesa.update(data, { where: { id } });
    }

    async updateByProductoId(productoId, data) {
        return await PrecioSobremesa.update(data, { where: { productoId } });
    }

    async delete(id) {
        return await PrecioSobremesa.destroy();
    }

}

module.exports = new PrecioSobremesaRepository();