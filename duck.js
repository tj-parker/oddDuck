'use strict'

let Container = document.querySelector('section');
let resultButton = document.querySelector('section + div');
let image1 = document.querySelector('section img:first-child');
let image2 = document.querySelector('section img:nth-child(2)');
let image3 = document.querySelector('section img:nth-child(3)');

let clicks = 0;
let maxClicksAllowed = 25;

function Product(name, src) {
    this.name = name;
    this.src = src;
    this.views = 0;
    Product.allProductsArray.push(this);
}

Product.allProductsArray = [];

function getRandomNumber() {
    return Math.floor(Math.random() * Product.allProductsArray.length);
  }
  
  function renderProduct() {
    let product1 = getRandomNumber();
    let product2 = getRandomNumber();
    let product3 = getRandomNumber();
  
    while (product1 === product2) {
      product2 = getRandomNumber();
    }
    while (product1 === product3) {
        product1 = getRandomNumber();
    }
    while (product2 === product3) {
        product3 = getRandomNumber();
    }

    image1.src = Product.allProductsArray[product1].src;
    image2.src = Product.allProductsArray[product2].src;
    image3.src = Product.allProductsArray[product3].src;
    image1.alt = Product.allProductsArray[product1].name;
    image2.alt = Product.allProductsArray[product2].name;
    image3.alt = Product.allProductsArray[product3].name;
    Product.allProductsArray[product1].views++;
    Product.allProductsArray[product2].views++;
    Product.allProductsArray[product3].views++;
  }