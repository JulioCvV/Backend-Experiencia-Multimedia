const { DataTypes } = require('sequelize');
const GrupoEstudiante = require('./GrupoEstudiante');

const ProductoCorte3 = (sequalize)=>{
    const ProductoCorte3 = sequalize.define(
        'producto_corte_3',
        {
            idProductoC3: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true},
            nombrePC3: {type: DataTypes.STRING(25), allowNull: false},
            variablePrincipalC3: {type: DataTypes.INTEGER},
            variableSecundariaC3:{type:DataTypes.INTEGER},
            toleranciaPC3:{type:DataTypes.INTEGER},
            tamanioLote:{type:DataTypes.INTEGER},
            aql:{type:DataTypes.STRING(20)},
            severidad:{type:DataTypes.STRING(25)},
            nivelInspeccion:{type:DataTypes.STRING(25)},
            idGrupoEstudiantePC3:{type:DataTypes.INTEGER,allowNull:false, references:{model:GrupoEstudiante,key:'idGrupoEstudiante'}}
        },
        {sequalize, tableName: 'producto_corte_3',timestamps: false}
    );
    return ProductoCorte3;
}

module.exports = ProductoCorte3;