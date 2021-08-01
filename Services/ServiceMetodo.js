class ServiceMetodo {
    constructor(Metodo) {
        this.Metodo = Metodo;
    }

    async find(query, select) {
        const params = {
            where: query,
        };
        if(select){
            params.attributes = select.split(",");
        }
        return this.Metodo.findAll(params);
    }

    async findById(idMetodo) {
        console.log(idMetodo);
        return this.Metodo.findOne({ where: { idMetodo: parseInt(idMetodo) } });
    }

    async create(data) {
        console.log(this.Metodo);
        return this.Metodo.create(data);
    }

    async updateById(idMetodo, data) {
        console.log(idMetodo);
        return this.Metodo.update(data, { where: { idMetodo: idMetodo } });
    }

    async daleteById(idMetodo) {
        console.log(idMetodo);
        return this.Metodo.destroy({ where: { idMetodo: idMetodo } });
    }
}
module.exports = ServiceMetodo;