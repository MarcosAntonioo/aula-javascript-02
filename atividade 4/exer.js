//1)
var v1 = new Number (7);
var v2 = new Number (-55);
var v3 = new Number (389);
var v4 = new Number (1000);
var v5 = new Number (3.1459);
var v6 = new Number (-46.267);
console.log(v1, v2, v3, v4, v5, v6);
console.log(v1 + v6);
console.log(v1 * v3);
console.log(v4 / v5);

//2) 
var v1 = new Number (10);
var v2 = new Number (3);
var v3 = new Number (9);
var v4 = new Number (99.9);
var v5 = new Number (721);
console.log(v1, v2, v3, v4, v5);
if (v1 < Number.MAX_VALUE){
    console.log("true");
} else{
    console.log("false");
}
