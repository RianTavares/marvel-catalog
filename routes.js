const api = require('express').Router();
const comics =  require('./mocks/comics/comics-mock.json');

module.exports = () => {
    
    api.get('/teste', (req, res) => {
        res.json({'texto':'Marcio Otario'});
        
    })

    api.get('/comics', (req, res) => {

        let comicsArray = [];

        comics.data.results.forEach(element => {
            let title = element.title;
            title = title.slice(0, 11)
            title = title + '...';

            const obj = {
                'title': title,
                'thumb': element.thumbnail.path + '.' + element.thumbnail.extension
            }
            
            comicsArray.push(obj)
        });

        res.json(comicsArray);
        
    })

    return api;
}