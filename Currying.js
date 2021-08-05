//curring ekta programming paradim/patarn aita kono concept na just ekta patarn.

//simple function
function multyply(a, b, c) {
    return a * b * c;

}
console.log(multyply(5, 6, 7));


//ekta function a jodi multipe parameter thake she gulu k bangy ekta ekta kora jai tokhon she tai hossa curring.

// What is curring?
// converting a function which has multiple parameter & convert it single parameter function.


//curring function
function curringMultiply(a){
    return function(b){
        return function(c){
            return a * b * c;

        };
    };
}
// console.log(curringMultiply(5, 6, 7));//ai vabe call na kore pottek ta step k alada alada kore fali


let step1 = curringMultiply(5);
let step2 = step1(6);
let step3 = step1(7);//ai process ai khane a function pottek bar return kore bariya ashse
console.log(step3);//closer er jonno ai pottek step a value mone rakhese
console.dir(step1);



//ekta online shop ache ami ekhon 10% discount dibo er jonno ekta function banabo
//Simple function
function discount(price, disc) {
    return price - price * disc;
}

let customer1Discount = discount(600, .1)//10% discount dibo .1
let customer2Discount = discount(700, .1);
let customer3Discount = discount(800, .1);//ai khane ekta problem ase .1 bar bar repet korsi bole dicci .1 discount koro So ai repect amra korbo na



//curring function
function discount(disc) {
    return (price) => {
        return price - price * disc;
    }
}

let tenPercentDiscount = discount(0.1);
let customer1D = tenPercentDiscount(600);
let customer2D = tenPercentDiscount(100);
let customer3D = tenPercentDiscount(500);
console.log(customer1D);//output: 540
console.log(customer2D);//output: 90


//20% discount dibo

let tenPercentDiscount = discount(0.1);
let twentyPercentDiscount = discount(0.2);
let customer1D = tenPercentDiscount(600);
let customer2D = tenPercentDiscount(100);
let customer3D = tenPercentDiscount(500);
let customer4D = twentyPercentDiscount(100);
console.log(customer1D);//output: 540
console.log(customer2D);//output: 90




//Curring patarn er shate r ekta concept choley ashe sheta holo partial function
let tenPercentDiscount = discount(0.1);// aita partial function 
//partial function holo jake poro botity abr reuse korbo




//ekta curry convator function banabo

//simpe function ja curry function a use korbo
function sum(a, b, c){
    return a + b + c;
}

let curriedSum = curry(sum);//curry function
console.log(curriedSum(1, 2, 3)); 
console.log(curriedSum(1) (2, 3)); 
console.log(curriedSum(1) (2) (3)); //step kore pass korlam curry follo kore






//ekta curry convator function banabo
function curry(func){//ai function ta carry function er kase pathabo
 return function curried(...args){//variable number of args receive korbe ...args // ...args er modda (1, 2, 3) ai 3 ta agrs chole ashle ami ekta args array pabo
 if( args.length >= func.length){//arg .length = (curriedSum(1, 2, 3), func.length = sum(a, b, c)
 return func.apply(this, args);//ai func call korsi ai khane so args or ...args ai vabe pathate parbo na karon tahole sum er kase ekta array choly jabey
 //apply a 1st argument pathate hoi amr context ta ki mane kake diya function ta call korabo //this diya bojaci curent contex //apply normally function k call e kore but args gulo k variable akare pathasi so sum er variavle gula k koma seperate akare pabey
 }else{//akhon steping korbo ((1) (2) (3)) ai vabe pathanor jonno
 return function(...args2){//multiple steping //...args2 aita mane ami curried sum er modda koita pathasi
 return curried.apply(this, args.concat(args2));
   };
  }
 };
}
//simpe function ja curry function a use korbo
function sum(a, b, c){
    return a + b + c;
}

let curriedSum = curry(sum);//curry function
console.log(curriedSum(1, 2, 3));
console.log(curriedSum(1)(2, 3));
console.log(curriedSum(1)(2)(3)); //step kore pass korlam curry follow kore
//Output: 6 6 6







//lodash er ekta function ache _.curry so amra seta use korte pari amder ai vabe curry function na banale o cholbe
//html file a lodash er link ta anbo
//same output ashby
function sum(a, b, c){
    return a + b + c;
}

let curriedSum =  _.curry(sum);
console.log(curriedSum(1, 2, 3));
console.log(curriedSum(1)(2, 3));
console.log(curriedSum(1)(2)(3)); 
//Output: 6 6 6





//Last example
function log(date, importance, message){
    console.log(`${date.getHours()} : ${getMinutes()} : ${date.getSeconds} : ${importance} : ${message}`);

}

//lodash include korbo mane link add korbo
let curriedLog = _.curry(log);

curriedLog(new Date(), "DEBUG", "some debug");
curriedLog(new Date())("DEBUG")("some Debug");//ai 2 ta e same answer dibe

let logNow = curriedLog(new Date());
logNow(INFO, "info message");//bar bar Date dite hosse na






//ager example ta arraw function
const multyply = (a) => (b) => (c) => a * b *c;

console.log(multyply(5)(6)(7));