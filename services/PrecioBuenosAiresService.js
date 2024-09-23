const precioBuenosAiresRepository = require('../repositories/PrecioBuenosAiresRepository');

class PrecioBuenosAiresService {
    async createPrecioBuenosAires(data) {
        return await precioDistribucionRepository.create(data);
    }

    async getPrecioBuenosAiresById(id) {
        return await precioDistribucionRepository.findById(id);
    }

    async updatePrecioBuenosAires(id, data) {
        return await precioDistribucionRepository.update(id, data);
    }

    async deletePrecioBuenosAires(id) {
        return await precioDistribucionRepository.delete(id);
    }

    async getAllPreciosBuenosAires() {
        return await precioDistribucionRepository.findAll();
    }
}

module.exports = new PrecioBuenosAiresService();
