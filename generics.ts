
function Sum (a:any,b:any){
    return a+b

}
function Print<type>(a:type,b:type){
    return Sum(a,b)

}
console.log(Print<number> (40,40))



//===Generics Functions===

interface IProduct
{
    Name:string;
    Price:number;
}
interface IEmployee
{
    FirstName:string;
    LastName:string;
    salary:number;
}

function FetchData <T>(response:T){
    for( var  property in response){

        console.log(`${property} ${response[property]}`)
    }

}
FetchData(<IProduct>({Name:"latha",Price:2}))
FetchData(<IEmployee>({FirstName:"Rama",LastName:"devi",salary:2000}))


//ex class===

interface IOracle1
{
    UserId:string;
    Password:string;
    Database:string;
}

interface IMongoDB1
{
    Url:string
}

class Database1<T>{
    constructor(connectionString:T){
        for(var  property in connectionString){
 console.log(`${property} ${connectionString[property]}`)
        }

    }
}
let oracle1= new Database1<IOracle>({UserId:"scott",Password:"tiger",Database:"123.00"})
let mongoDb= new Database1<IMongoDB>({Url:"123:httpsMangoDB"})



//===== Generic class and Property====

interface IOracle
{
      UserId:string;
      Password:string;
      Database:string;
}
interface IMongoDB
{
      Url:string;
}

class Database<T>
{
      public ConnectionString:T|null = null;

      public Print():void {
            for(var property in this.ConnectionString) {
                  console.log(`${property} : ${this.ConnectionString[property]}`);
            }
      }
}

let oracle = new Database<IOracle>();
oracle.ConnectionString = {UserId:"admin", Password:"12345", Database:"EmpDB"};
oracle.Print();

let mongo = new Database<IMongoDB>();
mongo.ConnectionString = {Url:"mongodb://127.0.0.1:27017"};
mongo.Print();

//===enum[Enumeration]
//==Ex==enum
enum StatusCodes
{
    ok=200,
    method,
    NotFound=404,
    Timeout,
}
console.log(StatusCodes.NotFound)
console.log(StatusCodes.method)
 //==enum
enum StatusCodess
{
    A=10,
    B=20,
    C=A+B

}
console.log(`Addition=${StatusCodess.C}`)
//===Reverse Mapping
enum StatusCodes1
{
    ok=200,
    NotFound=404
}
console.log(StatusCodes1.ok,StatusCodes1[404])