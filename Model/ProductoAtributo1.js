const { DataTypes } = require('sequelize');
const Atributo = require('./Atributo');
const ProductoCorte1 = require('./ProductoCorte1');

const ProductoAtributo1 = (sequalize)=>{
    const ProductoAtributo1 = sequalize.define(
        'producto_atributo_1',
        {
            idProductoAtributo1: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true},
            idAtributoPA1: {type: DataTypes.INTEGER, allowNull: false, references:{model:Atributo,key:'idAtributo'}},
            idProductoC1A: {type: DataTypes.INTEGER, allowNull: false, references:{model:ProductoCorte1,key:'idProductoC1'}}
        },
        {sequalize, tableName: 'producto_atributo_1',timestamps: false}
    );
    return ProductoAtributo1;
}

module.exports = ProductoAtributo1;
