var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Product = /** @class */ (function () {
    function Product() {
        this.Name = "mobile";
        this.Price = 2000.0;
        this.CategoryName = "mobiles";
        this.Qty = 2;
    }
    Product.prototype.Total = function () {
        return this.Price * this.Qty;
    };
    Product.prototype.Print = function () {
        console.log("Name=".concat(this.Name, "\nPrice=").concat(this.Price, "\nCategoryName=").concat(this.CategoryName, "\nQty=").concat(this.Qty, "\nTotal=").concat(this.Total()));
    };
    return Product;
}());
var tv = new Product();
tv.Print();
var ProductsTemplate = /** @class */ (function () {
    function ProductsTemplate() {
        this.Name = "";
        this.Price = 0;
        this.Qty = 0;
    }
    return ProductsTemplate;
}());
var Productss = /** @class */ (function (_super) {
    __extends(Productss, _super);
    function Productss() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Name = "Samsung Mobile";
        _this.Price = 20000;
        _this.Qty = 2;
        return _this;
    }
    Productss.prototype.Total = function () {
        return this.Qty * this.Price;
    };
    Productss.prototype.Print = function () {
        console.log("Name=".concat(this.Name, "\nPrice=").concat(this.Price, "\nQty=").concat(this.Qty, "\nTotal=").concat(this.Total()));
    };
    return Productss;
}(ProductsTemplate));
var product = new Productss();
product.Print();
