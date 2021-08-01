class ServiceSubgrupo {
    constructor(Subgrupo) {
        this.Subgrupo = Subgrupo;
    }

    async find(query, select) {
        const params = {
            where: query,
        };
        if(select){
            params.attributes = select.split(",");
        }
        return this.Subgrupo.findAll(params);
    }

    async findById(idSubgrupo) {
        console.log(idSubgrupo);
        return this.Subgrupo.findOne({ where: { idSubgrupo: parseInt(idSubgrupo) } });
    }

    async create(data) {
        console.log(this.Subgrupo);
        return this.Subgrupo.create(data);
    }

    async updateById(idSubgrupo, data) {
        console.log(idSubgrupo);
        return this.Subgrupo.update(data, { where: { idSubgrupo: idSubgrupo } });
    }

    async daleteById(idSubgrupo) {
        console.log(idSubgrupo);
        return this.Subgrupo.destroy({ where: { idSubgrupo: idSubgrupo } });
    }
}
module.exports = ServiceSubgrupo;