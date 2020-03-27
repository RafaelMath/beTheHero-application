const express = require('express');

const routes = express.Router();

routes.get('/users', (request, response) => {
   
    
    //const params = request.query; //os params que vem na url
    const body = request.body; //os params que vem no corpo formato JSON

    //console.log(params);
    console.log(" - ");
    console.log(body);
    
    
    return response.json({
        evento: "Semana OmniStack 11.0",
        name: "Rafael Gildo"
    }); 
});

module.exports = routes;