const Producto = require('../models/Producto.js')
const Bodega = require('../models/Bodega.js')
const Categoria = require('../models/Categoria.js')
const CostoYMargen = require('../models/CostoYMargen.js')
const PrecioDistribucion = require('../models/PrecioDistribucion.js')
const PrecioMayorista = require('../models/PrecioMayorista.js')
const PrecioMercadoLibre = require('../models/PrecioMercadoLibre.js')
const PrecioMinorista = require('../models/PrecioMinorista.js')
const PrecioSobremesa = require('../models/PrecioSobremesa.js')
const Varietal = require('../models/Varietal.js')
const PrecioBuenosAires = require('../models/PrecioBuenosAires.js')

//Relación entre Producto y Bodega
Producto.belongsTo(Bodega, { foreignKey: 'bodegaId' })
Bodega.hasMany(Producto, { foreignKey: 'bodegaId' })

//Relación entre Producto y Varietal
Producto.belongsTo(Varietal, { foreignKey: 'varietalId' })
Varietal.hasMany(Producto, { foreignKey: 'varietalId' })

//Relación entre Producto y Categoría
Producto.belongsTo(Categoria, { foreignKey: 'categoriaId', as: 'Categoria'})
Categoria.hasMany(Producto, { foreignKey: 'categoriaId', as: 'Producto' })

//Relación entre Producto y PrecioMercadoLibre
PrecioMercadoLibre.belongsTo(Producto, { foreignKey: 'productoId', as: 'Producto' })
Producto.hasOne(PrecioMercadoLibre, { foreignKey: 'productoId', as: 'PrecioMercadoLibre' })

//Relación entre Producto y PrecioDistribución
PrecioDistribucion.belongsTo(Producto, { foreignKey: 'productoId', as: 'Producto' })
Producto.hasOne(PrecioDistribucion, { foreignKey: 'productoId', as: 'PrecioDistribucion' })

//Relación entre Producto y PrecioMayorista
PrecioMayorista.belongsTo(Producto, { foreignKey: 'productoId', as: 'Producto' })
Producto.hasOne(PrecioMayorista, { foreignKey: 'productoId', as: 'PrecioMayorista' })

//Relación entre Producto y PrecioMinorista
PrecioMinorista.belongsTo(Producto, { foreignKey: 'productoId',as: 'Producto' })
Producto.hasOne(PrecioMinorista, { foreignKey: 'productoId', as: 'PrecioMinorista' })

//Relación entre Producto y PrecioSobremesa
PrecioSobremesa.belongsTo(Producto, { foreignKey: 'productoId', as: 'Producto' })
Producto.hasOne(PrecioSobremesa, { foreignKey: 'productoId', as: 'PrecioSobremesa' })

//Relación entre Producto y PrecioBuenosAires
PrecioBuenosAires.belongsTo(Producto, { foreignKey: 'productoId', as: 'Producto'})
Producto.hasOne(PrecioBuenosAires, { foreignKey: 'productoId', as: 'PrecioBuenosAires' })

//Relación entre Producto y CostoYMargen
CostoYMargen.belongsTo(Producto, { foreignKey: 'productoId', as: 'Producto' })
Producto.hasOne(CostoYMargen, { foreignKey: 'productoId', as: 'CostoYMargen' })
