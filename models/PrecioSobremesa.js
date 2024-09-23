const { Model, DataTypes } = require('sequelize')
const sequelize = require('../utils/database.js')
const Producto = require('../models/Producto.js')

class PrecioSobremesa extends Model { }

PrecioSobremesa.init({
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
        field: 'producto_id'
    },
    precio: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'precio'
    },
    precioPorCopa: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'precio_por_copa',
    },
    esSobremesa: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        field: "es_sobremesa",
    }
}, {
    sequelize,
    modelName: 'PrecioSobremesa',
    tableName: 'preciosobremesa',
    timestamps: false
});

module.exports = PrecioSobremesa