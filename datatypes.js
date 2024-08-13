"use strict";
var firstName = "suma";
console.log(firstName);
var numbers = 20;
console.log(numbers);
var isValue = null;
console.log(isValue);
var userName;
console.log(userName);
// // can handle various datatypes
var values = ["suma", 10, true];
console.log(values);
//specific datatype
var value = ["a", "b", "c", "d"
];
console.log(value);
var exvalue = [1, 2, 3, 4, 5];
console.log(exvalue);
//initialization
var exxvalue = [];
exxvalue = ["a", 1, true];
console.log(exxvalue);
var exvalues = ["latha", "geetha", "suma"];
console.log(exvalues);
//initialization with constructor
var myvalues = new Array("a", "b", "c");
console.log(myvalues);
//assignment with constructor
var myvalue;
myvalue = new Array(1, 2, 3, 4);
console.log(myvalue);
//var values: string[]|number[]=[10,"a"];
//console.log(values);    //invalid
var Exvalue = [10, "a", 20, true];
console.log(Exvalue);
//==object====
var obj = {
    Name: "preethi",
    id: 2,
};
console.log(obj);
var product = {
    Name: " Tv",
    price: 3400,
    Stock: true,
    Rating: 4.5
};
if (product.Rating) {
    console.log(`Name=${product.Name}\nprice=${product.price}\nStock=${product.Stock}\nRating=${product.Rating}`);
}
else {
    console.log(`Name=${product.Name}\nprice=${product.price}\nStock=${product.Stock}`);
}
// //properties&methods
var exxproduct = {
    Name: "Samsung Tv",
    price: 1000,
    qty: 2,
    Total: function () {
        return this.qty * this.price;
    },
    print: function () {
        console.log(`Name=${this.Name}\nprice=${this.price}\nqty=${this.qty}\nTotal=${this.Total()}`);
    }
};
// // Calling the print method
exxproduct.print();
//Array of object
var myproduct = {
    Name: " ledTV",
    Price: 40000.33,
    Qty: 2,
    Cities: ["Delhi", "Hyd"],
    Rating: { rate: 4.2, count: 3400 },
    Total: function () {
        return this.Qty * this.Price;
    },
    Print: function () {
        console.log(`Name=${this.Name}\nPrice=${this.Price}\nQty=${this.Qty}\nTotal=${this.Total()}`);
    }
};
myproduct.Print();
var myobj = [
    { Name: "padhma", price: 10 },
    { Name: "Rama", price: 2 }
];
console.log(myobj);
var data = new Map();
data.set(1, "latha");
data.set(1, "Geetha");
data.set(3, "suma");
data.has(3);
console.log(data);
data.delete(2);
let dada = new Map();
dada.set(1, "lastName");
let value1 = data.get(1);
console.log("value for key :", value1);
var password = "aDmin123";
var pattern = /(?=.*[A-Z]\w{4,14})/;
if (password.match(pattern)) {
    console.log("verified");
}
else {
    console.log("password must 4 to 15 uppercase one letter");
}
var mfd = new Date();
console.log(mfd);
var now = new Date();
var dayOfWeek = now.getHours();
console.log(dayOfWeek);
