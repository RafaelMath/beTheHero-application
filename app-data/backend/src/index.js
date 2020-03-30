const express = require('express');
const cors = require('cors');
const {errors} = require('celebrate'); 
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json()); 
routes.use(express.json());
app.use(routes);
app.use(errors());

app.listen(3333);



/**
 *  Roras / Recurso
 * 
 *  Metodos HTTP
 * 
 * GET: buscar uma informação no backend
 * POST: criar uma informação no backend
 * PUT: alterar uma informação no backend
 * DELETE: deletar uma informação no backend
 * 
 * Tiop de parametros:
 * 
 * Query Params: parametros nomeados enviados na rota após "?" (Filtros, paginação)
 *  
 * Route Params: parametros utilizados para identificar recursos
 * Request body: Corpo da requisição, utilizado para criar ou alterar recursos 
 * 
 * 
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc..
 * 
 * Driver: SELECT * FROM users
 * Query Builder: table('user').select('*').where()
 *    
 */
