const { DataTypes } = require('sequelize');

const Subgrupo = (sequalize)=>{
    const Subgrupo = sequalize.define(
        'subgrupo',
        {
            idSubgrupo: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true},
            nombreSubgrupo: {type: DataTypes.STRING(25), allowNull: false},
            cantidadSubgrupo: {type: DataTypes.INTEGER, allowNull: false}
        },
        {sequalize, tableName: 'subgrupo',timestamps: false}
    );
    return Subgrupo;
}

module.exports = Subgrupo;