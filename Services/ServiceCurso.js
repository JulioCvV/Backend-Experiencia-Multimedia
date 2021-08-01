class ServiceCurso {
    constructor(Curso) {
        this.Curso = Curso;
    }

    async find(query, select) {
        const params = {
            where: query,
        };
        if(select){
            params.attributes = select.split(",");
        }
        return this.Curso.findAll(params);
    }

    async findById(idCurso) {
        console.log(idCurso);
        return this.Curso.findOne({ where: { idCurso: parseInt(idCurso) } });
    }

    async create(data) {
        console.log(this.Curso);
        return this.Curso.create(data);
    }

    async updateById(idCurso, data) {
        console.log(idCurso);
        return this.Curso.update(data, { where: { idCurso: idCurso } });
    }

    async daleteById(idCurso) {
        console.log(idCurso);
        return this.Curso.destroy({ where: { idCurso: idCurso } });
    }
}
module.exports = ServiceCurso;