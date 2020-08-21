//Servidor
const express = require('express')
const server = express()

const {pageLanding, pageStudy, pageGiveClasses,saveClasses} = require('./pages')


//configurar nunjacks (tamplate engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express:server,
    noCache:true,
})

//inicio e configuracao do servidor
server
//receber os dados do req.body aula 5  2:15h
.use(express.urlencoded({ extended: true}))
//configurar arquivos estaticos(css. scripts, imagens)
.use(express.static("public"))
//rotas da aplicacao
.get("/", pageLanding) 
.get ("/study", pageStudy)
.get ("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
//stared do servidor
.listen(5500)

// console.log(__dirname)