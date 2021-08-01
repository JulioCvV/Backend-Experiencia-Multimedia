class ServiceGrupoEstudiante {
    constructor(GrupoEstudiante) {
        this.GrupoEstudiante = GrupoEstudiante;
    }

    async find(query, select) {
        const params = {
            where: query,
        };
        if(select){
            params.attributes = select.split(",");
        }
        return this.GrupoEstudiante.findAll(params);
    }

    async findById(idGrupoEstudiante) {
        console.log(idGrupoEstudiante);
        return this.GrupoEstudiante.findOne({ where: { idGrupoEstudiante: parseInt(idGrupoEstudiante) } });
    }

    async create(data) {
        console.log(this.GrupoEstudiante);
        return this.GrupoEstudiante.create(data);
    }

    async updateById(idGrupoEstudiante, data) {
        console.log(idGrupoEstudiante);
        return this.GrupoEstudiante.update(data, { where: { idGrupoEstudiante: idGrupoEstudiante } });
    }

    async daleteById(idGrupoEstudiante) {
        console.log(idGrupoEstudiante);
        return this.GrupoEstudiante.destroy({ where: { idGrupoEstudiante: idGrupoEstudiante } });
    }
}
module.exports = ServiceGrupoEstudiante;