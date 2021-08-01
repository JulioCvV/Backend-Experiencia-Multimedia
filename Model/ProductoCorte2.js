const { DataTypes } = require('sequelize');
const GrupoEstudiante = require('./GrupoEstudiante');

const ProductoCorte2 = (sequalize)=>{
    const ProductoCorte2 = sequalize.define(
        'producto_corte_2',
        {
            idProductoC2: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true},
            nombrePC2: {type: DataTypes.STRING(25), allowNull: false},
            variablePrincipalC2: {type: DataTypes.INTEGER, allowNull: false},
            variableSecundariaC2:{type:DataTypes.INTEGER},
            toleranciaPC2:{type:DataTypes.INTEGER},
            idGrupoEstudiantePC2:{type:DataTypes.INTEGER,allowNull:false, references:{model:GrupoEstudiante,key:'idGrupoEstudiante'}}
        },
        {sequalize, tableName: 'producto_corte_2',timestamps: false}
    );
    return ProductoCorte2;
}

module.exports = ProductoCorte2;