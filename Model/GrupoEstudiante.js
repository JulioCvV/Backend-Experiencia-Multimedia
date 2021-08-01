const { DataTypes } = require('sequelize');
const Estudiante = require('./Estudiante');
const Grupo = require('./Grupo');

const GrupoEstudiante = (sequalize)=>{
    const GrupoEstudiante = sequalize.define(
        'grupo_estudiante',
        {
            idGrupoEstudiante: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true},
            fechaHoraGrupoEstudiante: {type: DataTypes.DATE, allowNull: false},
            idGrupoGE: {type: DataTypes.INTEGER, allowNull: false, references:{model:Grupo,key:'idGrupo'}},
            idEstudianteGE:{type:DataTypes.INTEGER,allowNull:false, references:{model:Estudiante,key:'idEstudiante'}}
        },
        {sequalize, tableName: 'grupo_estudiante',timestamps: false}
    );
    return GrupoEstudiante;
}

module.exports = GrupoEstudiante;