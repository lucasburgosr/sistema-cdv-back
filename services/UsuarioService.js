const usuarioRepository = require('../repositories/UsuarioRepository');

class UsuarioService {
    async createUsuario(data) {
        return await usuarioRepository.create(data);
    }

    async getUsuarioById(id) {
        return await usuarioRepository.findById(id);
    }

    async updateUsuario(id, data) {
        return await usuarioRepository.update(id, data);
    }

    async deleteUsuario(id) {
        return await usuarioRepository.delete(id);
    }

    async getAllUsuarios() {
        return await usuarioRepository.findAll();
    }
}

module.exports = new UsuarioService();
