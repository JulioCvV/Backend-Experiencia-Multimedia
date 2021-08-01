const { DataTypes } = require('sequelize');
const GrupoEstudiante = require('./GrupoEstudiante');

const ProductoCorte1 = (sequalize)=>{
    const ProductoCorte1 = sequalize.define(
        'producto_corte_1',
        {
            idProductoC1: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true},
            nombrePC1: {type: DataTypes.STRING(25), allowNull: false},
            variablePrincipalC1: {type: DataTypes.INTEGER, allowNull: false},
            variableSecundariaC1:{type:DataTypes.INTEGER},
            toleranciaPC1:{type:DataTypes.INTEGER},
            unidadesPC1:{type:DataTypes.INTEGER},
            idGrupoEstudiantePC1:{type:DataTypes.INTEGER,allowNull:false, references:{model:GrupoEstudiante,key:'idGrupoEstudiante'}}
        },
        {sequalize, tableName: 'producto_corte_1',timestamps: false}
    );
    return ProductoCorte1;
}

module.exports = ProductoCorte1;