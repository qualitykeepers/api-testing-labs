// Generate data to seubarriga scenarios

const fs = require('fs');
const path = require('path');
const { rand, datatype, system } = require('faker');
var faker = require('faker');

var randUserName = faker.internet.userName();
var randName = faker.name.findName();
var randEmail = faker.internet.email();
// var randPass = faker.internet.password(12, true, "", "bah_2021"); 
var randPass = faker.internet.password();
var randValueInteger = faker.random.number();
var randValueFloat = faker.random.float();
var randPayed = faker.random.boolean();
var randMovType = faker.random.boolean();
var randAccountDescription = faker.finance.accountName();
var randPerson = faker.name.findName();


// Thiis code was copy of Exemplo 4: Colocar zero antes de dias e meses com um algarismo and modified.
// link to Exemplo 4 -> https://blog.betrybe.com/javascript/javascript-date-format/#4
function addZero(numero){
    if (numero <= 9) 
        return "0" + numero;
    else
        return numero; 
}

// Formatted dates that was automatically generated, for used in date for payment and date the movementation
const dateFormatted = function (date, ctrlDate){
    var dateFormated 
    if (ctrlDate === true){
        dateFormated = (addZero(date.getDate().toString()) 
        + "/" 
        + (addZero(date.getMonth()+1).toString()) 
        + "/" + date.getFullYear());

    }else {
        dateFormated  = ((date.getDate() )) 
        + "/" 
        + ((date.getMonth() + 1)) + "/" 
        + date.getFullYear(); 
    }
    return  dateFormated
}

var today = new Date()
var todayFormated = dateFormatted(today, true);

const randDate = function ( isValid){
    var dateFormated;
    var randDate = faker.date.between('01-01-2010', todayFormated);
    if (isValid === true){
        dateFormated = dateFormatted(randDate, true);
    }else {        
        dateFormated = dateFormatted(randDate, false);
    }
    return dateFormated 
}

// Prepares data to be written in json format
let seubarriga = {
    seubarriga: {
        name: randName,
        userName: randUserName,
        pass: randPass,
        email: randEmail,
        accountName: `Account - ${randName}`,
        description: randAccountDescription,
        valueInt: randValueInteger,
        valueFloat: randValueFloat,
        payed: randPayed, // 0 - pago, 1- pendente
        movimentationType: randMovType, // 0 - receita, 1 - despesa
        person: randPerson,
        dateMovInvalid: randDate(false), // date 12/6/2021
        datePayInvalid: randDate(false),        
        dateMovValid: randDate(true), // date 12/06/2021
        datePayValid: randDate(true),

    }
};

// Save to file in json format
fs.writeFileSync(path.resolve("./tests/fixtures", 'seuBarriga.json'), JSON.stringify(seubarriga));