class ServiceGraficoPractica {
    constructor(GraficoPractica) {
        this.GraficoPractica = GraficoPractica;
    }

    async find(query, select) {
        const params = {
            where: query,
        };
        if(select){
            params.attributes = select.split(",");
        }
        return this.GraficoPractica.findAll(params);
    }

    async findById(idGraficoPractica) {
        console.log(idGraficoPractica);
        return this.GraficoPractica.findOne({ where: { idGraficoPractica: parseInt(idGraficoPractica) } });
    }

    async create(data) {
        console.log(this.GraficoPractica);
        return this.GraficoPractica.create(data);
    }

    async updateById(idGraficoPractica, data) {
        console.log(idGraficoPractica);
        return this.GraficoPractica.update(data, { where: { idGraficoPractica: idGraficoPractica } });
    }

    async daleteById(idGraficoPractica) {
        console.log(idGraficoPractica);
        return this.GraficoPractica.destroy({ where: { idGraficoPractica: idGraficoPractica } });
    }
}
module.exports = ServiceGraficoPractica;