// const http =  require("http")

// const server = http.createServer((req,res)=>{
//     // res.setHeader('Content-Type','text/html')
//     // res.write("<h1>Hola node.js http</h1>")
// // user = {
// //     use:"Josue",
// //     email:"josue.salazar@epn.edu.ec"
// // }
// res.end()
// })
// server.listen(3000)
// console.log("Servidor OK");
// const{engine} = require("Express-handlebars")
const  express = require("express")
const app = express()
app.use(express.json())
app.use((req,res,next)=>{
    console.log(`ruta invocada: ${req.path} - método: ${req.method}`);
    next()//En midllewares siempre poner el next para que no se quede cargando
})

app.get('/profile',(req,res)=>{
    res.send("Bienvenido al perfil del usuario")
})

app.listen(3000)
console.log('Servidor ejecutandose en el puerto 3000');
// app.get("/producto/:id",(req,res)=>{
//     if(req.params.id === 1){
//         res.send("Producto 1")
//     }else if(req.params.id===2){
//         res.send("Producto 2")
//     }
//     res.end()
// })
// app.get('/search',(req,res)=>{
//     console.log(req.query)
//     if(req.query.data === "js")
//     {
//         res.send("Libros de JS")
//     }
//     else{
//         res.send("Libros de dom")
//     }


// app.get('/user/:profile/photo',(req,res)=>{
// if(req.paramas.profile === "josue"){
//     res.sendFile("./descarga.jpg"),{root: __dirname}
// }else{
//     res.send("No es valido")
// }
// })


//app.get('/operacion/:num1/:num2',(req,res)=>{
//     const{num1,num2} =req.params
//     res.send(`La suma es ${Number(num1)+Number(num2)}`)
// })


//app.post('/productos',(req,res)=>{
//     // console.log(body)
//     const {nombre,edad} = req.body
//     res.send(`Los datos enviados son: ${nombre} ${edad}`)
// })
// app.engine('.hbs',engine({
//     extname: '.hbs'
// }))
// app.set('view engine',".hbs")
// app.set('views','./src/views')

// app.get('/', (req, res) => {
//     res.render('home');
// });
// const patch=require('patch')
// app.set('src',patch.join(__dirname,'src'))

// app.get("/home",(req,res)=>{
//     res.render("home")
// })
// app.get("/login",(req,res)=>{
//     res.render("login")
// })





// app.get("/isAlive",(req,res)=>{
//     res.sendStatus(200).send("Servido OK")
// }) 


// app.get('/',(req,res)=>{
//     res.sendFile ('./descarga.jpg',{
//         root:__dirname
//     })
// })
// console.log(__dirname);
// app.post('/',(req,res)=>{
//     res.send("enviar datos al servidor")
// })
// app.put('/',(req,res)=>{
//     res.send("actualizar toda la infromación")
// })
// app.patch('/',(req,res)=>{
//     res.send("actualizar solo una porción de la infromación")
// })
// app.delete('/',(req,res)=>{
//     res.send("Eliminar algún recurso del servidor")
// })
// // Manejo de una ruta que no sea encontrada
// app.use((req,res)=>{
//     res.status(404).send("Página no encontrada - 404")
// })
