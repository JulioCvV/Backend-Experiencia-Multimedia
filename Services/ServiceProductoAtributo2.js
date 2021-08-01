class ServiceProductoAtributo2 {
    constructor(ProductoAtributo2) {
        this.ProductoAtributo2 = ProductoAtributo2;
    }

    async find(query, select) {
        const params = {
            where: query,
        };
        if(select){
            params.attributes = select.split(",");
        }
        return this.ProductoAtributo2.findAll(params);
    }

    async findById(idProductoAtributo2) {
        console.log(idProductoAtributo2);
        return this.ProductoAtributo2.findOne({ where: { idProductoAtributo2: parseInt(idProductoAtributo2) } });
    }

    async create(data) {
        console.log(this.ProductoAtributo2);
        return this.ProductoAtributo2.create(data);
    }

    async updateById(idProductoAtributo2, data) {
        console.log(idProductoAtributo2);
        return this.ProductoAtributo2.update(data, { where: { idProductoAtributo2: idProductoAtributo2 } });
    }

    async daleteById(idProductoAtributo2) {
        console.log(idProductoAtributo2);
        return this.ProductoAtributo2.destroy({ where: { idProductoAtributo2: idProductoAtributo2 } });
    }
}
module.exports = ServiceProductoAtributo2;
