#! /usr/bin/env node
import axios from 'axios';
import { getCode, getNames} from "country-list"; //import d'une librairie 'country-list' qui a téléchargé (npm install)
//"type": "module",:  Important qd tu import, à mettre ds le package.json

function getYear () {
    let year = new Date().getFullYear(); // Récupérer une année complète
    return year; //return variable 
}
//console.log(getYear()); //J'appelle une fonction

function getCountry () {
    const country = process.argv[2]; // il va recherche le 3 élément ds la ligne de cmd
    let countryCode= getCode(country); // récupère le code du pays

if (typeof countryCode == "undefined"){ 
}
else {
    return countryCode
}
}
//console.log(getCountry());

let baseURL = `https://date.nager.at/api/v3/publicholidays/${getYear()}/${getCountry()}`;
async function displayHolidays(){ //async : prend contact avec l'api (url)
   
    try {//condition 
        const response = await axios.get(baseURL);
        //console.log(response);

        for (let i = 0; i < response.data.length; i++) { //data => données : la longueur (nmbre) des données de response
        let data = response.data[i];
            console.log(`${data.date} - ${data.localName} - ${data.name}`);
        }
      }
    catch(error) {//erreur
    
        console.log(error);
    
}
}

console.log(displayHolidays())
//pour vérifier dans la console : node index.js Belgium




  