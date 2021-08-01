class ServiceGrupo {
    constructor(Grupo) {
        this.Grupo = Grupo;
    }

    async find(query, select) {
        const params = {
            where: query,
        };
        if(select){
            params.attributes = select.split(",");
        }
        return this.Grupo.findAll(params);
    }

    async findById(idGrupo) {
        console.log(idGrupo);
        return this.Grupo.findOne({ where: { idGrupo: parseInt(idGrupo) } });
    }

    async create(data) {
        console.log(this.Grupo);
        return this.Grupo.create(data);
    }

    async updateById(idGrupo, data) {
        console.log(idGrupo);
        return this.Grupo.update(data, { where: { idGrupo: idGrupo } });
    }

    async daleteById(idGrupo) {
        console.log(idGrupo);
        return this.Grupo.destroy({ where: { idGrupo: idGrupo } });
    }
}
module.exports = ServiceGrupo;