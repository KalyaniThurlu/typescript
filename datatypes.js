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
    console.log("Name=".concat(product.Name, "\nprice=").concat(product.price, "\nStock=").concat(product.Stock, "\nRating=").concat(product.Rating));
}
else {
    console.log("Name=".concat(product.Name, "\nprice=").concat(product.price, "\nStock=").concat(product.Stock));
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
        console.log("Name=".concat(this.Name, "\nprice=").concat(this.price, "\nqty=").concat(this.qty, "\nTotal=").concat(this.Total()));
    }
};
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
        console.log("Name=".concat(this.Name, "\nPrice=").concat(this.Price, "\nQty=").concat(this.Qty, "\nTotal=").concat(this.Total()));
    }
};
myproduct.Print();
var myobj = [
    { Name: "padhma", price: 10 },
    { Name: "Rama", price: 2 }
];
console.log(myobj);
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
var Product = {
    Id: 1,
    Name: "mobile",
    price: 2000,
    qty: 2,
    Total: function () {
        return this.price * this.qty;
    },
    print: function () {
        console.log("Id=".concat(this.Id, "\nName=").concat(this.Name, "\nprice=").concat(this.price, "\nqty=").concat(this.qty, "\nTotal=").concat(this.Total()));
    }
};
Product.print();
var products = {
    Name: "TV",
    Price: 35000.44,
    Qty: 2,
};
products.Qty = 3;
var productss = {
    Id: 3,
    Name: "jewelry",
    price: 2000,
    Qty: 2,
    VendorId: 100,
    VendorName: "Reliance Digital",
    CategoryName: "Electronics",
    Total: function () {
        return this.price * this.Qty;
    },
    print: function () {
        console.log("Id=".concat(this.Id, "\nName=").concat(this.Name, "\nprice=").concat(this.price, "\nQty=").concat(this.Qty, "\nTotal=").concat(this.Total(), "\nVendorId=").concat(this.VendorId, "\nVendorName=").concat(this.VendorName, "\nCategoryName=").concat(this.CategoryName));
    }
};
productss.print();
//===Static & Non-Static
var Demo = /** @class */ (function () {
    function Demo() {
        this.n = 0;
        Demo.s = Demo.s + 1;
        this.n = this.n + 1;
    }
    Demo.prototype.print = function () {
        console.log("s=".concat(Demo.s, "\nn=").concat(this.n));
    };
    Demo.s = 0;
    return Demo;
}());
var obj1 = new Demo();
obj1.print();
var obj2 = new Demo();
obj2.print();
var obj3 = new Demo();
obj3.print();
