



const greeting = "Hello, World!";
console.log(greeting);


interface Iproducts {
    Name: string;
    Id: number;
    Price: number;
    Qty: number;
    Total(): number;
    Print(): void;
}

var Products: Iproducts = {
    Name: "sima",
    Id: 200,
    Price: 1000,
    Qty: 1,
    Total: function () {
        return this.Price * this.Qty;
    },
    Print: function () {
        console.log(`Name=${this.Name}\nId=${this.Id}\nPrice=${this.Price}\nQty=${this.Qty}\nTotal=${this.Total()}`);
    }
}

Products.Print();
