const api = require('express').Router();

module.exports = () => {
    
    api.get('/teste', (req, res) => {
        res.send({'texto':'Marcio Otario'});
        console.log('fui chamado');
        
    })

    return api;
}