const precioMinoristaRepository = require('../repositories/precioMinoristaRepository');

class PrecioMinoristaService {
    async createPrecioMinorista(data) {
        return await precioMinoristaRepository.create(data);
    }

    async getPrecioMinoristaById(id) {
        return await precioMinoristaRepository.findById(id);
    }

    async updatePrecioMinorista(id, data) {
        return await precioMinoristaRepository.update(id, data);
    }

    async deletePrecioMinorista(id) {
        return await precioMinoristaRepository.delete(id);
    }

    async getAllPrecioMinoristas() {
        return await precioMinoristaRepository.findAll();
    }
}

module.exports = new PrecioMinoristaService();
