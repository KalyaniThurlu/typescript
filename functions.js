function Detailes(id, name, price) {
    if (price) {
        console.log("id=".concat(id, "\nname=").concat(name, "\nprice=").concat(price));
    }
    else {
        console.log("id=".concat(id, "\nname=").concat(name));
    }
}
function Addition(a, b) {
    return a + b;
}
Detailes(1, "tv");
console.log("Addition=" + Addition(20, 30));
function Exdetailes(id, name, price) {
    if (price) {
        console.log("name=".concat(name, "\nid=").concat(id, "\n").concat(price));
    }
    else {
        console.log("name=".concat(name, "\nid").concat(id));
    }
}
Exdetailes(20, "prethi");
function exxDetailes() {
    var product = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        product[_i] = arguments[_i];
    }
    var id = product[0], Name = product[1], price = product[2];
    if (price) {
        console.log("id=".concat(id, "\nname=").concat(Name, "\nprice").concat(price));
    }
    else {
        console.log("id=".concat(id, "\nName"));
    }
}
exxDetailes(2, "mobile");
// Ensure the variable name matches
var Product = {
    Id: 10,
    Name: "TV",
    Price: 45000.44,
    Qty: 2,
    Total: function () {
        return this.Qty * this.Price;
    },
    Print: function () {
        console.log("Id=".concat(this.Id, "\nName=").concat(this.Name, "\nPrice=").concat(this.Price, "\nQty=").concat(this.Qty, "\nTotal=").concat(this.Total()));
    }
};
product.print();
