const Usuario = require('../models/Usuario.js')

class UsuarioRepository {
    async create(data) {
        return await Usuario.create(data)
    }

    async findById(id) {
        return await Usuario.findByPk(id)
    }

    async findAll() {
        return await Usuario.findAll();
    }

    async update(id, data) {
        return await Usuario.update(data, { where: { id } });
    }

    async delete(id) {
        return await Usuario.destroy();
    }

}

module.exports = new UsuarioRepository();