const api = require('express').Router();
const comics =  require('./mocks/comics/comics-mock.json');
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

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
        const BASE_URL = 'http://gateway.marvel.com/v1/public/comics?'
        const TIME_STAMP = 'ts=' + Date.now();
        const API_KEY = '&apikey=' + process.env.API_KEY;
        const HASH = '&hash=' + process.env.PRIVATE_KEY;

        axios.get(BASE_URL+TIME_STAMP+API_KEY+HASH)
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