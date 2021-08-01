class ServiceProductoCorte3 {
    constructor(ProductoCorte3) {
        this.ProductoCorte3 = ProductoCorte3;
    }

    async find(query, select) {
        const params = {
            where: query,
        };
        if(select){
            params.attributes = select.split(",");
        }
        return this.ProductoCorte3.findAll(params);
    }

    async findById(idProductoC3) {
        console.log(idProductoC3);
        return this.ProductoCorte3.findOne({ where: { idProductoC3: parseInt(idProductoC3) } });
    }

    async create(data) {
        console.log(this.ProductoCorte3);
        return this.ProductoCorte3.create(data);
    }

    async updateById(idProductoC3, data) {
        console.log(idProductoC3);
        return this.ProductoCorte3.update(data, { where: { idProductoC3: idProductoC3 } });
    }

    async daleteById(idProductoC3) {
        console.log(idProductoC3);
        return this.ProductoCorte3.destroy({ where: { idProductoC3: idProductoC3 } });
    }
}
module.exports = ServiceProductoCorte3;