const precioSobremesaRepository = require('../repositories/PrecioSobremesaRepository');

class PrecioSobremesaService {
    async createPrecioSobremesa(data) {
        return await precioSobremesaRepository.create(data);
    }

    async getPrecioSobremesaById(id) {
        return await precioSobremesaRepository.findById(id);
    }

    async updatePrecioSobremesa(id, data) {
        return await precioSobremesaRepository.update(id, data);
    }

    async deletePrecioSobremesa(id) {
        return await precioSobremesaRepository.delete(id);
    }

    async getAllPrecioSobremesas() {
        return await precioSobremesaRepository.findAll();
    }
}

module.exports = new PrecioSobremesaService();
