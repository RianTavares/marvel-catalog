const api = require('express').Router();
const comics =  require('./mocks/comics/comics-mock.json');
const axios = require('axios');
const md5 = require('md5');
const dotenv = require('dotenv');
dotenv.config();

module.exports = () => {
    
    api.get('/teste', (req, res) => {
        
        const response = [];
        
        comics.data.results.map((item) => {
            
            let title = item.title;
            title = title.slice(0,11);
            title = title + '...';
            
            const obj = {
                "id": item.id,
                "title": title,
                "thumb": item.thumbnail.path + "." + item.thumbnail.extension 
            }
            response.push(obj);
        })
        res.json(response);
    })

    


    api.get('/comics', (req, res) => {
        
        const BASE_URL = 'http://gateway.marvel.com/v1/public/comics?';
        const limit = 'limit=12';
        const TIME_STAMP = Date.now();
        const API_KEY = process.env.API_KEY;
        const PRIVATE_KEY = process.env.PRIVATE_KEY;
        const mixin = TIME_STAMP + PRIVATE_KEY + API_KEY;
        const HASH = md5(mixin);
        let comicsArray = [];
        
        axios.get(`${BASE_URL}${limit}&ts=${TIME_STAMP}&apikey=${API_KEY}&hash=${HASH}`)
        .then(response => {

            const results = response.data.data.results;
            
            results.forEach((hq) =>{
                
                let title = hq.title;
                title = title.slice(0,11);
                title = title + '...';
                
                const obj = {
                    'id':hq.id,
                    'title': title,
                    'thumb': hq.thumbnail.path + "." + hq.thumbnail.extension
                }
                comicsArray.push(obj);
            });
            res.json(comicsArray);
        })
        .catch((err) => console.log(`O erro é:${err}`));
    })
    return api;
}