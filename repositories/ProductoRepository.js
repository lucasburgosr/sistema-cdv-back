const Bodega = require('../models/Bodega.js');
const Producto = require('../models/Producto.js')
const Varietal = require('../models/Varietal.js')
const Categoria = require('../models/Categoria.js');
const PrecioMinorista = require('../models/PrecioMinorista.js');
const PrecioMayorista = require('../models/PrecioMayorista.js');
const PrecioBuenosAires = require('../models/PrecioBuenosAires.js');
const PrecioDistribucion = require('../models/PrecioDistribucion.js');
const PrecioSobremesa = require('../models/PrecioSobremesa.js');
const CostoYMargen = require('../models/CostoYMargen.js');
const PrecioMercadoLibre = require('../models/PrecioMercadoLibre.js');

class ProductoRepository {
    async create(data) {
        return await Producto.create(data)
    }

    async findById(id) {
        return await Producto.findByPk(id)
    }

    async findAll() {
        return await Producto.findAll({
            include: [
                {
                    model: Bodega,
                    attributes: ['nombre']
                },
                {
                    model: Categoria,
                    as: 'Categoria',
                    attributes: ['nombre']
                },
                {
                    model: Varietal,
                    as: 'Varietal',
                    attributes: ['nombre']
                },
                {
                    model: PrecioMinorista,
                    as: 'PrecioMinorista',
                    attributes: ['precioUnidad', 'precioCaja', 'esMin']
                },
                {
                    model: PrecioMayorista,
                    as: 'PrecioMayorista',
                    attributes: ['precioUnidad', 'precioCaja', 'esMay']
                },
                {
                    model: PrecioBuenosAires,
                    as: 'PrecioBuenosAires',
                    attributes: ['precioUnidad', 'precioCaja', 'esBsAs']
                },
                {
                    model: PrecioDistribucion,
                    as: 'PrecioDistribucion',
                    attributes: ['precioMayUnidad', 'precioMayCaja', 'esDistri']
                },
                {
                    model: PrecioSobremesa,
                    as: 'PrecioSobremesa',
                    attributes: ['precio', 'precioPorCopa', 'esSobremesa']
                },
                {
                    model: PrecioMercadoLibre,
                    as: 'PrecioMercadoLibre',
                    attributes: ['precioMLIndividual', 'precioMLCaja', 'precioCuotas3Individual', 'precioCuotas6Individual', 'precioCuotas12Individual', 'precioCuotas3Caja', 'precioCuotas6Caja', 'precioCuotas12Caja', 'esMeLi']
                },
                {
                    model: CostoYMargen,
                    as: 'CostoYMargen',
                    attributes: ['costoConIva', 'margenMin'],
                }
            ]
        });
    }

    async update(id, data) {
        return await Producto.update(data, { where: { id } });
    }

    async delete(id) {
        return await Producto.destroy({ where: { id } });
    }
    

}

module.exports = new ProductoRepository();