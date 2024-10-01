const promocionRepository = require('../repositories/PromocionRepository')

class PromocionService {
    async createPromocion(data) {
        return await promocionRepository.create(data);
    }

    async getPromocionById(id) {
        return await promocionRepository.findById(id);
    }

    async updatePromocion(id, data) {
        return await promocionRepository.update(id, data);
    }

    async deletePromocion(id) {
        return await promocionRepository.delete(id);
    }

    async getAllPromocions() {
        return await promocionRepository.findAll();
    }
}

module.exports = new PromocionService();