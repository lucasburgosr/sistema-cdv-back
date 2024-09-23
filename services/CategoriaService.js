const categoriaRepository = require('../repositories/CategoriaRepository');

class CategoriaService {
    async createCategoria(data) {
        return await categoriaRepository.create(data);
    }

    async getCategoriaById(id) {
        return await categoriaRepository.findById(id);
    }

    async updateCategoria(id, data) {
        return await categoriaRepository.update(id, data);
    }

    async deleteCategoria(id) {
        return await categoriaRepository.delete(id);
    }

    async getAllCategorias() {
        return await categoriaRepository.findAll();
    }
}

module.exports = new CategoriaService();
