const { DataTypes } = require('sequelize');
const Atributo = require('./Atributo');
const ProductoCorte2 = require('./ProductoCorte2');

const ProductoAtributo2 = (sequalize)=>{
    const ProductoAtributo2 = sequalize.define(
        'producto_atributo_2',
        {
            idProductoAtributo2: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true},
            idAtributoPA2: {type: DataTypes.INTEGER, allowNull: false, references:{model:Atributo,key:'idAtributo'}},
            idProductoC2A: {type: DataTypes.INTEGER, allowNull: false, references:{model:ProductoCorte2,key:'idProductoC2'}}
        },
        {sequalize, tableName: 'producto_atributo_2',timestamps: false}
    );
    return ProductoAtributo2;
}

module.exports = ProductoAtributo2;
