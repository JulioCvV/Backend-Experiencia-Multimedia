class ServiceCorte {
    constructor(Corte) {
        this.Corte = Corte;
    }

    async find(query, select) {
        const params = {
            where: query,
        };
        if(select){
            params.attributes = select.split(",");
        }
        return this.Corte.findAll(params);
    }

    async findById(idCorte) {
        console.log(idCorte);
        return this.Corte.findOne({ where: { idCorte: parseInt(idCorte) } });
    }

    async create(data) {
        console.log(this.Corte);
        return this.Corte.create(data);
    }

    async updateById(idCorte, data) {
        console.log(idCorte);
        return this.Corte.update(data, { where: { idCorte: idCorte } });
    }

    async daleteById(idCorte) {
        console.log(idCorte);
        return this.Corte.destroy({ where: { idCorte: idCorte } });
    }
}
module.exports = ServiceCorte;