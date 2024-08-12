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
 var obj:{Name:string,id:number}={
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

// // Calling the print method
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













































	
		

		












