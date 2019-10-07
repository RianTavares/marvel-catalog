const api = require('express').Router();
const comics =  require('./mocks/comics/comics-mock.json');
const axios = require('axios');
const md5 = require('md5');
const dotenv = require('dotenv');
dotenv.config();

module.exports = () => {
    
    api.get('/teste', (req, res) => {
        res.json({'texto':'Marcio Otario'});
        
    })

    api.get('/comics', (req, res) => {

        const BASE_URL = 'http://gateway.marvel.com/v1/public/comics?';
        const limit = 'limit=0';
        const TIME_STAMP = Date.now();
        const API_KEY = process.env.API_KEY;
        const PRIVATE_KEY = process.env.PRIVATE_KEY
        const HASH =  + md5(TIME_STAMP+API_KEY+PRIVATE_KEY);
        let comicsArray = [];

        // '&ts=' '&apikey='  '&hash='
        axios.get(BASE_URL+limit+'&ts='+TIME_STAMP+'&apikey='+API_KEY+'&hash='+HASH)
        .then(response => {

            response.forEach(element => {
                    let title = element.title;
                    title = title.slice(0, 11)
                    title = title + '...';
        
                    const obj = {
                        'title': title,
                        'thumb': element.thumbnail.path + '.' + element.thumbnail.extension
                    }
                    
                    comicsArray.push(obj)
                });

        })
        .catch(error => {
            console.log(error);
        });

        res.json(comicsArray);
        
    })

    return api;
}