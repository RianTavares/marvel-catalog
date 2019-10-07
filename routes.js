const api = require('express').Router();
const comics =  require('./mocks/comics/comics-mock.json');
const axios = require('axios');

module.exports = () => {
    
    api.get('/teste', (req, res) => {
        res.json({'texto':'Marcio Otario'});
        
    })

    api.get('/comics', (req, res) => {

        // let comicsArray = [];

        // comics.data.results.forEach(element => {
        //     let title = element.title;
        //     title = title.slice(0, 11)
        //     title = title + '...';

        //     const obj = {
        //         'title': title,
        //         'thumb': element.thumbnail.path + '.' + element.thumbnail.extension
        //     }
            
        //     comicsArray.push(obj)
        // });



        axios.get('')
        .then(response => {
            console.log(response);
            // console.log(response.data.explanation);
        })
        .catch(error => {
            console.log(error);
        });


        res.json('lalalalalala');
        
    })

    return api;
}