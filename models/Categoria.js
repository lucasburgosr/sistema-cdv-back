const { Model, DataTypes } = require('sequelize')
const sequelize = require('../utils/database.js')

class Categoria extends Model { }

Categoria.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'nombre'
    }
}, {
    sequelize,
    modelName: 'Categoria',
    tableName: 'categoria',
    timestamps: false
})

module.exports = Categoria