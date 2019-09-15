const api = require('express').Router();

module.exports = () => {
    
    api.get('/teste', (req, res) => {
        res.json({'texto':'Marcio Otario'});
        
    })

    return api;
}