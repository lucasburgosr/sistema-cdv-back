const { Model, DataTypes } = require('sequelize')
const sequelize = require('../utils/database.js')
const Producto = require('../models/Producto.js')

class PrecioMayorista extends Model { }

PrecioMayorista.init({
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
        field: 'cantidad_minima_venta',
    },
    precioUnidad: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'precio_unidad',
    },
    precioCaja: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'precio_caja',
    },
    esMay: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        field: "es_mayorista",
    }
}, {
    sequelize,
    modelName: 'PrecioMayorista',
    tableName: 'preciomayorista',
    timestamps: false
});

module.exports = PrecioMayorista