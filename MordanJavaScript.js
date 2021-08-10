// Terminal a code run korer jonno node & file name likte hoi



//Flat Arrow function

//normal function
function number() {
    return 10;
}
console.log(number());



//convert normal function to array function


let number = () => {
    return 10;//ai rokom ekta statement thakle amro arrow function k chuto kore felte pari
}
console.log(number());


//choto korsi..
let number = () => 10; //return thakle kaj korbe na
console.log(number()); 


//or
let number = () => console.log(10);
number();




//js normal function this
var javascript = {
    name: "JavaScript",
    libraries: ["react", "Angular", "Vue"],
    printLibraries: function () {
        // console.log(this);
        this.libraries.forEach(function (a) {//libraries k iterate korte forEach use korsi, forEach prottek ta element k iterate korbe, forEach er bitor a ekta function likhe dibo ai function take forEach pottek iteration/element er shomoi call korbey. Pottek ta element k pabe a er modda. element gulo hosse React, anguler....
            console.log(`${this.name} loves ${a}`);//name javaScript k passe na ai function karon normal function aita
        });//So forEach er ekta function she this k pabe na forEach er upor er amader controll nai aita js er buildin function.
    },
};
javascript.printLibraries();//.printLibraries() javascript call korse so she javascript object k passe so this hosse javascript object ta
//Output: undefined loves react    undefined loves Angular    undefined loves Vue 



//ai this k thik kora jai ekta opaie, ekta variable er modda this k rakle
var javascript = {
    name: "JavaScript",
    libraries: ["react", "Angular", "Vue"],
    printLibraries: function () {
       var self = this;//bairer this k ekta variable a niya nilam
        this.libraries.forEach(function (a) {
            console.log(`${self.name} loves ${a}`);
        });
    },
};
javascript.printLibraries();
//akhon er undefine pabo na actual output pabo
//so Aita ashole shubida jonok na amder jonno ai jonno e arrow function




//arrow function asher main karon ki? this keyword er confusion dur korer jonno.//programmer er life esay korte arrow function


//akhon arrow function diya example
var javascript = {
    name: "JavaScript",
    libraries: ["react", "Angular", "Vue"],
    printLibraries: function () {
        this.libraries.forEach((a) => console.log(`${this.name} loves ${a}`));
    },
};
javascript.printLibraries();
//Output: JavaScript loves react    JavaScript loves Angular     JavaScript loves Vue

//Arrow function a bairer this & bitor er this same thake







// js truthy falsy value
//truthy hobe jodi false, 0, " " or blank, Null, Undefine, NaN ai gula na hoi boolean cotext a she truthy ai khane 6 ta condition.
var myVar = "";

if(myVar) {
    console.log("I am truthy");
}else {
    console.log("I am falsy");
}
//Output:I am falsy




//terrary operator

//Normal example
var age = 18;
var type;
if(age >= 18) {
    type = "adult";
}else {
    type = "Child";
}//Its so long

//use terrary operator
// var variable = (condition) ?  if/value1 : else/value2 ;
var age = 18;

var type = (age >= 18) ? "adult" : "Child";



//nested condition hole
var age = 18;

var type = (age >= 18) ? "adult" 
                       : (age< 10)
                       ? "Child" : "Young";
                       console.log(type);
                       //output:adult
var a = 5;
var access = a > 5 ? true : false;

//or
var a = 5;
var access = a > 5;
console.log(access);
//Output: false
//maximum 2 level porjonto hole ternary operator use korbo noito complex hoiya jai chok shojjo korte parbe na. Er bashi hole if/else, switch ai gula use kora e better.






//array find
//array.find aita main array k change kore na aita element take bar kore dai
// Array.prototype.find //ai find prototype er modda ase
var number = [1, 2, 3, 4, 5];
var result = number.find(function(currentValue){//find er vitor 1st parameter hishbe ekta function pathalam, er 2nd parameter this //mane find chasse amak ekta kaj daw mane function daw jeta ami tmr prottek ta element er moddo diya jawer shomoi korbo ek bar kore & korer shomoi jodi tmi true return koro ami bariya ashbo
//find er bitor function ta prothon je parameter ta pai sheta currentVaule, then currentIndex, array
return currentValue > 4;
}, /*this*/);
//this er confusion hosse arrow function use korbo
console.log(result);
//outPut: 5






//findIndex()
//findIndex() aita ekta index ke ber kore dai, aita value na peley minus return kore dai
//Array.prototype.findIndex()
var number = [1, 2, 3, 4, 5];
var result = number.findIndex((currentValue, index, arr) => {
    return currentValue > 4;
});
console.log(result);
//output: 4   amk 5 er index return korse then bariya ashe




//filter() 
//filter() aita ekta filter array return kore main array k change kore na
//Array.prototype.filter
var number = [1, 2, 3, 4, 5, 6, 7, 8];
var result = number.filter((currentValue, index, arr) => {
    return currentValue > 4;
});
console.log(result);
//output:  [5, 6, 7, 8]





//Array slice() //slice bujai supose cake er 2 dik a cut diya cake ta khabo
var number = [1, 2, 3, 4, 5, 6, 7, 8];
var result = number.slice(1, 3);
console.log(result);
//output:[2, 3]




//Array splice()   main array k change kore ager ekta o main array k change kore na
var number = [1, 2, 3, 4, 5, 6, 7, 8];
var result = number.splice(1, 2, 10, 12)//kothi kop dibe, koita element fale dibe, ki ki add korte chaw
console.log(number);//retult a output pabo na, result a remove value gula pabo
//output:[1, 10, 12, 4, 5, 6, 7, 8]
console.log(result);//Output:[2, 3]




//array concat name jura lagano, main array k change kore na
var number1 = [1, 2, 3, 4, 5];
var number2 = [ 6, 7, 8];
var result = number1.concat(number2);

//or
//onek gula jura lagate hole..
var number1 = [1, 2, 3, 4, 5];
var number2 = [ 6, 7, 8];
var number3 = [ 9, 10];
var result = number1.concat(number2, number3);
console.log(result);//Output:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]





//push   main array k change kore
var number = [1, 2, 3, 4, 5];

var result = number.push(6, 7,8);
console.log(number);//output: [1, 2, 3, 4, 5, 6, 7, 8]
console.log(result);//output: 8   //muptiple parameter dile last er ta output dibe





//map...   amra for use kori na map use kori
//main array k change kore na
var number = [1, 2, 3, 4, 5];

var result = number.map((num) => {//(num) aninomus function she element gula pabey //num er modda number gula pabey & pottek takey 2 diya gun kore dibe
 return 2 * num;
});
console.log(number);//output: [1, 2, 3, 4, 5]
console.log(result);//output: [2, 4, 6, 8, 10]




//push, splice main array k change kore





//Array reduce
//Array.prototype.reduce()
//main array k change kore na
var number = [1, 2, 3, 4, 5];
var result = number.reduce((preValue, currentValue, currentIndex, array) => {//reduce k ekta callback function dilam
return  preValue + currentValue;
});
//1 er jonno kono previous value nai so sum ta hobe na

//akhon hobe
var number = [1, 2, 3, 4, 5];
var result = number.reduce((preValue, currentValue) => {//reduce k ekta callback function dilam
return  preValue + currentValue;
}, 0); /*2nd parameter pass korsi/initial value pass korsi*/
console.log(result);//putput: 15







//for loop, for in, for of
//for loop block scope
const myObje = {
    name: "Javascript",
    estd: '1995',
    founder: 'Eich'
};
for(property in myObje){
    console.log(property);
}
//object er property k iterate korte amra for in use korbo
//array er modda in korle index pabo


console.log(property);

//for of
//aita je kono iterable object er modda e aita kaj korte pare //aita array object, string,  ai gula k iterate korte pare

//array
const myArray = [1, 2, 3, 4];

for(element of myArray);
console.log(element);//element gulo pabo outup ye, in use korle index pabo

//string
const myString = "javaScript";

for(element of myString){
    console.log(element);
}
//output: j a v s c r i p t





//importent object method
const myObje = {
        name: "Javascript", // name: key, value = "javascript"
        estd: '1995',
        founder: 'Eich'
    };

    var keys = Object.keys(myObje);
    var values = Object.values(myObje);
    var entries = Object.entries(myObje);
    console.log(keys); //output:  ["name", "estd", "founder"]
    console.log(values); //output:  ["Javascript", "1995", "Eich"]
    console.log(entries); //output: [ [ 'name', 'Javascript' ], [ 'estd', '1995' ], [ 'founder', 'Eich' ] ]
    // entries= name: "Javascript"
    // entries=  estd: '1995',

//variable short form
    var x = 12;
    var y = 15;
    const myObje = {
        name: "Javascript", 
        estd: '1995',
        founder: 'Eich',
        x, //X = x,
        y, 
    };



    //function default parameter value
    function myFunc(x = 10) {//call korer shomoi value pathini so tai default 10 dhore nilam 
        return x;
    }
    console.log(myFunc());






//spread operator
//spread operator mane soriya dewa
  var number = [1, 2, 3];
  var newNumbers = [number[0], number[1], number[2], 4, 5, 6];//1, 2, 3 k soriya dilam //ai process ta khubi jotil
  var newNumbers = [...number, 4, 5, 6];//that is easy
  console.log(newNumbers);//output:[1, 2, 3, 4, 5, 6]



  
var number = [1, 2, 3];
var a = [...number];//exact copy of number
number.push(4);
console.log(number);//output:[1, 2, 3, 4]
console.log(a);//output: [1, 2, 3]


var number = [1, 2, 3];
var a = number;//number change hole a o change hobe
number.push(4);
console.log(number);//output:[1, 2, 3, 4]
console.log(a);//output: [1, 2, 3, 4]




//2 ta array k ek shate korbo
//array spreading
var number1 = [1, 2, 3];
var number2 = [4, 5, 6];

var number = [...number1, ...number2];
console.log(number);//output:[1, 2, 3, 4, 5, 6]




//object spreading
var myObjec1 = {
    x: 1,
    y: 2
}

var myObjec2 = {
    a: 1,
    b: 2
}
// console.log([...myObjec1, ...myObjec2]);//3rd braket diya error karon aita o array na
console.log({
    ...myObjec1, ...myObjec2
});
//output:{x: 1, y: 2, a: 1, b: 2}




//rest operator
//rest operator & spread operator 2 ta dekte same but kothi baboher hosse she onujai difference

function myFunc(a, b){
    console.log(a, b);
}
myFunc(5, 6, 7, 8); //jodi amon hoi user jokhon call korbey unlimited parameter dite parey ami to jani na koita dibe So shei value gula k amra rest operator diya nite pari
//rest operator asher age aita kora hoto arguments object diya


function myFunc(){
    console.log(arguments);//aita function er ekta buldin property
}
myFunc(5, 6, 7, 8); 
//output: [Arguments] { '0': 5, '1': 6, '2': 7, '3': 8 } ekta object output dilo



//akhon final rest operator
//function er parameter a jokhon use korbo kothon sheta rest operator
function myFunc(...params){
    console.log(...params);
}
myFunc(5, 6, 7, 8, 9, 10); 
//output: 5 6 7 8 9 10 ja ja pathiyasi tai pelam




//rest operator
function myFunc(a, ...params){//a = 5 k alada pathlam //rest operator last parameter a thakte hobe
    console.log(a);
    console.log(...params);
}
myFunc(5, 6, 7, 8, 9, 10); 
//output: 5 
//output: 6 7 8 9 10 




// **destructring

//object destructring
const user = {
    id: 234,
    name: "Sakib",
    age: 34
};

//abject theke name take ber kore ene are ekta variable e assign korte chai jeno onno jaygay use korte pari

//old way
var name = user["name"];
console.log(name);//output: Sakib
//new way
const user = {
    id: 234,
    name: "Sakib",
    age: 34
};
const {name} = user;//user theke name k ber kore niya ashlam new way te
console.log(name);



//nested object er khatre
const user = {
    id: 234,
    name: "Sakib",
    age: 34,
    education: {
        degree: "Mashters"
    }
};

// const {} = user;
 const {education : {degree},} = user;//degree: x korle degree theke x name hoiya jabe
 console.log(degree);//output: Mashters   // console.log(x);


 //supose internet theke data ashtase So education dai abr dai na thale ki korbo? na dile error hobe code a
 const user = {
    id: 234,
    name: "Sakib",
    age: 34,
    // education: {
    //     degree: "Mashters"
    // }
};
//value na dile amra default value diya dibo
const {education : {degree} = {}} = user;//akhon eucation er ekta defaut value ase So akhon education na pele o ekta object pabe So shei object.degree pabe akhon
console.log(degree);//output: undefined So akhon undefine passi error pabo na atlist




//array destructring
var numbers = [1, 2, 3, 4, 5];
var [a, b] = numbers;
console.log(a, b);//output: 1 2

//supose ami 2 & 5 k destructring kore niya ashte chai
var [, a, , , b] = numbers;
console.log(a, b);////output: 2 5



//nasted array destructring
var numbers = [1, 2, [3, 100, 500], 4, 5];
var [, , [, a, b]] = numbers;
console.log(a, b);//output: 100 500





//swap korbo value destructring way te easly
var a = 1;
var b = 2;
//old way
var temp = a;
a = b;
b = temp;
console.log(a, b);//output: 2 1


// new way
// [] = [];//anonimous array
// [] = [a, b];
[b, a] = [a, b];
console.log(a, b);//output: 2 1




// //import or export
// // package.json file write...
// {
//     "type" : "module";//module k on kore nilam normal Js file er jonno
// }







//template literals
var a = 2;
var b = 4;
console.log(`${ a + b}`);//jug bagh o korte parsi or single expression korte parsi
console.log(` I am 
                       Mila`);//kaj korbe





//tagged template literals
//aita simply ekta function

function modifier(string, ...values){//aita 2 ta parameter pai string, values
//ki pai era dakhi?
console.log(string);//Output:[" We have ", " and ", " in our team", raw: Array(3)]
console.log(values); //Output: ["sakib", " Tamim"]

const m = string.reduce((prev, current) => {//amr finaly 1 ta value lagbe tai reduce use korsi
return prev + current + (values.length? "Mr." + values.shift() : ""); //shift prothom sakib k niya ashbey then tamim
}, "");//initiall value null dore nilam prothome
return m;

}
var player1 = "sakib";
var player2 = " Tamim";
console.log(modifier` We have ${player1} and ${player2} in our team`);//modifier pottek ta inter polation er modda call hobe
//output: We have Mr.sakib and Mr. Tamim in our team

//So ai ta kano korte parlam template literals er karone







//set & WeakSet
//set & WeakSet data strucure
//js a data structure ache arra, object set, map, weakset, weakMap
//Data type 2 dhoroner premetive & reference
//set reference data type
//***set
function log(anything){//log jano bar bar define na korte hoi ai jonno ekta log function tuiri koresi
return console.log(anything);
}
//sets
// let myArray = []; //literal syntax
// let myArray = new Array();//contex syntex
//array k ai 2 vabe kora jai

//set k literal syntax a use korte parbo na take contex syntex a use korte hoi
let mySet = new Set();
log(mySet);




// Set method

//array te data dukai
let myArray = new Array();
myArray[0] = 5;
myArray[1] = 8;


//but Set y data dukate hoi set er method use kore
//Set er prototype e onek gula method ase

mySet.add(5);
mySet.add('Bangla');
mySet.delete('Bangla');//delete bangla
log(mySet.has('Bangla'));//has boolean eta return kore true, false  //age delete korsi tai false answer
log(mySet);
//string, number ja koto data dukate pari



//add, delete korsi ai method gulo call korsi era abr set kei return kore dai jar karone amra set chain korte parbo
//We can to method chaining with set method
mySet.add(5).add(6).add('Bangla');
log(mySet);



//set from array
//kono ekta array theke set banano hai
let myArray = [1, 2, 3]//ai array k set a convert korbo
let mySet = new Set(myArray);//array k set banalam
//set er modda je kono iterabole pass kora jai
//string iterable
//set er modda iterator ase so set k iterate kora jabe

let mySet = new Set('Bangladesh');
for(let value of mySet){
    log(value);
}
//output: B a n g l a d e s h




//set , array dakte same hole  o tara ek na ek hole js amder k ai 2 ta k alada alada data Structure a deto na 
//set a add delete & array te reduce, filter ai gulu thake
// set er order nai but array er order ache
//set k array banabo or array from set

let myArray = [1, 2, 3];
let mySet = new Set(myArray);
console.log(mySet);//output:Set(3) {1, 2, 3}
log([...mySet]);

log(Array.from(mySet));
//output:[1, 2, 3]
//set k 2 vabe array te convert kora jai spread operato & Array.from use kore




//set uses .... set diya 
//math korer shomoi amra 2 ta set er uninon, intersection, difference kortam amra ai dhoroner kaj er jonno set ashse
//set onnano programming language a o ase tai js a o ana hoiyse ai operator gula korer jonno
//akhon dekbo kon kon jai gai set use hosse
//set er common baboher hosse unique element niya asha
//set a shob element new thake
let myArray = [1, 2, 3];
let mySet = new Set(myArray);
mySet.add(3);
log(mySet);
//output:Set(3) {1, 2, 3} notun kore r 3 add hoinai

let myArray = 'Bangladesh';
let mySet = new Set(myArray);
mySet.add('l');
log(mySet);
//output: l add hobe na & a o bad hoiya gase





//object er khatre prothom a e object nite parbo na coz object iterable na
let myArray = [1, 2, 3];
let mySet = new Set(myArray);
mySet.add({
    a: 5,
    b: 2
});
mySet.add({
    a: 5,
    b: 2
});
log(mySet);

//output:
// 0: 1
// 1: 2
// 2: 3
// 3: Object
// 4: Object

// 2 ta to ak e object to 2 ta e kano show korse tai na?
//karon object to reference type so ai 2 ta ek na. dekte ek e but ader reference alada ta show korbe





//amra jodi ekta variable er modda nai taile abr ekta e object show korbe
let myArray = [1, 2];
let mySet = new Set(myArray);
let object = mySet.add({
    a: 5,
    b: 2
});
mySet.add(object);
mySet.add(object);
mySet.add(object);
log(mySet);

//output:
// 0: 1
// 1: 2
// 2: Object
// 3: Set(4)





//ekta array ase with duplicate value but amr unique value dorkar aita theke so dekhi ki vabe kora jai
let myArray = [1, 2, 3, 4, 5, 5, 6, 5];
log(new Set(myArray));//output: Set(6) { 1, 2, 3, 4, 5, 6 }  //set a convert korlam array k
//akhon set take abr array te convet korbo
log([...new Set(myArray)]);//set k array te convert korlam


//So ki korbe array k set  then set k abr array te convert korle e onek shohoje ami unique value gulu peya jassi
//*** Set is used to get unique elements from array



//set er buildin union intersection ai gula nai but amra manually korte pari akhon next undate js hoito build in ai gulo niya ashbey
//akhon 2 ta sep er union korbo
let a = new Set([1, 2, 3, 3]);
let b = new Set([4, 5, 6, 6]);
let union = new Set([...a, ...b]);//aita 2 ta array er union
log(union);
//output:Set(6) { 1, 2, 3, 4, 5, 6 }


//intersection
let a = new Set([1, 2, 3, 3]);
let b = new Set([2, 3, 4, 6]);
let intersection = new Set([...a].filter(x => b.has(x)));//1st a set array te convert holo then b set er jegula true has kore amra nilam finally pura ta abr set holo
log(intersection);
//output:Set(2) { 2, 3 }




//set er difference
let a = new Set([1, 2, 3, 3]);
let b = new Set([2, 3, 4, 6]);
let difference = new Set([...a].filter(x => !b.has(x)));
log(difference);
//output: Set(1) { 1 }




//set ekta iterable er modda iterable e dite hoi
//set k new diya toiri korte hoi
//set er kisu prototype method ase add, delete, has etc
//set & array ek jinish noi
//set er uppor kono operasion chalanor jonno set k array te convert kore nei tarpor array er uppor operation chaliya array k set a convert kore dei
//set shob shomoi unique value store kore rakhe






//Weak set
//dekhi weak set er bitor ki ase
const ws = new WeakSet();
log(ws);

//Weak set a shudu matro object add korte hobe onno nisu dile e error dibe
const ws = new WeakSet([{a: 1}, {b: 2}]);
log(ws);



const ws = new WeakSet([{a: 1}, {b: 2}]);
for(let value of ws);
//weak set moddo niya amra iterate korte pari na
// output: ws is not iterable




//weak set er baboher
//weak set ueses
//......tamon kono use nai




//jodi kono concept niya na pari tahole implementation or useses deya search diya amra implementation or useses dekha nite pari 









//js Array method
//copyWithin()
//copyWithin() aita prototype er modda ase aita 3 ta para meter recive kore target, start, end ai gula array er index
//negative position o hote pare, array er length boro hobe na kata porbey

//Example
let a = ['javascript', 'PHP', 'Python', 'Ruby', 'C++', 'Rust'];
a.copyWithin(3, 2);//target= 3, start = 2
//byDefault start =0, end = array length
console.log(a);
//output: (6) ["javascript", "PHP", "Python", "Python", "Ruby", "C++"]
a.copyWithin(-3, -2, -1);
console.log(a);
//output:(6) ["javascript", "PHP", "Python", "Ruby", "Ruby", "C++"]








// ES11  ES 2020
// JS je khane e thakuk ekta global object run kore browser er khatre sheta window object
window.setTimeout(() => console.log('hello'), 100);
//ai function ta window object er shate attached hoiya ase
global.setTimeout(() => console.log('hello'), 100);//node js er khatre global



//amon ekta code likbo jeta server & browser 2 khatre e kaj korbey....tahole ki vabe likbo?
//ES11 er age je vabe korte hoto dakhi..aita standardized na
var setGlobal = function(){
    if(typeof window !== 'undefine'){ return window; }   
    if(typeof global !== 'undefine'){ return global; } 
    throw new Error('unable to local global object');  
}
var myGlobal = setGlobal();
myGlobal.setTimeout(() => console.log('hello'), 100);
//manually check kore global object konta buje sheter maddone property call korte hoto.

// but ES11 theke ai kaj ta shohoj hoiya gase
globalThis.setTimeout(() => console.log('hello'), 100);

window == globalThis //broser er jonno window k point korse
global == globalThis //node js er jonno global k point korse




//js e ekta integer maximum koto boro hote pare she ta amra ai vabe jante pari
let largest_number = Number.MAX_SAFE_INTEGER;//MAX_SAFE_INTEGER ai property ta use kore jante pari
largest_number += 1;
largest_number += 1;
console.log(largest_number);
//output:9007199254740992 er bashi boro interger js store korte pare na. atai maximum limit



//ai ES11 a notun ekta type ashese bigInt
let largest_number = Number.MAX_SAFE_INTEGER;
largest_number += 1;
largest_number += BigInt(largest_number) + 1;//largest_number take BigInt function er maddone gibInt banalam & er shate 1 jug korlam 
//ai khane 1 jadutu interger tai ake o bigInt a porinoto kore nite hobe So 1 er shate n diya dile e js bigInt dhore nibe
largest_number += BigInt(largest_number) + 1n; 
console.log(largest_number);

//10n === 10 //false 2 ta binno data type
//10n ==10; // true
//10n ===BigInt(10); // true




const language = {
    name: 'JavaScript',
    creator: 'Eich',
    library: {
        react: {
            company: 'Facebook'
        }
    }
};
//ai object er company property ta excess korte chai. Kori thahole..
let compay = language.library.react.company;
console.log(compay);

//But aita rigth way na karon ai property ta jodi kono API theke ashe shob property ashbe ki na amra sure na thaki. thahole to error chole ashbe
//So property ta ase ki na check korte hobe pottek level e.
//Amra ki vabe korte pari dakhi..
let company = language && language.library && language.library.react && language.library.react.company? language.library.react.company : undefined;
console.log(compay);

//ai vabe kora ta khub e jotil aro nested object hole to kharap oboshta hobe So ai jonno Optional chaining



//ES11 Optional chaining
let company = language?.library?.react?.company;//kono property na thakle undefine dibe error dibe na
console.log(compay);

//Aita array er khatre o kaj kore
let colors = ['read', 'green'];
//kono property na thakle amra error pai but akhon er pabo na
console.log(colors?.[1]);//index dhore array element excess



//Nullish Coalescing operator  =null, undefine ai nullish 2 ta jinish k ak korse  //nullish mane null er moto jinish k ak korse
//Coalescing mane akotrito kora or miloto kora
let language;
// language = null;
console.log(language ?? 'JavaScript');//language er value nai undefine //left side undefine or null hole right side return kore
//output: JavaScript
console.log(language || 'JavaScript');//left side undefine or null hole right side return kore
//output: JavaScript

// ?? = Nullish, or= || 

let language;
language = NaN;
console.log(language ?? 'JavaScript');
//output: NaN
console.log(language || 'JavaScript');
//output: JavaScript



let language;
language = false;
console.log(language ?? 'JavaScript');
//output: false
console.log(language || 'JavaScript');
//output: JavaScript




//ai take jodi chaning kori
//supose name ekta object ase and ter property ase akhon..
console.log(name.firstName || name.lastName ?? 'Anonymous');//error karon or & nullish Coalecing mix koraci

//Er solution holo braket use korte hobe
console.log((name.firstName || name.lastName) ?? 'Anonymous');
//output: Anonymous






//**Dynamic Import
//Dynamic Import er maddome dynamically js file module akare import korte pari, Normally ai ta korte web pack or babel er help nite hoi


// utils.js file code
export function add(){
    console.log('adding');
};

export function remove(){
    console.log('removing');
};



//script.js file
//utils.js file import korbo ai file a async way te
const {add} = await import('./utils.js');
const {remove} = await import('./utils.js');
add();
remove();

//import function ta ekta promise return kore so amra await diya resolve korlam resolve hoiya gele {add},{remove} er modda paya jabo & awaint use korly asynce dorkar hoi so amra ekta Anonymous invoke function or iife use korte pari


(async function(){
const {add} = await import('./utils.js');
const {remove} = await import('./utils.js');
add();
remove();

})();




Promise.allSettled()
// .....example upore



String.prototype.matchAll()
// match name string a ekta method ase jeta regExp er shate string k match kore
// matchAll() ar ektu detail output dai 







