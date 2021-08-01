class ServicePractica {
    constructor(Practica) {
        this.Practica = Practica;
    }

    async find(query, select) {
        const params = {
            where: query,
        };
        if(select){
            params.attributes = select.split(",");
        }
        return this.Practica.findAll(params);
    }

    async findById(idPractica) {
        console.log(idPractica);
        return this.Practica.findOne({ where: { idPractica: parseInt(idPractica) } });
    }

    async create(data) {
        console.log(this.Practica);
        return this.Practica.create(data);
    }

    async updateById(idPractica, data) {
        console.log(idPractica);
        return this.Practica.update(data, { where: { idPractica: idPractica } });
    }

    async daleteById(idPractica) {
        console.log(idPractica);
        return this.Practica.destroy({ where: { idPractica: idPractica } });
    }
}
module.exports = ServicePractica;