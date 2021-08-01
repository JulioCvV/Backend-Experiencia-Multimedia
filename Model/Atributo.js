const { DataTypes } = require('sequelize');

const Atributo = (sequalize)=>{
    const Atributo = sequalize.define(
        'atributo',
        {
            idAtributo: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true},
            nombreAtributo: {type: DataTypes.STRING(50), allowNull: false},
        },
        {sequalize, tableName: 'atributo',timestamps: false}
    );
    return Atributo;
}

module.exports = Atributo;