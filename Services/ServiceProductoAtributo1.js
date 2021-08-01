class ServiceProductoAtributo1 {
    constructor(ProductoAtributo1) {
        this.ProductoAtributo1 = ProductoAtributo1;
    }

    async find(query, select) {
        const params = {
            where: query,
        };
        if(select){
            params.attributes = select.split(",");
        }
        return this.ProductoAtributo1.findAll(params);
    }

    async findById(idProductoAtributo1) {
        console.log(idProductoAtributo1);
        return this.ProductoAtributo1.findOne({ where: { idProductoAtributo1: parseInt(idProductoAtributo1) } });
    }

    async create(data) {
        console.log(this.ProductoAtributo1);
        return this.ProductoAtributo1.create(data);
    }

    async updateById(idProductoAtributo1, data) {
        console.log(idProductoAtributo1);
        return this.ProductoAtributo1.update(data, { where: { idProductoAtributo1: idProductoAtributo1 } });
    }

    async daleteById(idProductoAtributo1) {
        console.log(idProductoAtributo1);
        return this.ProductoAtributo1.destroy({ where: { idProductoAtributo1: idProductoAtributo1 } });
    }
}
module.exports = ServiceProductoAtributo1;
