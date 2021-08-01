class ServiceAtributo {
    constructor(Atributo) {
        this.Atributo = Atributo;
    }

    async find(query, select) {
        const params = {
            where: query,
        };
        if(select){
            params.attributes = select.split(",");
        }
        return this.Atributo.findAll(params);
    }

    async findById(idAtributo) {
        console.log(idAtributo);
        return this.Atributo.findOne({ where: { idAtributo: parseInt(idAtributo) } });
    }

    async create(data) {
        console.log(this.Atributo);
        return this.Atributo.create(data);
    }

    async updateById(idAtributo, data) {
        console.log(idAtributo);
        return this.Atributo.update(data, { where: { idAtributo: idAtributo } });
    }

    async daleteById(idAtributo) {
        console.log(idAtributo);
        return this.Atributo.destroy({ where: { idAtributo: idAtributo } });
    }
}
module.exports = ServiceAtributo;