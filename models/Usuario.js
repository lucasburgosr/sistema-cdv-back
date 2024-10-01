const { Model, DataTypes } = require('sequelize')
const sequelize = require('../utils/database.js')

class Usuario extends Model { }

Usuario.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombreUsuario: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'nombre_de_usuario'
    },
    clave: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "clave_usuario"
    },
    esAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        field: 'es_administrador',
    },
    vistaPrecioMay: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        field: 'vista_precio_mayorista',
    },
    vistaPrecioMin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        field: 'vista_precio_minorista',
    },
    vistaPrecioMeLi: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        field: 'vista_precio_mercadolibre',
    },
    vistaPrecioDistri: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        field: 'vista_precio_distribuidora',
    },
    vistaPrecioDepo: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        field: 'vista_precio_deposito',
    },
    vistaPrecioBsAs: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        field: 'vista_precio_buenosaires',
    },
    vistaPrecioSobremesa: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        field: 'vista_precio_sobremesa'
    }
}, {
    sequelize,
    modelName: 'Usuario',
    tableName: 'usuario',
    timestamps: false,
});

module.exports = Usuario;