const precioDistribucionRepository = require('../repositories/PrecioDistribucionRepository');

class PrecioDistribucionService {
    async createPrecioDistribucion(data) {
        return await precioDistribucionRepository.create(data);
    }

    async getPrecioDistribucionById(id) {
        return await precioDistribucionRepository.findById(id);
    }

    async updatePrecioDistribucion(id, data) {
        return await precioDistribucionRepository.update(id, data);
    }

    async deletePrecioDistribucion(id) {
        return await precioDistribucionRepository.delete(id);
    }

    async getAllPrecioDistribucions() {
        return await precioDistribucionRepository.findAll();
    }
}

module.exports = new PrecioDistribucionService();
