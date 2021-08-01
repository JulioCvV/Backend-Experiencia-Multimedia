class ServiceProductoAtributo3 {
    constructor(ProductoAtributo3) {
        this.ProductoAtributo3 = ProductoAtributo3;
    }

    async find(query, select) {
        const params = {
            where: query,
        };
        if(select){
            params.attributes = select.split(",");
        }
        return this.ProductoAtributo3.findAll(params);
    }

    async findById(idProductoAtributo3) {
        console.log(idProductoAtributo3);
        return this.ProductoAtributo3.findOne({ where: { idProductoAtributo3: parseInt(idProductoAtributo3) } });
    }

    async create(data) {
        console.log(this.ProductoAtributo3);
        return this.ProductoAtributo3.create(data);
    }

    async updateById(idProductoAtributo3, data) {
        console.log(idProductoAtributo3);
        return this.ProductoAtributo3.update(data, { where: { idProductoAtributo3: idProductoAtributo3 } });
    }

    async daleteById(idProductoAtributo3) {
        console.log(idProductoAtributo3);
        return this.ProductoAtributo3.destroy({ where: { idProductoAtributo3: idProductoAtributo3 } });
    }
}
module.exports = ServiceProductoAtributo3;
