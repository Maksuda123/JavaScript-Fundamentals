//Symbol in JS
// Symbol ekta data type like string,boolean ES15 te jeta ashse
//Symbol primitive type
var symbol1 = Symbol()//Symbol() js er ekta buildin function new keyword nai kintu ai khane.
//aita k use kore amra ekta symbol toiri korte pari, function call korle e symbol toiri hoi.

var symbol2 = Symbol();

console.log(symbol1 === symbol2);//Output: false both are not same
console.log(symbol1,symbol2);//Output: Symbol(), Symbol() 




//Features in symbol
var symbol1 = Symbol("I am Symbol 1");//symbol with discription
var symbol2 = Symbol("I am Symbol 1");
//symbol k new keyword diya create kora jai na
//symbol gula unique hoi



//singleton
var symbol1 = Symbol.for("name");//for use korlay bitor er jinish ta importent tokhon sheta key hishaba kaj kore
var symbol2 = Symbol.for("name");
console.log(symbol1 === symbol2);//Output: true
//symbol.for avoit kora e valo




//symbol k amra kono ekta object er property key hishabe use korty pari
var cricket = Symbol.for("This is cricket Symbol");

var object = {
    name: "sakib",
    [cricket]: "Bangladesh",//cricket proprty er jaigai This is cricket Symbol hoiya jabe
};
console.log(object);






//Symbol kano asho? Why do you need symbol?
var object = {};

object.name = "Javascript";
object.estd = "1995";

//hiden property
//object er value dynamically dite chile [] dite hoi dot dite parbo na
object[Symbol("founder")] = "Brendan Eich";
//ai kane object key symbol & property founder value Brendan Eich
console.log(object);//Output: {name: "Javascript", estd: "1995", Symbol(founder): "Brendan Eich"}

//object ter modda diya jodi jai mane jodi iterate kori
for(let key in object) {
    console.log(key);//output: name estd
    //for loop symbol er moddo diya jaite pare nai
}



console.log(Object.keys(object));//Output: (2) ["name", "estd"] //Object.keys er modda object pathiya dile tar shob property gula diya dei but ai khane dei nai
//Symbol er property gula js er bibino loop, bibino function tara aita k dekte pai na
//onek indentifier ase like id ja amra dakhate china ai rokom khatre symbol use korbo



console.log(Array.prototype);//Ai boro Array er prototype er modde bibino Method ase




//in the backend js pochur porimane symbol use kore
// .search, .charAt ai method gulo bitore symbol use kore


//prototype k jeno over Write korte pare er ekta karon holo symblo asha
var myArray = [1,2,3];
console.log(myArray.includes(2));//output: true //Array te iclude name buildin ekta property ase jeta ekta function
console.log(myArray["includes"](2));//output: true //both same






var includes = Symbol("my own array includes method");
Array.prototype[includes] = () => {//aita anonymous function
    console.log("This is my includes function");
}
var myArray = [1,2,3];
console.log(myArray.includes(2));
console.log(myArray["includes"](2));//buildin includes aita

myArray[includes](2);//aita Symbol includes // output:This is my includes function





//Mozila JS er Diary/Dictonary/Bible








//builtin  Symbol.Search amra ai rokom nijeta toiri korbo
 var title = "JAvaScript";//string type

//search kothi pelo ai peimitive type?
//1. title ke new String("JavaScript")
// 2. convert parameter ("Script") into RegExp
// 3. RegExp er moddhe Symble.search() er implementation ache kina
console.log(String);//ai boro string er modda search ache



 console.log(title.search("Script"));//Aita k reguler experation a dewa jai like /Script/




 //Finally nijera toiri kori...

 class Product {
     constructor(title) {
         this.title = title;
     }
     //implement search
     [Symbol.search](string) {//aita ekta function 
         return string.indexOf(this.title) >= 0 ? "Found" : "Not found";
     }

 }
var laptop = new Product("laptop");
console.log("HP laptop".search(laptop));//amder symbol.search use kore





//symbol k delete korte parbo na.....
function myFunc() {
    const PVT = Symbol('My private value');

    return {
        modify(obj) {
            obj[PVT] = true;
        },
        output(obj) {
            return obj[PVT];
        }
    }
}

const value = myFunc();
const obj = {a: 1, b: 2};
value.modify(obj);
console.log(value.output(obj));
console.log(obj);
delete obj["My private value"]
console.log(obj);//delete hobe na



 var p =  {a: 1, b: 2};
 delete p["a"];
 console.log(p);//output: 2 .... 1 delete


// for loop er modde Symbol gulo visible hobe na
// Symbol.search k nijer moto implemnt kora jabe but delete kora jabe na
//  symbol er description bole ekta property ase
//  Symbol.search unique identifier




//  Net/online theke aro details ye pora suna korte hobe shob gula topic