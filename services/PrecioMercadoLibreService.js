const precioMercadoLibreRepository = require('../repositories/PrecioMercadoLibreRepository');

class PrecioMercadoLibreService {
    async createPrecioMercadoLibre(data) {
        return await precioMercadoLibreRepository.create(data);
    }

    async getPrecioMercadoLibreById(id) {
        return await precioMercadoLibreRepository.findById(id);
    }

    async updatePrecioMercadoLibre(id, data) {
        return await precioMercadoLibreRepository.update(id, data);
    }

    async deletePrecioMercadoLibre(id) {
        return await precioMercadoLibreRepository.delete(id);
    }

    async getAllPrecioMercadoLibres() {
        return await precioMercadoLibreRepository.findAll();
    }
}

module.exports = new PrecioMercadoLibreService();
