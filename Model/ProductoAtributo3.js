const { DataTypes } = require('sequelize');
const Atributo = require('./Atributo');
const ProductoCorte3 = require('./ProductoCorte3');

const ProductoAtributo3 = (sequalize)=>{
    const ProductoAtributo3 = sequalize.define(
        'producto_atributo_3',
        {
            idProductoAtributo3: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true},
            idAtributoPA3: {type: DataTypes.INTEGER, allowNull: false, references:{model:Atributo,key:'idAtributo'}},
            idProductoC3A: {type: DataTypes.INTEGER, allowNull: false, references:{model:ProductoCorte3,key:'idProductoC3'}}
        },
        {sequalize, tableName: 'producto_atributo_3',timestamps: false}
    );
    return ProductoAtributo3;
}

module.exports = ProductoAtributo3;
