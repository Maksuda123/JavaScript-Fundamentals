//JAvaScript Closures
//What is closer? closer is a function with some remember values ...value refer kore parent scope theke

//1. Basic Example
var num1 = 2;
var num2 = 3;
var sum = function () {
  //ai function nije closure karon bairer variable k excess korse
  return num1 + num2;
};
console.dir(sum);



//2. Example with Function er modda function
var num1 = 2;
var num2 = 3;
var sum = function () {
  return function () {
    //function er modda function
    return num1 + num2; //ai function er parent scope sum function
  };
};
var myFunc = sum();
console.dir(myFunc);




//3. Example with closer
var num1 = 2;
var sum = function () {
  var num2 = 3; //closure
  return function () {
    return num1 + num2;
  };
};
var myFunc = sum();
console.dir(myFunc);




//4. private property secure kora
function bankAccount(initialBalance) {
  var balance = initialBalance;
  return function () {
    return balance; //private property
  };
}
var account = bankAccount(1000000);
console.dir(account); //balance private property take baire theke excess korsi
// console.log(balance);  //not working karon private property
// console.log(account());      //baire theke aita dekte parbo na //console.log(balance)not working  //balance conlose log kore dekte parbo na karon aita oi function er private property




//5. Example
//eta enclosing scope a nai ai jonno closure dekhi na consol a
//ai pura code tuko e global tai closer nai
var num1 = 2; //num1 kono enclosing a nai  //enlosing mane braket
var sum = function () {
  var num2 = 3; //num2 local variable er jonno closer er dorkar nai, closer dorkar baire tar jonno
  return num1 + num2;
};
console.dir(sum);





//6. Exapmle
// encloser scope
//akhon closer ase console karon enclosing schope e asi
(function () {
  //anonymous function nije theke nijak e call kori dilam
  var num1 = 2;

  var sum = function () {
    var num2 = 3;
    return num1 + num2;
  };
  console.dir(sum);
})();





//7 Example
//closer er modda exject value rakse na she(closer) ashole value gulor referance rakse
//niche value change korer por o dorte parese
(function () {
  var num1 = 2;
  var num2 = 3;

  var sum = function () {
    return num1 + num2;
  };
  console.log(sum());
  console.dir(sum);

  num1 = 6;
  num2 = 7;
  console.log(sum());
  console.dir(sum);
})();






//8. Example
//let const block scope
// var function scope

//script introduce in console

let num1 = 2; //let k amra global er modda pabo na she thake script name er ekta jinish er modda console.dir korte dekte pabo
let num2 = 3; //let block scope //var aita ai khane vinno rokom

var sum = function () {
  return num1 + num2;
};

console.dir(sum);






//9. Example
//ebar self enclosing function
(function () {
  //akhon abr closer pabo
  let num1 = 2;
  let num2 = 3;

  var sum = function () {
    //ai inner function bairer num1, num2 ke beboher korse
    return num1 + num2;
  };

  console.dir(sum);
})();






//10. closer example
//js ki vabe kaj korse sheta hosse closer
function stopWatch() {
  var startTime = Date.now();

  function getDelay() {
    //ai function dependent startTime er uppor
    //start time parent scope a ase
    console.log(Date.now() - startTime);
  }
  return getDelay;
}

var timer = stopWatch(); //ai khana to function call hoilo tahole niche run kore output ki vabe ashlo?
//Ans startTime er referance ta closer er madomme dore rakhase tai ato pore o run korte parlo
for (var i = 0; i < 10000000; i++) {
  var a = Math.random() * 10000000;
}
//js tar shomosto variable, referance closer shob kisu ke track/mone rakte pare and tar moto kore smartly sheguloke use korte pare
timer(); //timer() ki vabe run korse onek dilay er por timer k call kora hoise?
//closer er modda startTime k dhore rakse tai run korte parse

console.dir(timer);
console.log(); //pabo na
timer = null; // performance optimized// jokhon timer er lagbe na null kore dibo taile timer er kaj korbe na
//null na korle referance dhore rakbe jaiga bashi lagbe
//akhon porjonto ja dekha hoise shob syncronuous way te closer er baboher






//10.  uporer code tuko abr comment chara// 9 no example

function stopWatch() {
  var starTime = Date.now();
  function getDelay() {
    console.log(Date.now() - starTime);
  }
  return getDelay;
}

var timer = stopWatch();
for (var i = 0; i < 100000; i++) {
  var a = Math.random() * 10000000;
}

timer();
console.dir(timer);
timer = null;












// 1. Async way te closer

function async() {
  var a = 20;
  //js er biltin function setTimeout
  //setTimeout function 2 ta paramiter nei 1. function & 2. milisecond
  setTimeout(() => {
    console.log(a); // bairer a ke excess korte parse closer er karone
  }, 3000);
}

async();





//2
function async() {
  //a closer re dakhabe
  var a = 20;

  var myFunc = () => {
    console.log(a);
  };
  setTimeout(myFunc, 3000);
  console.dir(myFunc);
}
async();




//3. a closer ke dekhabe na karon a global a ase
var a; //a globale ase
function async() {
  a = 20;

  var myFunc = () => {
    console.log(a);
  };
  setTimeout(myFunc, 3000);
  console.dir(myFunc);
}
async();





//4. last ye a er value change kore disi
var a; //a globale ase
function async() {
  a = 20;

  var myFunc = () => {
    console.log(a);
  };
  setTimeout(myFunc, 3000);
  console.dir(myFunc);
}
async(); //async function ke call koresi settimeout function chalu hoiya jasse callbak shishabe myFunc print korer kotha (console.a= 20)print korer kotha but 30 print holo karon a global variable tai ake baire thake change kore dile o oi timing period er modda e closer track rakse or reference rakse

a = 30;







//5.buildin function with fake API
function apiFunction(url) {
  fetch(url) //fetch promise return kore
    .then((res) => {
      //then use kore promise er output nite hoi
      console.log(res); //then function pore ashe thao she mone rakse
    });
}

apiFunction("https://jsonplaceholder.typicode.com/todos/1"); //URL Website link:  https://jsonplaceholder.typicode.com/





//6.closer jokhon loop er modda kaj kore problem dekha dei
// let use kore output 0,1,2
for (let i = 0; i < 3; i++) {
  const f = () => {
    console.log(i);
  };
  f();
}






//7. var use kore output 0,1,2! closer nai ai khane
//var block scope er baire o kaj kore
//var i; for(i = 0; i<3; i++) or for(var i = 0; i<3; i++) same

for (var i = 0; i < 3; i++) {
  //ekhane closer er dorkar hosse na
  const f = () => {
    console.log(i);
  };
  f();
}






//8. uporer(7) function take jodi setTimeout function diya rap kore dei
for (let i = 0; i < 3; i++) {
  //for sync //let er karone for loop er i shudu ai setTimeout function er bitor e kaj korbe
  setTimeout(() => {
    //setTimeout async //closer kaj korse i er value mone rakse
    console.log(i);
  }, 3000);
}
console.log("After for loop"); //ai line age print hobe





//9.uporer function ke var user korle ja hoi output e binno karon var global scope

for (var i = 0; i < 3; i++) {
  //for sync //var function scope
  setTimeout(() => {
    //setTimeout async // ai function execute kore suro kore for loop sesh hower por karon var ase

    console.log(i);
  }, 3000);
}
console.log(i);





//10. ***var use kore output 3 karon colser nai global scope
for (var i = 0; i < 3; i++) {
  //var tai global scope a closer er proijon hosse na //global scope er main i tai bar bar update hosse
  const myFunc = () => {
    console.log(i);
  };
  console.log(i);
  console.dir(myFunc);
  setTimeout(myFunc, 3000);
}
console.log(`after for loop`);
console.log(i);






// 11. let diya kothi ki hosse shob kisu dakbo lets start
//***let block scope tai er output 0,1,2
for (let i = 0; i < 3; i++) {
  const myFunc = () => {
    console.log(i);
  };
  console.log(i);
  console.dir(myFunc);
  setTimeout(myFunc, 3000);
}
console.log(`after for loop`);
console.log(i);
