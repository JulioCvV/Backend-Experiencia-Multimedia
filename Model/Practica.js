const { DataTypes } = require('sequelize');
const Corte = require('./Corte');
const Curso = require('./Curso');

const Practica = (sequalize)=>{
    const Practica = sequalize.define(
        'practica',
        {
            idPractica: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true},
            nombrePractica: {type: DataTypes.STRING(100), allowNull: false},
            descripcionPractica: {type: DataTypes.TEXT, allowNull: false},
            fechaHoraPublicacionPractica:{type: DataTypes.DATE, allowNull:false},
            idCursoP:{type:DataTypes.INTEGER, allowNull: false, references:{model:Curso,key:'idCurso'}},
            idCorteP:{type:DataTypes.INTEGER, allowNull: false, references:{model:Corte,key:'idCorte'}}
        },
        {sequalize, tableName: 'practica',timestamps: false}
    );
    return Practica;
}

module.exports = Practica;