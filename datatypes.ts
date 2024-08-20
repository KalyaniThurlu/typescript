 var firstName: string="suma"
 console.log(firstName)
 var numbers: number=20;
 console.log(numbers)
 var isValue: null=null
 console.log(isValue)
 var userName;
 console.log(userName)

// // can handle various datatypes
 var  values:any[]=["suma",10,true]
 console.log(values)
//specific datatype
 var value:string[]=["a","b","c","d"
    
 ];
 console.log(value)
 var exvalue:number[]=[1,2,3,4,5]
 console.log(exvalue)
 //initialization
 var exxvalue:any[]=[];
 exxvalue=["a",1,true]
 console.log(exxvalue)
 var exvalues:string[]=["latha","geetha","suma"];
 console.log(exvalues)
 //initialization with constructor
 var myvalues:string[]=new Array("a","b","c")
 console.log(myvalues)
 //assignment with constructor
 var myvalue:number[];
 myvalue=new Array(1,2,3,4);
 console.log(myvalue);

//var values: string[]|number[]=[10,"a"];
//console.log(values);    //invalid
 var Exvalue:(string|number|boolean)[]=[10,"a",20,true]
 console.log(Exvalue)
//==object====
 var obj:{
     Print(): unknown;Name:string,id:number
}={
     Name:"preethi",
     id:2,
 }
 console.log(obj)


 var product:{Name:string,price:number,Stock:boolean,Rating:number}={
     Name:" Tv",
     price:3400,
     Stock:true,
     Rating:4.5
 };
 if(product.Rating){
    console.log(`Name=${product.Name}\nprice=${product.price}\nStock=${product.Stock}\nRating=${product.Rating}`)

 }else{
     console.log(`Name=${product.Name}\nprice=${product.price}\nStock=${product.Stock}`)
 }

// //properties&methods
 var exxproduct: {

        Name: string,
     price: number,
     qty: number,
     Total(): number,
     print(): void
 } = {
     Name: "Samsung Tv",
     price: 1000,
     qty: 2,
     Total: function() {
         return this.qty * this.price;
     },

     print: function() {
         console.log(`Name=${this.Name}\nprice=${this.price}\nqty=${this.qty}\nTotal=${this.Total()}`);
     } }


exxproduct.print ();
//Array of object

var myproduct:{Name:string, Cities:string[], Rating:{rate:number, count:number}, Price:number, Qty:number, Total():number, Print():void} = {

    Name: " ledTV",
    Price: 40000.33,
    Qty: 2,
    Cities:["Delhi", "Hyd"],
    Rating: {rate: 4.2, count: 3400},
    Total: function(){
        return this.Qty * this.Price
    },
    Print: function(){
        console.log(`Name=${this.Name}\nPrice=${this.Price}\nQty=${this.Qty}\nTotal=${this.Total()}`);
    }
}

myproduct.Print();

var myobj:{Name:string,price:number}[]=[
    {Name:"padhma",price:10},
    {Name:"Rama",price:2}

]
console.log(myobj)





var password:string="aDmin123";
var pattern=/(?=.*[A-Z]\w{4,14})/
if(password.match(pattern)){
    console.log("verified")

}else{
    console.log("password must 4 to 15 uppercase one letter")
}

var mfd : Date= new Date();
console.log(mfd)



var now :Date = new Date();
var dayOfWeek:number =now.getHours()
console.log(dayOfWeek)
//==interface=====

interface Iproduct {
    Id: number;
    Name: string;
    price: number;
    qty: number;
    Total(): number;
    print(): void;
}

var Product: Iproduct = {
    Id: 1,
    Name: "mobile",
    price: 2000,
    qty: 2,
    Total: function () {
        return this.price * this.qty;
    },
    print: function () {
        console.log(`Id=${this.Id}\nName=${this.Name}\nprice=${this.price}\nqty=${this.qty}\nTotal=${this.Total()}`);
    }
}

Product.print();








interface  IProducts
{
 Name:string;
 readonly Price:number;
 Qty:number;
}

var products : IProducts = {
 Name : "TV",
     Price: 35000.44,
 Qty:2,

 		
 
    }
    products.Qty = 3;
    //===multiple inheritance===
    
    interface IVendor {
        VendorId: number;
        VendorName: string;
    }
    
    interface ICategory {
        CategoryName: string;
    }
    
    interface IProductss extends IVendor, ICategory {
        Id: number;
        Name: string;
        readonly price: number;
        Qty: number;
        Total(): number;
        print(): void;
    }
    
    const productss: IProductss = {
        Id: 3,
        Name: "jewelry",
        price: 2000,
        Qty: 2,
        VendorId: 100,
        VendorName: "Reliance Digital",
        CategoryName: "Electronics",
        Total() {
            return this.price * this.Qty;
        },
        print() {
            console.log(`Id=${this.Id}\nName=${this.Name}\nprice=${this.price}\nQty=${this.Qty}\nTotal=${this.Total()}\nVendorId=${this.VendorId}\nVendorName=${this.VendorName}\nCategoryName=${this.CategoryName}`);
        }
    };
    
    productss.print();
    
    //===Static & Non-Static
    class Demo{
        static s =0;
        n =0
        constructor(){
            Demo.s=Demo.s+1;
            this.n=this.n+1
        }
        print(){
            console.log(`s=${Demo.s}\nn=${this.n}`)
        }
    }
    let obj1=new Demo()
    obj1.print();
    let obj2=new Demo()
    obj2.print()
    let obj3 =new Demo()
    obj3.print()