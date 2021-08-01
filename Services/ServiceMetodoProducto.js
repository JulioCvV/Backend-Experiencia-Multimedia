class ServiceMetodoProducto {
    constructor(MetodoProducto) {
        this.MetodoProducto = MetodoProducto;
    }

    async find(query, select) {
        const params = {
            where: query,
        };
        if(select){
            params.attributes = select.split(",");
        }
        return this.MetodoProducto.findAll(params);
    }

    async findById(idMetodoProducto) {
        console.log(idMetodoProducto);
        return this.MetodoProducto.findOne({ where: { idMetodoProducto: parseInt(idMetodoProducto) } });
    }

    async create(data) {
        console.log(this.MetodoProducto);
        return this.MetodoProducto.create(data);
    }

    async updateById(idMetodoProducto, data) {
        console.log(idMetodoProducto);
        return this.MetodoProducto.update(data, { where: { idMetodoProducto: idMetodoProducto } });
    }

    async daleteById(idMetodoProducto) {
        console.log(idMetodoProducto);
        return this.MetodoProducto.destroy({ where: { idMetodoProducto: idMetodoProducto } });
    }
}
module.exports = ServiceMetodoProducto;