// Generate data to ServeRest scenarios

const fs = require('fs');
const path = require('path');
const { rand, datatype, system } = require('faker');
var faker = require('faker');

// Authorization
var randAuth = faker.random.alphaNumeric(12);

// User
var randUserName = faker.internet.userName();
var randName = faker.name.findName();
var randEmail = faker.internet.email();
var randPass = faker.internet.password();
var randAdmin = faker.datatype.boolean();

// Product
var randProductName = faker.commerce.productName;
var randProductPrice = faker.commerce.price;
var randProductFloat = faker.datatype.float(2);
var randProductDescription = faker.commerce.productDescription;
var randProductQuantity = faker.datatype.number(999);
var randProductImage = faker.image.animals()

// Cart
var randCarttQuantity = faker.datatype.number(10);

// Prepares data to be written in json format
let serveRest = {
    serveRest: {
        authorization: randAuth,
        name: randName,
        userName: randUserName,
        typeAdmin: randAdmin, // 0 - user  , 1 - administrator
        pass: randPass,
        email: randEmail,  
        productName : randProductName,
        productDescription: randProductDescription,
        productPrice: randProductPrice,
        productPriceFloat : randProductFloat,
        productQuantity :randProductQuantity,
        productImage: randProductImage,
        carttQuantity : randCarttQuantity
    }
};

// Save to file in json format
fs.writeFileSync(path.resolve("./tests/fixtures", 'serveRest.json'), JSON.stringify(serveRest));