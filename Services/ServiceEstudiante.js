class ServiceEstudiante {
    constructor(Estudiante) {
        this.Estudiante = Estudiante;
    }

    async find(query, select) {
        const params = {
            where: query,
        };
        if(select){
            params.attributes = select.split(",");
        }
        return this.Estudiante.findAll(params);
    }

    async findById(idEstudiante) {
        console.log(idEstudiante);
        return this.Estudiante.findOne({ where: { idEstudiante: parseInt(idEstudiante) } });
    }

    async create(data) {
        console.log(this.Estudiante);
        return this.Estudiante.create(data);
    }

    async updateById(idEstudiante, data) {
        console.log(idEstudiante);
        return this.Estudiante.update(data, { where: { idEstudiante: idEstudiante } });
    }

    async daleteById(idEstudiante) {
        console.log(idEstudiante);
        return this.Estudiante.destroy({ where: { idEstudiante: idEstudiante } });
    }
}
module.exports = ServiceEstudiante;