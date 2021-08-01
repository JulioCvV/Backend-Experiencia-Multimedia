const { DataTypes } = require('sequelize');

const Corte = (sequalize)=>{
    const Corte = sequalize.define(
        'corte',
        {
            idCorte: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true},
            nombreCorte: {type: DataTypes.STRING(20), allowNull: false},
        },
        {sequalize, tableName: 'corte',timestamps: false}
    );
    return Corte;
}

module.exports = Corte;