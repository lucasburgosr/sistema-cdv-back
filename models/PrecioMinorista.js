const { Model, DataTypes } = require('sequelize')
const sequelize = require('../utils/database.js')
const Producto = require('../models/Producto.js')

class PrecioMinorista extends Model { }

PrecioMinorista.init({
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
    precioUnidad: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'precio_unidad'
    },
    precioCaja: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'precio_caja',
    },
    esMin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        field: "es_minorista",
    }
}, {
    sequelize,
    modelName: 'PrecioMinorista',
    tableName: 'preciominorista',
    timestamps: false
});

module.exports = PrecioMinorista