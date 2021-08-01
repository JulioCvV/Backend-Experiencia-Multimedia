class ControllerSubgrupo{
    constructor(ServiceSubgrupo){
        this.ServiceSubgrupo = ServiceSubgrupo
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
            const results = await this.ServiceSubgrupo.find(query,select);
            if(results) return res.json(results);
            return res.sendStatus(404);
        }catch (e){
            return res.sendStatus(500);
        }
    };

    async findById(req,res){
        const {idSubgrupo} = req.params;
        try{
            console.log(idSubgrupo);
            const subgrupo = await this.ServiceSubgrupo.findById(idSubgrupo);
            console.log(subgrupo);
            if(subgrupo) return res.json(subgrupo);
            return res.sendStatus(404);
        }catch (e){
            console.log(e);
            return res.sendStatus(500);
        }
    };

    async create(req,res){
        const {body} = req;
        try{
            const created = await this.ServiceSubgrupo.create(body);
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
        const {idSubgrupo} = params;
        try{
            const updated = await this.ServiceSubgrupo.updateById(idSubgrupo,body);
            console.log(updated);
            if(updated) return res.sendStatus(201);
            return res.sendStatus(404);
        }catch (e){
            const errosLog = e.errors.map((error)=>error.message);
            return res.status(500).json({errors: errosLog});
        }
    };

    async deleteById(req,res){
        const {idSubgrupo} = req.params;
        try{
            const deleted = await this.ServiceSubgrupo.deleteById(idSubgrupo);
            console.log(deleted);
            if(deleted) return res.sendStatus(201);
            return res.sendStatus(404);
        }catch (e){
            const errosLog = e.errors.map((error)=>error.message);
            return res.status(500).json({errors: errosLog});
        }
    };
}
module.exports = ControllerSubgrupo;