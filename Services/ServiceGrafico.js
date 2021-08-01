class ServiceGrafico {
    constructor(Grafico) {
        this.Grafico = Grafico;
    }

    async find(query, select) {
        const params = {
            where: query,
        };
        if(select){
            params.attributes = select.split(",");
        }
        return this.Grafico.findAll(params);
    }

    async findById(idGrafico) {
        console.log(idGrafico);
        return this.Grafico.findOne({ where: { idGrafico: parseInt(idGrafico) } });
    }

    async create(data) {
        console.log(this.Grafico);
        return this.Grafico.create(data);
    }

    async updateById(idGrafico, data) {
        console.log(idGrafico);
        return this.Grafico.update(data, { where: { idGrafico: idGrafico } });
    }

    async daleteById(idGrafico) {
        console.log(idGrafico);
        return this.Grafico.destroy({ where: { idGrafico: idGrafico } });
    }
}
module.exports = ServiceGrafico;