const CostoYMargen = require('../models/CostoYMargen.js')
const Producto = require('../models/Producto.js')

class CostoYMargenRepository {
    async create(data) {
        return await CostoYMargen.create(data)
    }

    async findById(id) {
        return await CostoYMargen.findByPk(id)
    }

    async findAll() {
        return await CostoYMargen.findAll({
            include: [
                {
                    model: Producto,
                    as: 'Producto',
                    attributes: ['descripcion', 'unidades']
                }
            ]
        });
    }

    async update(id, data) {
        return await CostoYMargen.update(data, { where: { id } });
    }

    async updateMultiple(records) {
        const updates = records.map(async (record) => {
            const [costosModificados] = await CostoYMargen.update(record, {
                where: { id: record.id }
            });
            return costosModificados > 0; // Devuelve true si se modificó algún registro
        });
    
        return Promise.all(updates); // Espera a que todas las promesas se resuelvan
    }
    

    async delete(id) {
        return await CostoYMargen.destroy({ where: { id } });
    }

}

module.exports = new CostoYMargenRepository();