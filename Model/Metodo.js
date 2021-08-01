const { DataTypes } = require('sequelize');

const Metodo = (sequalize)=>{
    const Metodo = sequalize.define(
        'metodo',
        {
            idMetodo: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true},
            nombreMetodo: {type: DataTypes.STRING(20), allowNull: false},
        },
        {sequalize, tableName: 'metodo',timestamps: false}
    );
    return Metodo;
}

module.exports = Metodo;