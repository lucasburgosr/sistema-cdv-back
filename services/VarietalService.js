const varietalRepository = require('../repositories/VarietalRepository');

class VarietalService {
    async createVarietal(data) {
        return await varietalRepository.create(data);
    }

    async getVarietalById(id) {
        return await varietalRepository.findById(id);
    }

    async updateVarietal(id, data) {
        return await varietalRepository.update(id, data);
    }

    async deleteVarietal(id) {
        return await varietalRepository.delete(id);
    }

    async getAllVarietals() {
        return await varietalRepository.findAll();
    }
}

module.exports = new VarietalService();
