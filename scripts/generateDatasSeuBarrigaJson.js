// Generate data to seubarriga scenarios

const fs = require('fs');
const path = require('path');
const { rand, datatype, system } = require('faker');
var faker = require('faker');

var randUserName = faker.internet.userName();
var randName = faker.name.findName();
var randEmailValid = faker.internet.email();
var randEmailInvalid = faker.internet.email()+ ".qa";
// var randPass = faker.internet.password(12, true, "", "bah_2021"); 
var randPass = faker.internet.password();
var randPass2 = faker.internet.password();
var randValueInteger = faker.datatype.number();
var randValueFloat = faker.datatype.float();
var randPayed = faker.datatype.boolean();
var randMovType = faker.datatype.boolean();
var randAccountDescription = faker.finance.accountName();
var randPerson = [faker.name.findName(), faker.name.findName(),faker.name.findName()] ;


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
    console.log(`o que houve? ${todayFormated},${randDate}`)
    return dateFormated 
}



// Prepares data to be written in json format
let seubarriga = {
    seubarriga: {
        name: randName,
        userName: randUserName,
        passfixe: "llf",
        passIncorrect: randPass,
        pass: randPass2,
        emailfixe: "luanadfreitas@gmail.com",
        email: randEmailValid,
        emailInvalid: randEmailInvalid,
        accountName: `Account - ${randName}`,
        description: randAccountDescription,
        valueInt: randValueInteger,
        valueFloat: randValueFloat,
        payed: randPayed, // 1 - pago, 0- pendente
        movimentationType: randMovType, // 0 - receita, 1 - despesa
        persons: {
            personA : randPerson[0],
            personB : randPerson[1],
            personC : randPerson[2]

        },
        dateMovInvalid: randDate(false), // date 12/6/2021
        datePayInvalid: randDate(false),        
        //dateMovValid: randDate(true), // date 12/06/2021
        //datePayValid: randDate(true),
        dateMovValid: "05/06/2021", // date 12/06/2021
        datePayValid: "06/06/2021", // date 12/06/2021
    }
};

// Save to file in json format
fs.writeFileSync(path.resolve("./tests/fixtures", 'seuBarriga.json'), JSON.stringify(seubarriga));