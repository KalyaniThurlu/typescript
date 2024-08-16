
interface IProduct {
    Name: string;
    Price: number;
    Qty: number;
    Total(): number;
    Print(): void;
}

interface CategoryName {
    CategoryName: string;
}

class Product implements IProduct, CategoryName {
    public Name: string = "mobile";
    public Price: number = 2000.0;
    public CategoryName: string = "mobiles";
    public Qty: number = 2;

    public Total(): number {
        return this.Price * this.Qty;
    }

    public Print(): void {
        console.log(`Name=${this.Name}\nPrice=${this.Price}\nCategoryName=${this.CategoryName}\nQty=${this.Qty}\nTotal=${this.Total()}`);
    }
}

let tv = new Product();
tv.Print();







//abstract===

interface IProducts {
    Name: string;
    Price: number;
    Qty: number;
    Total(): number;
    Print(): void;
}

abstract class ProductsTemplate implements IProducts {
    public Name: string = "";
    public Price: number = 0;
    public Qty: number = 0;

    public abstract Total(): number;
    public abstract Print(): void;
}

class Productss extends ProductsTemplate {
    Name = "Samsung Mobile";
    Price = 20000;
    Qty = 2;

    Total(): number {
        return this.Qty * this.Price;
    }

    Print(): void {
        console.log(`Name=${this.Name}\nPrice=${this.Price}\nQty=${this.Qty}\nTotal=${this.Total()}`);
    }
}

let product = new Productss();
product.Print();
