const { DataTypes } = require('sequelize');

const Grafico = (sequalize)=>{
    const Grafico = sequalize.define(
        'grafico',
        {
            idGrafico: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true},
            nombreGrafico: {type: DataTypes.STRING(50), allowNull: false},
        },
        {sequalize, tableName: 'grafico',timestamps: false}
    );
    return Grafico;
}

module.exports = Grafico;