class ControllerGraficoPractica{
    constructor(ServiceGraficoPractica){
        this.ServiceGraficoPractica = ServiceGraficoPractica
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
            const results = await this.ServiceGraficoPractica.find(query,select);
            if(results) return res.json(results);
            return res.sendStatus(404);
        }catch (e){
            return res.sendStatus(500);
        }
    };

    async findById(req,res){
        const {idGraficoPractica} = req.params;
        try{
            console.log(idGraficoPractica);
            const grafico_practica = await this.ServiceGraficoPractica.findById(idGraficoPractica);
            console.log(grafico_practica);
            if(grafico_practica) return res.json(grafico_practica);
            return res.sendStatus(404);
        }catch (e){
            console.log(e);
            return res.sendStatus(500);
        }
    };

    async create(req,res){
        const {body} = req;
        try{
            const created = await this.ServiceGraficoPractica.create(body);
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
        const {idGraficoPractica} = params;
        try{
            const updated = await this.ServiceGraficoPractica.updateById(idGraficoPractica,body);
            console.log(updated);
            if(updated) return res.sendStatus(201);
            return res.sendStatus(404);
        }catch (e){
            const errosLog = e.errors.map((error)=>error.message);
            return res.status(500).json({errors: errosLog});
        }
    };

    async deleteById(req,res){
        const {idGraficoPractica} = req.params;
        try{
            const deleted = await this.ServiceGraficoPractica.deleteById(idGraficoPractica);
            console.log(deleted);
            if(deleted) return res.sendStatus(201);
            return res.sendStatus(404);
        }catch (e){
            const errosLog = e.errors.map((error)=>error.message);
            return res.status(500).json({errors: errosLog});
        }
    };
}
module.exports = ControllerGraficoPractica;