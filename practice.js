"use strict";
var obg = {
    Name: "latha",
    price: 20
};
console.log(obg);
var exobg = [
    { Name: "suma", price: 1000 }
];
console.log(exobg);
var fvalue = {
    Name: "madhu",
    price: 1000,
    qtl: 2.3,
    Total: function () {
        return this.price * this.qtl;
    },
    print: function () {
        console.log(`Name:${this.Name}\nprice ${this.price}\nqtl${this.qtl}\nTotal${this.Total}\n print(${this.price}`);
    }
};
fvalue.print();
