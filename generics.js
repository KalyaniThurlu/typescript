function Sum(a, b) {
    return a + b;
}
function Print(a, b) {
    return Sum(a, b);
}
console.log(Print(40, 40));
function FetchData(response) {
    for (var property in response) {
        console.log("".concat(property, " ").concat(response[property]));
    }
}
FetchData(({ Name: "latha", Price: 2 }));
FetchData(({ FirstName: "Rama", LastName: "devi", salary: 2000 }));
var Database1 = /** @class */ (function () {
    function Database1(connectionString) {
        for (var property in connectionString) {
            console.log("".concat(property, " ").concat(connectionString[property]));
        }
    }
    return Database1;
}());
var oracle1 = new Database1({ UserId: "scott", Password: "tiger", Database: "123.00" });
var mongoDb = new Database1({ Url: "123:httpsMangoDB" });
var Database = /** @class */ (function () {
    function Database() {
        this.ConnectionString = null;
    }
    Database.prototype.Print = function () {
        for (var property in this.ConnectionString) {
            console.log("".concat(property, " : ").concat(this.ConnectionString[property]));
        }
    };
    return Database;
}());
var oracle = new Database();
oracle.ConnectionString = { UserId: "admin", Password: "12345", Database: "EmpDB" };
oracle.Print();
var mongo = new Database();
mongo.ConnectionString = { Url: "mongodb://127.0.0.1:27017" };
mongo.Print();
//===enum[Enumeration]
//==Ex==enum
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["ok"] = 200] = "ok";
    StatusCodes[StatusCodes["method"] = 201] = "method";
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Timeout"] = 405] = "Timeout";
})(StatusCodes || (StatusCodes = {}));
console.log(StatusCodes.NotFound);
console.log(StatusCodes.method);
//==enum
var StatusCodess;
(function (StatusCodess) {
    StatusCodess[StatusCodess["A"] = 10] = "A";
    StatusCodess[StatusCodess["B"] = 20] = "B";
    StatusCodess[StatusCodess["C"] = 30] = "C";
})(StatusCodess || (StatusCodess = {}));
console.log("Addition=".concat(StatusCodess.C));
//===Reverse Mapping
var StatusCodes1;
(function (StatusCodes1) {
    StatusCodes1[StatusCodes1["ok"] = 200] = "ok";
    StatusCodes1[StatusCodes1["NotFound"] = 404] = "NotFound";
})(StatusCodes1 || (StatusCodes1 = {}));
console.log(StatusCodes1.ok, StatusCodes1[404]);
