const bodegaRepository = require('../repositories/BodegaRepository');

class BodegaService {
    async createBodega(data) {
        return await bodegaRepository.create(data);
    }

    async getBodegaById(id) {
        return await bodegaRepository.findById(id);
    }

    async updateBodega(id, data) {
        return await bodegaRepository.update(id, data);
    }

    async deleteBodega(id) {
        return await bodegaRepository.delete(id);
    }

    async getAllBodegas() {
        return await bodegaRepository.findAll();
    }
}

module.exports = new BodegaService();
