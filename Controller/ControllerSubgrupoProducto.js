class ControllerSubgrupoProducto{
    constructor(ServiceSubgrupoProducto){
        this.ServiceSubgrupoProducto = ServiceSubgrupoProducto
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
            const results = await this.ServiceSubgrupoProducto.find(query,select);
            if(results) return res.json(results);
            return res.sendStatus(404);
        }catch (e){
            return res.sendStatus(500);
        }
    };

    async findById(req,res){
        const {idSubgrupoProducto} = req.params;
        try{
            console.log(idSubgrupoProducto);
            const subgrupo_producto = await this.ServiceSubgrupoProducto.findById(idSubgrupoProducto);
            console.log(subgrupo_producto);
            if(subgrupo_producto) return res.json(subgrupo_producto);
            return res.sendStatus(404);
        }catch (e){
            console.log(e);
            return res.sendStatus(500);
        }
    };

    async create(req,res){
        const {body} = req;
        try{
            const created = await this.ServiceSubgrupoProducto.create(body);
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
        const {idSubgrupoProducto} = params;
        try{
            const updated = await this.ServiceSubgrupoProducto.updateById(idSubgrupoProducto,body);
            console.log(updated);
            if(updated) return res.sendStatus(201);
            return res.sendStatus(404);
        }catch (e){
            const errosLog = e.errors.map((error)=>error.message);
            return res.status(500).json({errors: errosLog});
        }
    };

    async deleteById(req,res){
        const {idSubgrupoProducto} = req.params;
        try{
            const deleted = await this.ServiceSubgrupoProducto.deleteById(idSubgrupoProducto);
            console.log(deleted);
            if(deleted) return res.sendStatus(201);
            return res.sendStatus(404);
        }catch (e){
            const errosLog = e.errors.map((error)=>error.message);
            return res.status(500).json({errors: errosLog});
        }
    };
}
module.exports = ControllerSubgrupoProducto;