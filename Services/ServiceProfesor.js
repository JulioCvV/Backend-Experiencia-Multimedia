const Curso = require("../Model/Curso");

class ServiceProfesor {
    constructor(Profesor) {
        this.Profesor = Profesor;
    }

    async find(query, select) {
        const params = {
            where: query,
            // include:[{model:Curso}]
        };
        if(select){
            params.attributes = select.split(",");
        }
        return this.Profesor.findAll(params);
    }

    async findById(idProfesor) {
        console.log(idProfesor);
        return this.Profesor.findOne({ where: { idProfesor: parseInt(idProfesor) } });
    }

    async create(data) {
        console.log(this.Profesor);
        return this.Profesor.create(data);
    }

    async updateById(idProfesor, data) {
        console.log(idProfesor);
        return this.Profesor.update(data, { where: { idProfesor: idProfesor } });
    }

    async daleteById(idProfesor) {
        console.log(idProfesor);
        return this.Profesor.destroy({ where: { idProfesor: idProfesor } });
    }
}
module.exports = ServiceProfesor;