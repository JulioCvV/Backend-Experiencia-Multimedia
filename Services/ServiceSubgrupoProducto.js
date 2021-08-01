class ServiceSubgrupoProducto {
    constructor(SubgrupoProducto) {
        this.SubgrupoProducto = SubgrupoProducto;
    }

    async find(query, select) {
        const params = {
            where: query,
        };
        if(select){
            params.attributes = select.split(",");
        }
        return this.SubgrupoProducto.findAll(params);
    }

    async findById(idSubgrupoProducto) {
        console.log(idSubgrupoProducto);
        return this.SubgrupoProducto.findOne({ where: { idSubgrupoProducto: parseInt(idSubgrupoProducto) } });
    }

    async create(data) {
        console.log(this.SubgrupoProducto);
        return this.SubgrupoProducto.create(data);
    }

    async updateById(idSubgrupoProducto, data) {
        console.log(idSubgrupoProducto);
        return this.SubgrupoProducto.update(data, { where: { idSubgrupoProducto: idSubgrupoProducto } });
    }

    async daleteById(idSubgrupoProducto) {
        console.log(idSubgrupoProducto);
        return this.SubgrupoProducto.destroy({ where: { idSubgrupoProducto: idSubgrupoProducto } });
    }
}
module.exports = ServiceSubgrupoProducto;