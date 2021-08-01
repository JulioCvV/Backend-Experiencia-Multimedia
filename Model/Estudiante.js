const { DataTypes } = require('sequelize');

const Estudiante = (sequalize)=>{
    const Estudiante = sequalize.define(
        'estudiante',
        {
            idEstudiante: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true},
            nombreEstudiante: {type: DataTypes.STRING(50), allowNull: false},
            apellidoEstudiante: {type: DataTypes.STRING(50), allowNull: false}
        },
        {sequalize, tableName: 'estudiante',timestamps: false}
    );
    return Estudiante;
}

module.exports = Estudiante;