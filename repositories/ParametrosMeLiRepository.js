const ParametrosMeLi = require('../models/ParametrosMeLi.js')
const Producto = require('../models/Producto.js')

class ParametrosMeLiRepository {
    async create(data) {
        return await ParametrosMeLi.create(data)
    }

    async findById(id) {
        return await ParametrosMeLi.findByPk(id)
    }

    async findAll() {
        return await ParametrosMeLi.findAll()
    }

    async update(id, data) {
        return await ParametrosMeLi.update(data, { where: { id } });
    }

    async delete(id) {
        return await ParametrosMeLi.destroy();
    }

}

module.exports = new ParametrosMeLiRepository();