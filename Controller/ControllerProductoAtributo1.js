class ControllerProductoAtributo1{
    constructor(ServiceProductoAtributo1){
        this.ServiceProductoAtributo1 = ServiceProductoAtributo1
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
            const results = await this.ServiceProductoAtributo1.find(query,select);
            if(results) return res.json(results);
            return res.sendStatus(404);
        }catch (e){
            return res.sendStatus(500);
        }
    };

    async findById(req,res){
        const {idProductoAtributo1} = req.params;
        try{
            console.log(idProductoAtributo1);
            const producto_atributo_1 = await this.ServiceProductoAtributo1.findById(idProductoAtributo1);
            console.log(producto_atributo_1);
            if(producto_atributo_1) return res.json(producto_atributo_1);
            return res.sendStatus(404);
        }catch (e){
            console.log(e);
            return res.sendStatus(500);
        }
    };

    async create(req,res){
        const {body} = req;
        try{
            const created = await this.ServiceProductoAtributo1.create(body);
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
        const {idProductoAtributo1} = params;
        try{
            const updated = await this.ServiceProductoAtributo1.updateById(idProductoAtributo1,body);
            console.log(updated);
            if(updated) return res.sendStatus(201);
            return res.sendStatus(404);
        }catch (e){
            const errosLog = e.errors.map((error)=>error.message);
            return res.status(500).json({errors: errosLog});
        }
    };

    async deleteById(req,res){
        const {idProductoAtributo1} = req.params;
        try{
            const deleted = await this.ServiceProductoAtributo1.deleteById(idProductoAtributo1);
            console.log(deleted);
            if(deleted) return res.sendStatus(201);
            return res.sendStatus(404);
        }catch (e){
            const errosLog = e.errors.map((error)=>error.message);
            return res.status(500).json({errors: errosLog});
        }
    };
}
module.exports = ControllerProductoAtributo1;