const precioMayoristaRepository = require('../repositories/PrecioMayoristaRepository');

class PrecioMayoristaService {
    async createPrecioMayorista(data) {
        return await precioMayoristaRepository.create(data);
    }

    async getPrecioMayoristaById(id) {
        return await precioMayoristaRepository.findById(id);
    }

    async updatePrecioMayorista(id, data) {
        return await precioMayoristaRepository.update(id, data);
    }

    async deletePrecioMayorista(id) {
        return await precioMayoristaRepository.delete(id);
    }

    async getAllPrecioMayoristas() {
        return await precioMayoristaRepository.findAll();
    }
}

module.exports = new PrecioMayoristaService();
