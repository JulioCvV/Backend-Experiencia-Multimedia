const { DataTypes } = require('sequelize');
const Curso = require('./Curso');

const Profesor = (sequalize)=>{
    const Profesor = sequalize.define(
        'profesor',
        {
            idProfesor: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true},
            nombreProfesor: {type: DataTypes.STRING(50), allowNull: false},
            apellidoProfesor: {type: DataTypes.STRING(50), allowNull: false}
        },
        {sequalize, tableName: 'profesor',timestamps: false}
    );
    // Profesor.hasMany(Curso);
    return Profesor;
}

module.exports = Profesor;