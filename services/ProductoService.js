const precioMinoristaRepository = require('../repositories/PrecioMinoristaRepository');
const precioMayoristaRepository = require('../repositories/PrecioMayoristaRepository');
const precioSobremesaRepository = require('../repositories/PrecioSobremesaRepository');
const precioDistribucionRepository = require('../repositories/PrecioDistribucionRepository');
const precioMercadoLibreRepository = require('../repositories/PrecioMercadoLibreRepository');
const precioBsAsRepository = require('../repositories/PrecioBuenosAiresRepository');
const productoRepository = require('../repositories/ProductoRepository');

class ProductoService {

    async createProducto(data) {
        const producto = await productoRepository.create(data);

        await precioMayoristaRepository.create({
            productoId: producto.id,
            esMay: data.esMayorista || false,
        })


        await precioMinoristaRepository.create({
            productoId: producto.id,
            esMin: data.esMinorista || false,
        })

        await precioBsAsRepository.create({
            productoId: producto.id,
            esBsAs: data.esBsAs || false,
        })


        await precioMercadoLibreRepository.create({
            productoId: producto.id,
            esMeLi: data.esMeLi || false,
        })

        await precioDistribucionRepository.create({
            productoId: producto.id,
            esDistri: data.esDistri || false,
        })

        await precioSobremesaRepository.create({
            productoId: producto.id,
            esSobremesa: data.esSobremesa || false,
        })

        return producto;
    }

    async getProductoById(id) {
        return await productoRepository.findById(id);
    }

    async updateProducto(id, data) {
        return await productoRepository.update(id, data);
    }

    async deleteProducto(id) {
        return await productoRepository.delete(id);
    }

    async getAllProductos() {
        return await productoRepository.findAll();
    }
}

module.exports = new ProductoService();
