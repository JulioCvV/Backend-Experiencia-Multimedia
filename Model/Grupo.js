const { DataTypes } = require('sequelize');
const Practica = require('./Practica');

const Grupo = (sequalize)=>{
    const Grupo = sequalize.define(
        'grupo',
        {
            idGrupo: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true},
            nombreGrupo: {type: DataTypes.STRING(50), allowNull: false},
            idPracticaG: {type: DataTypes.INTEGER, allowNull: false, references:{model:Practica,key:'idPractica'}}
        },
        {sequalize, tableName: 'grupo',timestamps: false}
    );
    return Grupo;
}

module.exports = Grupo;