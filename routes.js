const api = require('express').Router();
const comics =  require('./mocks/comics/comics-mock.json');
const axios = require('axios');
const md5 = require('md5');
const dotenv = require('dotenv');
dotenv.config();

module.exports = () => {
    
    api.get('/teste', (req, res) => {
        const response = []
        // let count = 0
        comics.data.results.map((item) => {
            const obj = {
                "id": item.id,
                "title": item.title,
                "thumb": item.thumbnail.path + "." + item.thumbnail.extension 
            }
            response.push(obj)
            // console.log(count+=1);
              
        })



        res.json({'texto':'Marcio Otario'});
    })
    
    api.get('/comics', (req, res) => {
    
        const BASE_URL = 'http://gateway.marvel.com/v1/public/comics?';
        const limit = 'limit=10';
        const TIME_STAMP = Date.now();
        const API_KEY = process.env.API_KEY;
        const PRIVATE_KEY = process.env.PRIVATE_KEY;
        const mixin = TIME_STAMP + PRIVATE_KEY + API_KEY;
        const HASH = md5(mixin);
        let comicsArray = [];

        axios.get(BASE_URL+limit+'&ts='+TIME_STAMP+'&apikey='+API_KEY+'&hash='+HASH)
        .then(response => {

            const results = response.data.data.results;

            results.forEach(element => {
                
                let title = element.title;
                title = title.slice(0, 11)
                title = title + '...';
        
                const obj = {
                    'title': title,
                    'thumb': element.thumbnail.path + '.' + element.thumbnail.extension,
                    'id': element.id
                }
                    
                comicsArray.push(obj)
            });
            
            res.json(comicsArray);

        })
        .catch(error => {
            console.log(error);
        });
        
    })

    return api;
}