const { DataTypes } = require('sequelize');
const ProductoCorte2 = require('./ProductoCorte2');
const Subgrupo = require('./Subgrupo');

const SubgrupoProducto = (sequalize)=>{
    const SubgrupoProducto = sequalize.define(
        'subgrupo_producto',
        {
            idSubgrupoProducto: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true},
            idProductoC2SP: {type: DataTypes.INTEGER, allowNull: false,references:{model:ProductoCorte2,key:'idProductoC2'}},
            idSubgrupoSP: {type: DataTypes.INTEGER, allowNull: false,references:{model:Subgrupo,key:'idSubgrupo'}}
        },
        {sequalize, tableName: 'subgrupo_producto',timestamps: false}
    );
    return SubgrupoProducto;
}

module.exports = SubgrupoProducto;