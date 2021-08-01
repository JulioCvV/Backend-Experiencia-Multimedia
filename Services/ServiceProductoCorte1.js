class ServiceProductoCorte1 {
    constructor(ProductoCorte1) {
        this.ProductoCorte1 = ProductoCorte1;
    }

    async find(query, select) {
        const params = {
            where: query,
        };
        if(select){
            params.attributes = select.split(",");
        }
        return this.ProductoCorte1.findAll(params);
    }

    async findById(idProductoC1) {
        console.log(idProductoC1);
        return this.ProductoCorte1.findOne({ where: { idProductoC1: parseInt(idProductoC1) } });
    }

    async create(data) {
        console.log(this.ProductoCorte1);
        return this.ProductoCorte1.create(data);
    }

    async updateById(idProductoC1, data) {
        console.log(idProductoC1);
        return this.ProductoCorte1.update(data, { where: { idProductoC1: idProductoC1 } });
    }

    async daleteById(idProductoC1) {
        console.log(idProductoC1);
        return this.ProductoCorte1.destroy({ where: { idProductoC1: idProductoC1 } });
    }
}
module.exports = ServiceProductoCorte1;