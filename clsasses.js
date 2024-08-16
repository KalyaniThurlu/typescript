var Product = /** @class */ (function () {
    function Product() {
        this.Name = "Samsung Tv";
        this.Price = 40000.33;
        this.Qty = 1;
        this.CategoryName = "Electronics";
        this.Stock = true;
    }
    Product.prototype.Total = function () {
        return this.Qty * this.Price;
    };
    Product.prototype.Print = function () {
        console.log("Name=".concat(this.Name, "\nPrice=").concat(this.Price, "\nStock=").concat(this.Stock, "\nQty=").concat(this.Qty, "\nTotal=").concat(this.Total()));
    };
    return Product;
}());
var tv = new Product();
tv.Print();
