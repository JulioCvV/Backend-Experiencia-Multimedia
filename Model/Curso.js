const { DataTypes } = require('sequelize');
const Profesor = require('./Profesor');

const Curso = (sequalize)=>{
    const Curso = sequalize.define(
        'curso',
        {
            idCurso: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true},
            nombreCurso: {type: DataTypes.STRING(25), allowNull: false},
            periodoAcademico: {type: DataTypes.STRING(25), allowNull: false},
            idProfesorC:{type: DataTypes.INTEGER, allowNull: false, references:{model:Profesor,key:'idProfesor'}}
        },
        {sequalize, tableName: 'curso',timestamps: false}
    );
    // Curso.belongsTo(Profesor);
    return Curso;
}

module.exports = Curso;