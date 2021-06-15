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

var randUserName1 = faker.internet.userName();
var randName1 = faker.name.findName();
var randEmail1 = faker.internet.email();
var randPass1 = faker.internet.password();
var randAdmin1 = faker.datatype.boolean();

var randUserName2 = faker.internet.userName();
var randName2 = faker.name.findName();
var randEmail2 = faker.internet.email();
var randPass2 = faker.internet.password();
var randAdmin2 = faker.datatype.boolean();

// Product
var randProductName = faker.commerce.productName;
var randProductPrice = faker.commerce.price;
var randProductFloat = faker.datatype.float(2);
var randProductDescription = faker.commerce.productDescription;
var randProductQuantity = faker.datatype.number(999);
var randProductImage = faker.image.animals()

var randProductName1 = faker.commerce.productName;
var randProductPrice1 = faker.commerce.price;
var randProductFloat1 = faker.datatype.float(2);
var randProductDescription1 = faker.commerce.productDescription;
var randProductQuantity1 = faker.datatype.number(999);
var randProductImage1 = faker.image.animals()

// Cart
var randCartQuantity = faker.datatype.number(10);
var randCartQuantity1 = faker.datatype.number(10);

// Prepares data to be written in json format
let serverest = {
    serverest: {
        authorization: randAuth,
        users: {
            user0: {
                name: randName,
                userName: randUserName,
                typeAdmin: randAdmin, // 0 - user  , 1 - administrator
                pass: randPass,
                email: randEmail
            },
            user1: {
                name: randName1,
                userName: randUserName1,
                typeAdmin: randAdmin1, // 0 - user  , 1 - administrator
                pass: randPass1,
                email: randEmail1
            },
            user2: {
                name: randName2,
                userName: randUserName2,
                typeAdmin: randAdmin2, // 0 - user  , 1 - administrator
                pass: randPass2,
                email: randEmail2
            }
        },
        product: {
            product0:{
                productName : randProductName,
                productDescription: randProductDescription,
                productPrice: randProductPrice,
                productPriceFloat : randProductFloat,
                productQuantity :randProductQuantity,
                productImage: randProductImage,
                cartQuantity : randCartQuantity
            },
            product1:{
                productName : randProductName1,
                productDescription: randProductDescription1,
                productPrice: randProductPrice1,
                productPriceFloat : randProductFloat1,
                productQuantity :randProductQuantity1,
                productImage: randProductImage1,
                cartQuantity : randCartQuantity1
            }
        }        
    }
};

// Save to file in json format
fs.writeFileSync(path.resolve("./tests/fixtures", 'exampleServeRest.json'), JSON.stringify(serverest));