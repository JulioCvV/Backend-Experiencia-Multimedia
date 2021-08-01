const { DataTypes } = require('sequelize');
const Metodo = require('./Metodo');
const ProductoCorte3 = require('./ProductoCorte3');

const MetodoProducto = (sequalize)=>{
    const MetodoProducto = sequalize.define(
        'metodo_producto',
        {
            idMetodoProducto: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true},
            idMetodoMP: {type: DataTypes.INTEGER, allowNull: false, references:{model:Metodo,key:'idMetodo'}},
            idProductoMP: {type: DataTypes.INTEGER, allowNull: false, references:{model:ProductoCorte3,key:'idProductoC3'}}
        },
        {sequalize, tableName: 'metodo_producto',timestamps: false}
    );
    return MetodoProducto;
}

module.exports = MetodoProducto;