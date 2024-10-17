import  Express,{Request, Response}  from "express";
import { Server } from 'http'
import mustache from 'mustache-express'
import path from 'path'
import mainRoutes from './routes/index'


const server = Express()



server.use(mainRoutes)

server.set('views', path.join(__dirname,'views'))
server.engine('mustache',mustache())

//mustache

server.set('view engine', 'mustache')
server.use(Express.static(path.join(__dirname, '../public')))


server.listen(5000)