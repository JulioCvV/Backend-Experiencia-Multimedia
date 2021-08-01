class ControllerProductoCorte2{
    constructor(ServiceProductoCorte2){
        this.ServiceProductoCorte2 = ServiceProductoCorte2
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
            const results = await this.ServiceProductoCorte2.find(query,select);
            if(results) return res.json(results);
            return res.sendStatus(404);
        }catch (e){
            return res.sendStatus(500);
        }
    };

    async findById(req,res){
        const {idProductoC2} = req.params;
        try{
            console.log(idProductoC2);
            const producto_corte_2 = await this.ServiceProductoCorte2.findById(idProductoC2);
            console.log(producto_corte_2);
            if(producto_corte_2) return res.json(producto_corte_2);
            return res.sendStatus(404);
        }catch (e){
            console.log(e);
            return res.sendStatus(500);
        }
    };

    async create(req,res){
        const {body} = req;
        try{
            const created = await this.ServiceProductoCorte2.create(body);
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
        const {idProductoC2} = params;
        try{
            const updated = await this.ServiceProductoCorte2.updateById(idProductoC2,body);
            console.log(updated);
            if(updated) return res.sendStatus(201);
            return res.sendStatus(404);
        }catch (e){
            const errosLog = e.errors.map((error)=>error.message);
            return res.status(500).json({errors: errosLog});
        }
    };

    async deleteById(req,res){
        const {idProductoC2} = req.params;
        try{
            const deleted = await this.ServiceProductoCorte2.deleteById(idProductoC2);
            console.log(deleted);
            if(deleted) return res.sendStatus(201);
            return res.sendStatus(404);
        }catch (e){
            const errosLog = e.errors.map((error)=>error.message);
            return res.status(500).json({errors: errosLog});
        }
    };
}
module.exports = ControllerProductoCorte2;