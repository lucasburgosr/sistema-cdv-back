const { Model, DataTypes } = require('sequelize')
const sequelize = require('../utils/database.js')
const Producto = require('../models/Producto.js')

class PrecioDistribucion extends Model { }

PrecioDistribucion.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    productoId: {
        type: DataTypes.INTEGER,
        references: {
            model: Producto,
            key: 'id',
        },
        allowNull: false,
        field: 'producto_id',
    },
    cantidadMinVenta: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'cantidad_minima_venta'
    },
    precioMayUnidad: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'precio_mayorista_unidad'
    },
    precioMayCaja: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'precio_mayorista_caja',
    },
    porcentajeDescuentoPosible: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'porcentaje_descuento_posible'
    },
    esDistri: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        field: "es_distribucion",
    }
}, {
    sequelize,
    modelName: 'PrecioDistribucion',
    tableName: 'preciodistribucion',
    timestamps: false
});

module.exports = PrecioDistribucion