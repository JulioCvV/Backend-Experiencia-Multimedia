class ControllerGrupoEstudiante{
    constructor(ServiceGrupoEstudiante){
        this.ServiceGrupoEstudiante = ServiceGrupoEstudiante
    }

     async find(req,res){
        const {query} = req;
        console.log(query);
        let select = "";
        if(query.select){
            select = query.select;
            delete query.select;
        }
        try{
            const results = await this.ServiceGrupoEstudiante.find(query,select);
            if(results) return res.json(results);
            return res.sendStatus(404);
        }catch (e){
            return res.sendStatus(500);
        }
    };

    async findById(req,res){
        const {idGrupoEstudiante} = req.params;
        try{
            console.log(idGrupoEstudiante);
            const grupo_estudiante = await this.ServiceGrupoEstudiante.findById(idGrupoEstudiante);
            console.log(grupo_estudiante);
            if(grupo_estudiante) return res.json(grupo_estudiante);
            return res.sendStatus(404);
        }catch (e){
            console.log(e);
            return res.sendStatus(500);
        }
    };

    async create(req,res){
        const {body} = req;
        try{
            const created = await this.ServiceGrupoEstudiante.create(body);
            console.log(created);
            if(created) return res.sendStatus(201);
            return res.sendStatus(500);
        }catch (e){
            const errosLog = e.errors.map((error)=>error.message);
            return res.status(500).json({errors: errosLog});
        }
    };

    async update(req,res){
        const {body, params} = req;
        const {idGrupoEstudiante} = params;
        try{
            const updated = await this.ServiceGrupoEstudiante.updateById(idGrupoEstudiante,body);
            console.log(updated);
            if(updated) return res.sendStatus(201);
            return res.sendStatus(404);
        }catch (e){
            const errosLog = e.errors.map((error)=>error.message);
            return res.status(500).json({errors: errosLog});
        }
    };

    async deleteById(req,res){
        const {idGrupoEstudiante} = req.params;
        try{
            const deleted = await this.ServiceGrupoEstudiante.deleteById(idGrupoEstudiante);
            console.log(deleted);
            if(deleted) return res.sendStatus(201);
            return res.sendStatus(404);
        }catch (e){
            const errosLog = e.errors.map((error)=>error.message);
            return res.status(500).json({errors: errosLog});
        }
    };
}
module.exports = ControllerGrupoEstudiante;