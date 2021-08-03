const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('experiencia_multimedia', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
});

(async()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

const Profesor = require('./Model/Profesor')
const ProfesorInstance = Profesor(sequelize);
const Curso = require('./Model/Curso')
const CursoInstance = Curso(sequelize);
const Corte = require('./Model/Corte')
const CorteInstance = Corte(sequelize);
const Practica = require('./Model/Practica')
const PracticaInstance = Practica(sequelize);
const Grupo = require('./Model/Grupo')
const GrupoInstance = Grupo(sequelize);
const Estudiante = require('./Model/Estudiante')
const EstudianteInstance = Estudiante(sequelize);
const GrupoEstudiante = require('./Model/GrupoEstudiante')
const GrupoEstudianteInstance = GrupoEstudiante(sequelize);
const ProductoCorte1 = require('./Model/ProductoCorte1')
const ProductoCorte1Instance = ProductoCorte1(sequelize);
const ProductoCorte2 = require('./Model/ProductoCorte2')
const ProductoCorte2Instance = ProductoCorte2(sequelize);
const ProductoCorte3 = require('./Model/ProductoCorte3')
const ProductoCorte3Instance = ProductoCorte3(sequelize);
const Atributo = require('./Model/Atributo')
const AtributoInstance = Atributo(sequelize);
const ProductoAtributo1 = require('./Model/ProductoAtributo1')
const ProductoAtributo1Instance = ProductoAtributo1(sequelize);
const ProductoAtributo2 = require('./Model/ProductoAtributo2')
const ProductoAtributo2Instance = ProductoAtributo2(sequelize);
const ProductoAtributo3 = require('./Model/ProductoAtributo3')
const ProductoAtributo3Instance = ProductoAtributo3(sequelize);
const Grafico = require('./Model/Grafico')
const GraficoInstance = Grafico(sequelize);
const GraficoPractica = require('./Model/GraficoPractica')
const GraficoPracticaInstance = GraficoPractica(sequelize);
const Subgrupo = require('./Model/Subgrupo')
const SubgrupoInstance = Subgrupo(sequelize);
const SubgrupoProducto = require('./Model/SubgrupoProducto')
const SubgrupoProductoInstance = SubgrupoProducto(sequelize);
const Metodo = require('./Model/Metodo')
const MetodoInstance = Metodo(sequelize);
const MetodoProducto = require('./Model/MetodoProducto')
const MetodoProductoInstance = MetodoProducto(sequelize);
sequelize.sync();

// Profesor
const ControllerProfesor = require('./Controller/ControllerProfesor');
const ServiceProfesor = require('./Services/ServiceProfesor');
const ServiceProfesorInstance = new ServiceProfesor(ProfesorInstance);
const ControllerProfesorInstance = new ControllerProfesor(ServiceProfesorInstance);

// Curso
const ControllerCurso = require('./Controller/ControllerCurso');
const ServiceCurso = require('./Services/ServiceCurso');
const ServiceCursoInstance = new ServiceCurso(CursoInstance);
const ControllerCursoInstance = new ControllerCurso(ServiceCursoInstance);

// Corte
const ControllerCorte = require('./Controller/ControllerCorte');
const ServiceCorte = require('./Services/ServiceCorte');
const ServiceCorteInstance = new ServiceCorte(CorteInstance);
const ControllerCorteInstance = new ControllerCorte(ServiceCorteInstance);

// Practica
const ControllerPractica = require('./Controller/ControllerPractica');
const ServicePractica = require('./Services/ServiceCorte');
const ServicePracticaInstance = new ServicePractica(PracticaInstance);
const ControllerPracticaInstance = new ControllerPractica(ServicePracticaInstance);

// Grupo
const ControllerGrupo = require('./Controller/ControllerGrupo');
const ServiceGrupo = require('./Services/ServiceGrupo');
const ServiceGrupoInstance = new ServiceGrupo(GrupoInstance);
const ControllerGrupoInstance = new ControllerGrupo(ServiceGrupoInstance);

// Estudiante
const ControllerEstudiante = require('./Controller/ControllerEstudiante');
const ServiceEstudiante = require('./Services/ServiceEstudiante');
const ServiceEstudianteInstance = new ServiceEstudiante(EstudianteInstance);
const ControllerEstudianteInstance = new ControllerEstudiante(ServiceEstudianteInstance);

// Grupo_Estudiante
const ControllerGrupoEstudiante = require('./Controller/ControllerGrupoEstudiante');
const ServiceGrupoEstudiante = require('./Services/ServiceGrupoEstudiante');
const ServiceGrupoEstudianteInstance = new ServiceGrupoEstudiante(GrupoEstudianteInstance);
const ControllerGrupoEstudianteInstance = new ControllerGrupoEstudiante(ServiceGrupoEstudianteInstance);

// Producto Corte 1
const ControllerProductoCorte1 = require('./Controller/ControllerProductoCorte1');
const ServiceProductoCorte1 = require('./Services/ServiceProductoCorte1');
const ServiceProductoCorte1Instance = new ServiceProductoCorte1(ProductoCorte1Instance);
const ControllerProductoCorte1Instance = new ControllerProductoCorte1(ServiceProductoCorte1Instance);

// Producto Corte 2
const ControllerProductoCorte2 = require('./Controller/ControllerProductoCorte2');
const ServiceProductoCorte2 = require('./Services/ServiceProductoCorte2');
const ServiceProductoCorte2Instance = new ServiceProductoCorte2(ProductoCorte2Instance);
const ControllerProductoCorte2Instance = new ControllerProductoCorte2(ServiceProductoCorte2Instance);

// Producto Corte 3
const ControllerProductoCorte3 = require('./Controller/ControllerProductoCorte3');
const ServiceProductoCorte3 = require('./Services/ServiceProductoCorte3');
const ServiceProductoCorte3Instance = new ServiceProductoCorte3(ProductoCorte3Instance);
const ControllerProductoCorte3Instance = new ControllerProductoCorte3(ServiceProductoCorte3Instance);

//Atributo
const ControllerAtributo = require('./Controller/ControllerAtributo');
const ServiceAtributo = require('./Services/ServiceAtributo');
const ServiceAtributoInstance = new ServiceAtributo(AtributoInstance);
const ControllerAtributoInstance = new ControllerAtributo(ServiceAtributoInstance);

// Producto Atributo 1
const ControllerProductoAtributo1 = require('./Controller/ControllerProductoAtributo1');
const ServiceProductoAtributo1 = require('./Services/ServiceProductoAtributo1');
const ServiceProductoAtributo1Instance = new ServiceProductoAtributo1(ProductoAtributo1Instance);
const ControllerProductoAtributo1Instance = new ControllerProductoAtributo1(ServiceProductoAtributo1Instance);

// Producto Atributo 2
const ControllerProductoAtributo2 = require('./Controller/ControllerProductoAtributo2');
const ServiceProductoAtributo2 = require('./Services/ServiceProductoAtributo2');
const ServiceProductoAtributo2Instance = new ServiceProductoAtributo2(ProductoAtributo2Instance);
const ControllerProductoAtributo2Instance = new ControllerProductoAtributo2(ServiceProductoAtributo2Instance);

// Producto Atributo 3
const ControllerProductoAtributo3 = require('./Controller/ControllerProductoAtributo3');
const ServiceProductoAtributo3 = require('./Services/ServiceProductoAtributo3');
const ServiceProductoAtributo3Instance = new ServiceProductoAtributo3(ProductoAtributo3Instance);
const ControllerProductoAtributo3Instance = new ControllerProductoAtributo3(ServiceProductoAtributo3Instance);

// Grafico
const ControllerGrafico = require('./Controller/ControllerGrafico');
const ServiceGrafico = require('./Services/ServiceGrafico');
const ServiceGraficoInstance = new ServiceGrafico(GraficoInstance);
const ControllerGraficoInstance = new ControllerGrafico(ServiceGraficoInstance);

// Grafico Practica
const ControllerGraficoPractica = require('./Controller/ControllerGraficoPractica');
const ServiceGraficoPractica = require('./Services/ServiceGraficoPractica');
const ServiceGraficoPracticaInstance = new ServiceGraficoPractica(GraficoPracticaInstance);
const ControllerGraficoPracticaInstance = new ControllerGraficoPractica(ServiceGraficoPracticaInstance);

// Subgrupo
const ControllerSubgrupo = require('./Controller/ControllerSubgrupo');
const ServiceSubgrupo = require('./Services/ServiceSubgrupo');
const ServiceSubgrupoInstance = new ServiceSubgrupo(SubgrupoInstance);
const ControllerSubgrupoInstance = new ControllerSubgrupo(ServiceSubgrupoInstance);

// Subgrupo Producto
const ControllerSubgrupoProducto = require('./Controller/ControllerSubgrupoProducto');
const ServiceSubgrupoProducto = require('./Services/ServiceSubgrupoProducto');
const ServiceSubgrupoProductoInstance = new ServiceSubgrupoProducto(SubgrupoProductoInstance);
const ControllerSubgrupoProductoInstance = new ControllerSubgrupoProducto(ServiceSubgrupoProductoInstance);

// Metodo
const ControllerMetodo = require('./Controller/ControllerMetodo');
const ServiceMetodo = require('./Services/ServiceMetodo');
const ServiceMetodoInstance = new ServiceMetodo(MetodoInstance);
const ControllerMetodoInstance = new ControllerMetodo(ServiceMetodoInstance);

// Metodo Producto
const ControllerMetodoProducto = require('./Controller/ControllerMetodoProducto');
const ServiceMetodoProducto = require('./Services/ServiceMetodoProducto');
const ServiceMetodoProductoInstance = new ServiceMetodoProducto(MetodoProductoInstance);
const ControllerMetodoProductoInstance = new ControllerMetodoProducto(ServiceMetodoProductoInstance);

const routes = (app) =>{
    // Routes Profesor
    app.get("/profesores", (req, res) =>{
        ControllerProfesorInstance.find(req,res);
    });

    app.get("/profesor/:idProfesor", (req, res) =>{
        ControllerProfesorInstance.findById(req,res);
    });

    app.post("/profesor", (req, res) =>{
        ControllerProfesorInstance.create(req,res);
    });

    app.put("/profesor/:idProfesor", (req, res) =>{
        ControllerProfesorInstance.update(req,res);
    });

    app.delete("/profesor/:idProfesor", (req, res) =>{
        ControllerProfesorInstance.deletById(req,res);
    });

    // Routes Curso
    app.get("/cursos", (req, res) =>{
        ControllerCursoInstance.find(req,res);
    });

    app.get("/curso/:idCurso", (req, res) =>{
        ControllerCursoInstance.findById(req,res);
    });

    app.post("/curso", (req, res) =>{
        ControllerCursoInstance.create(req,res);
    });

    app.put("/curso/:idCurso", (req, res) =>{
        ControllerCursoInstance.update(req,res);
    });

    app.delete("/curso/:idCurso", (req, res) =>{
        ControllerCursoInstance.deletById(req,res);
    });

    // Routes Corte
    app.get("/cortes", (req, res) =>{
        ControllerCorteInstance.find(req,res);
    });

    app.get("/corte/:idCorte", (req, res) =>{
        ControllerCorteInstance.findById(req,res);
    });

    app.post("/corte", (req, res) =>{
        ControllerCorteInstance.create(req,res);
    });

    app.put("/corte/:idCorte", (req, res) =>{
        ControllerCorteInstance.update(req,res);
    });

    app.delete("/corte/:idCorte", (req, res) =>{
        ControllerCorteInstance.deletById(req,res);
    });

    // Routes Practica
    app.get("/practicas", (req, res) =>{
        ControllerPracticaInstance.find(req,res);
    });

    app.get("/practica/:idPractica", (req, res) =>{
        ControllerPracticaInstance.findById(req,res);
    });

    app.post("/practica", (req, res) =>{
        ControllerPracticaInstance.create(req,res);
    });

    app.put("/practica/:idPractica", (req, res) =>{
        ControllerPracticaInstance.update(req,res);
    });

    app.delete("/practica/:idPractica", (req, res) =>{
        ControllerPracticaInstance.deletById(req,res);
    });

    // Routes Grupo
    app.get("/grupos", (req, res) =>{
        ControllerGrupoInstance.find(req,res);
    });

    app.get("/grupo/:idGrupo", (req, res) =>{
        ControllerGrupoInstance.findById(req,res);
    });

    app.post("/grupo", (req, res) =>{
        ControllerGrupoInstance.create(req,res);
    });

    app.put("/grupo/:idGrupo", (req, res) =>{
        ControllerGrupoInstance.update(req,res);
    });

    app.delete("/grupo/:idGrupo", (req, res) =>{
        ControllerGrupoInstance.deletById(req,res);
    });

    // Routes Estudiante
    app.get("/estudiantes", (req, res) =>{
        ControllerEstudianteInstance.find(req,res);
    });

    app.get("/estudiante/:idEstudiante", (req, res) =>{
        ControllerEstudianteInstance.findById(req,res);
    });

    app.post("/estudiante", (req, res) =>{
        ControllerEstudianteInstance.create(req,res);
    });

    app.put("/estudiante/:idEstudiante", (req, res) =>{
        ControllerEstudianteInstance.update(req,res);
    });

    app.delete("/estudiante/:idEstudiante", (req, res) =>{
        ControllerEstudianteInstance.deletById(req,res);
    });

    // Routes Grupo_Estudiante
    app.get("/grupos_estudiante", (req, res) =>{
        ControllerGrupoEstudianteInstance.find(req,res);
    });

    app.get("/grupo_estudiante/:idGrupoEstudiante", (req, res) =>{
        ControllerGrupoEstudianteInstance.findById(req,res);
    });

    app.post("/grupo_estudiante", (req, res) =>{
        ControllerGrupoEstudianteInstance.create(req,res);
    });

    app.put("/grupo_estudiante/:idGrupoEstudiante", (req, res) =>{
        ControllerGrupoEstudianteInstance.update(req,res);
    });

    app.delete("/grupo_estudiante/:idGrupoEstudiante", (req, res) =>{
        ControllerGrupoEstudianteInstance.deletById(req,res);
    });

    // Routes Producto_Corte_1
    app.get("/productosc1", (req, res) =>{
        ControllerProductoCorte1Instance.find(req,res);
    });

    app.get("/productoc1/:idProductoC1", (req, res) =>{
        ControllerProductoCorte1Instance.findById(req,res);
    });

    app.post("/productoc1", (req, res) =>{
        ControllerProductoCorte1Instance.create(req,res);
    });

    app.put("/productoc1/:idProductoC1", (req, res) =>{
        ControllerProductoCorte1Instance.update(req,res);
    });

    app.delete("/productoc1/:idProductoC1", (req, res) =>{
        ControllerProductoCorte1Instance.deletById(req,res);
    });

    // Routes Producto_Corte_2
    app.get("/productosc2", (req, res) =>{
        ControllerProductoCorte2Instance.find(req,res);
    });

    app.get("/productoc2/:idProductoC2", (req, res) =>{
        ControllerProductoCorte2Instance.findById(req,res);
    });

    app.post("/productoc2", (req, res) =>{
        ControllerProductoCorte1Instance.create(req,res);
    });

    app.put("/productoc2/:idProductoC2", (req, res) =>{
        ControllerProductoCorte2Instance.update(req,res);
    });

    app.delete("/productoc2/:idProductoC2", (req, res) =>{
        ControllerProductoCorte2Instance.deletById(req,res);
    });

    // Routes Producto_Corte_3
    app.get("/productosc3", (req, res) =>{
        ControllerProductoCorte3Instance.find(req,res);
    });

    app.get("/productoc3/:idProductoC3", (req, res) =>{
        ControllerProductoCorte3Instance.findById(req,res);
    });

    app.post("/productoc3", (req, res) =>{
        ControllerProductoCorte3Instance.create(req,res);
    });

    app.put("/productoc3/:idProductoC3", (req, res) =>{
        ControllerProductoCorte3Instance.update(req,res);
    });

    app.delete("/productoc3/:idProductoC3", (req, res) =>{
        ControllerProductoCorte3Instance.deletById(req,res);
    });

    // Routes Atributo
    app.get("/atributos", (req, res) =>{
        ControllerAtributoInstance.find(req,res);
    });

    app.get("/atributo/:idAtributo", (req, res) =>{
        ControllerAtributoInstance.findById(req,res);
    });

    app.post("/atributo", (req, res) =>{
        ControllerAtributoInstance.create(req,res);
    });

    app.put("/atributo/:idAtributo", (req, res) =>{
        ControllerAtributoInstance.update(req,res);
    });

    app.delete("/atributo/:idAtributo", (req, res) =>{
        ControllerAtributoInstance.deletById(req,res);
    });

    // Routes Producto_Atributo_1
    app.get("/atributos_producto_1", (req, res) =>{
        ControllerProductoAtributo1Instance.find(req,res);
    });

    app.get("/atributo_producto_1/:idProductoAtributo1", (req, res) =>{
        ControllerProductoAtributo1Instance.findById(req,res);
    });

    app.post("/atributo_producto_1", (req, res) =>{
        ControllerProductoAtributo1Instance.create(req,res);
    });

    app.put("/atributo_producto_1/:idProductoAtributo1", (req, res) =>{
        ControllerProductoAtributo1Instance.update(req,res);
    });

    app.delete("/atributo_producto_1/:idProductoAtributo1", (req, res) =>{
        ControllerProductoAtributo1Instance.deletById(req,res);
    });

    // Routes Producto_Atributo_2
    app.get("/atributos_producto_2", (req, res) =>{
        ControllerProductoAtributo2Instance.find(req,res);
    });

    app.get("/atributo_producto_2/:idProductoAtributo2", (req, res) =>{
        ControllerProductoAtributo2Instance.findById(req,res);
    });

    app.post("/atributo_producto_2", (req, res) =>{
        ControllerProductoAtributo2Instance.create(req,res);
    });

    app.put("/atributo_producto_2/:idProductoAtributo2", (req, res) =>{
        ControllerProductoAtributo2Instance.update(req,res);
    });

    app.delete("/atributo_producto_2/:idProductoAtributo2", (req, res) =>{
        ControllerProductoAtributo2Instance.deletById(req,res);
    });

    // Routes Producto_Atributo_3
    app.get("/atributos_producto_3", (req, res) =>{
        ControllerProductoAtributo2Instance.find(req,res);
    });

    app.get("/atributo_producto_3/:idProductoAtributo3", (req, res) =>{
        ControllerProductoAtributo2Instance.findById(req,res);
    });

    app.post("/atributo_producto_3", (req, res) =>{
        ControllerProductoAtributo3Instance.create(req,res);
    });

    app.put("/atributo_producto_3/:idProductoAtributo3", (req, res) =>{
        ControllerProductoAtributo3Instance.update(req,res);
    });

    app.delete("/atributo_producto_3/:idProductoAtributo3", (req, res) =>{
        ControllerProductoAtributo3Instance.deletById(req,res);
    });

    // Routes Grafico
    app.get("/graficos", (req, res) =>{
        ControllerGraficoInstance.find(req,res);
    });

    app.get("/grafico/:idGrafico", (req, res) =>{
        ControllerGraficoInstance.findById(req,res);
    });

    app.post("/grafico", (req, res) =>{
        ControllerGraficoInstance.create(req,res);
    });

    app.put("/grafico/:idGrafico", (req, res) =>{
        ControllerGraficoInstance.update(req,res);
    });

    app.delete("/grafico/:idGrafico", (req, res) =>{
        ControllerGraficoInstance.deletById(req,res);
    });

    // Routes Grafico
    app.get("/graficos_practica", (req, res) =>{
        ControllerGraficoPracticaInstance.find(req,res);
    });

    app.get("/grafico_practica/:idGraficoPractica", (req, res) =>{
        ControllerGraficoPracticaInstance.findById(req,res);
    });

    app.post("/grafico_practica", (req, res) =>{
        ControllerGraficoPracticaInstance.create(req,res);
    });

    app.put("/grafico_practica/:idGraficoPractica", (req, res) =>{
        ControllerGraficoPracticaInstance.update(req,res);
    });

    app.delete("/grafico_practica/:idGraficoPractica", (req, res) =>{
        ControllerGraficoPracticaInstance.deletById(req,res);
    });

    // Routes Subgrupo
    app.get("/subgrupos", (req, res) =>{
        ControllerSubgrupoInstance.find(req,res);
    });

    app.get("/subgrupo/:idSubgrupo", (req, res) =>{
        ControllerSubgrupoInstance.findById(req,res);
    });

    app.post("/subgrupo", (req, res) =>{
        ControllerSubgrupoInstance.create(req,res);
    });

    app.put("/subgrupo/:idSubgrupo", (req, res) =>{
        ControllerSubgrupoInstance.update(req,res);
    });

    app.delete("/subgrupo/:idSubgrupo", (req, res) =>{
        ControllerSubgrupoInstance.deletById(req,res);
    });

     // Routes Subgrupo_Producto
    app.get("/subgrupos_producto", (req, res) =>{
        ControllerSubgrupoProductoInstance.find(req,res);
    });

    app.get("/subgrupo_producto/:idSubgrupoProducto", (req, res) =>{
        ControllerSubgrupoProductoInstance.findById(req,res);
    });

    app.post("/subgrupo_producto", (req, res) =>{
        ControllerSubgrupoProductoInstance.create(req,res);
    });

    app.put("/subgrupo_producto/:idSubgrupoProducto", (req, res) =>{
        ControllerSubgrupoProductoInstance.update(req,res);
    });

    app.delete("/subgrupo_producto/:idSubgrupoProducto", (req, res) =>{
        ControllerSubgrupoProductoInstance.deletById(req,res);
    });

    // Routes Metodo
    app.get("/metodos", (req, res) =>{
        ControllerMetodoInstance.find(req,res);
    });

    app.get("/metodo/:idMetodo", (req, res) =>{
        ControllerMetodoInstance.findById(req,res);
    });

    app.post("/metodo", (req, res) =>{
        ControllerMetodoInstance.create(req,res);
    });

    app.put("/metodo/:idMetodo", (req, res) =>{
        ControllerMetodoInstance.update(req,res);
    });

    app.delete("/metodo/:idMetodo", (req, res) =>{
        ControllerMetodoInstance.deletById(req,res);
    });

    // Routes Metodo_Producto
    app.get("/metodos_producto", (req, res) =>{
        ControllerMetodoProductoInstance.find(req,res);
    });

    app.get("/metodo_producto/:idMetodoProducto", (req, res) =>{
        ControllerMetodoProductoInstance.findById(req,res);
    });

    app.post("/metodo_producto", (req, res) =>{
        ControllerMetodoProductoInstance.create(req,res);
    });

    app.put("/metodo_producto/:idMetodoProducto", (req, res) =>{
        ControllerMetodoProductoInstance.update(req,res);
    });

    app.delete("/metodo_producto/:idMetodoProducto", (req, res) =>{
        ControllerMetodoProductoInstance.deletById(req,res);
    });
};

module.exports = routes;