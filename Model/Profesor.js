const { DataTypes } = require('sequelize');

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
    return Profesor;
}

module.exports = Profesor;