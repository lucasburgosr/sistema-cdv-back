const { Model, DataTypes } = require('sequelize')
const sequelize = require('../utils/database.js')
const Producto = require('../models/Producto.js')

class CostoYMargen extends Model { }

CostoYMargen.init({
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
    costoConIva: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'costo_con_iva'
    },
    costoSinIva: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'costo_sin_iva'
    },
    iva: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        field: 'iva'
    },
    descuento: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'descuento'
    },
    descuentoPp: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'descuento_prontopago'
    },
    acciones1: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'acciones_1'
    },
    acciones2: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'acciones_2'
    },
    margenMin: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'margen_minorista'
    },
    margenMay: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'margen_mayorista'
    },
    margenMeLi: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'margen_mercadolibre'
    },
    margenBsAs: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'margen_buenosaires'
    },
    margenDepo: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'margen_deposito'
    },
    margenDistri: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'margen_distribuidora'
    },
    margenSobremesa: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'margen_sobremesa'
    },
    fechaActualizacionCosto: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        field: 'fecha_actualizacion_costo'
    },
    fechaActualizacionMargenODescuento: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        field: 'fecha_actualizacion_margen_o_descuento'
    },
    costoEnvioCaja: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'costo_envio_caja',
    },
}, {
    sequelize,
    modelName: 'CostoYMargen',
    tableName: 'costoymargen',
    timestamps: false,
});

module.exports = CostoYMargen