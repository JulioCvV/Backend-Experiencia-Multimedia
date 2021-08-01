class ServiceProductoCorte2 {
    constructor(ProductoCorte2) {
        this.ProductoCorte2 = ProductoCorte2;
    }

    async find(query, select) {
        const params = {
            where: query,
        };
        if(select){
            params.attributes = select.split(",");
        }
        return this.ProductoCorte2.findAll(params);
    }

    async findById(idProductoC2) {
        console.log(idProductoC2);
        return this.ProductoCorte2.findOne({ where: { idProductoC2: parseInt(idProductoC2) } });
    }

    async create(data) {
        console.log(this.ProductoCorte2);
        return this.ProductoCorte2.create(data);
    }

    async updateById(idProductoC2, data) {
        console.log(idProductoC2);
        return this.ProductoCorte2.update(data, { where: { idProductoC2: idProductoC2 } });
    }

    async daleteById(idProductoC2) {
        console.log(idProductoC2);
        return this.ProductoCorte2.destroy({ where: { idProductoC2: idProductoC2 } });
    }
}
module.exports = ServiceProductoCorte2;