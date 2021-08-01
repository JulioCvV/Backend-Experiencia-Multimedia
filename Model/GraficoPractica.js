const { DataTypes } = require('sequelize');
const Grafico = require('./Grafico');
const Practica = require('./Practica');

const GraficoPractica = (sequalize)=>{
    const GraficoPractica = sequalize.define(
        'grafico_practica',
        {
            idGraficoPractica: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true},
            idPracticaGP: {type: DataTypes.INTEGER, allowNull: false, references:{model:Practica,key:'idPractica'}},
            idGraficoGP: {type: DataTypes.INTEGER, allowNull: false, references:{model:Grafico,key:'idGrafico'}}
        },
        {sequalize, tableName: 'grafico_practica',timestamps: false}
    );
    return GraficoPractica;
}

module.exports = GraficoPractica;