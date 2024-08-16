var greeting = "Hello, World!";
console.log(greeting);
var Products = {
    Name: "sima",
    Id: 200,
    Price: 1000,
    Qty: 1,
    Total: function () {
        return this.Price * this.Qty;
    },
    Print: function () {
        console.log("Name=".concat(this.Name, "\nId=").concat(this.Id, "\nPrice=").concat(this.Price, "\nQty=").concat(this.Qty, "\nTotal=").concat(this.Total()));
    }
};
Products.Print();


   


