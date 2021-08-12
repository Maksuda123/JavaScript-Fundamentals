//1. Remove falsy values from array
//ja a 6 ta falsy value ai gulo k chara amra onno value gulo bar kore anbo
// passing Boolean to array.filter() will remove falsy values from array
let miscellaneous = ['🍎', false, '🍊', NaN, 0, undefined, '🌶️', null, '', '🥭'];
let fruits = miscellaneous.filter(Boolean);//Boolean function reference pass koraci call kori ni.
console.log(fruits);
//output: ["🍎", "🍊", "🌶️", "🥭"]


// Boolean(expression) in JS returns true/false
Boolean(5 < 6);//true
Boolean( 100 > 200);//false
Boolean('JavaScript');//true
Boolean(' ');//false




//array example
let miscellaneous = ['🍎', false, '🍊', NaN];
let fruits = miscellaneous.filter(function(element) {});//function liklam call kori ni kintu.







//2. Convert any value to boolean
//je kono value k boolean a convert korbo
//So je kono value k boolean a convert korte hole tar age double not boshiya dile e hoiya jabey
// Using !! in front of any value
console.log(!!"mashrafi");//true
console.log(!!1);//true
console.log(!!0);//false
console.log(!!undefined);//false


// We can also use Boolean() to achieve same
console.log(Boolean("mashrafi"));//true




// 3. Resizing any array
let animals = ["🐕", "🐒", "🦊", "🐅"];



// We can use array's length property
animals.length = 3;//Amra koto tuko length chai length a bole dile e hobey

console.log(animals); // ["🐕", "🐒", "🦊"]











//4. How to flattern a multi-dimensional array
let smileys = ['🥰', ['😄', '😃'], '😉', ['🥲', '😑']];

//ai multi-dimensional array k single kore felbo mane alada alada kore felbo
//flat use kore amra aita korte pari aita shudu one level array k flat korte pare
console.log(smileys.flat());
//output: ["🥰", "😄", "😃", "😉", "🥲", "😑"]



//je kono level porjonto flat korte chaile flat Infinity baboher korbo.
console.log(smileys.flat(Infinity));
//output:["🥰", "😄", "😃", "😉", "🥲", "😑"]





//5. Short conditionals.... & (&& ||)
const captain = "Mashrafi";


//1
//simple if use kore aita korbo amra
if(captain === "Mashrafi"){
    console.log("❤️");
}
//output: ❤️







//2
//1. k amra 1 line korte pari && use kore
//short conditional and holo: &&
captain === "Mashrafi" && console.log("❤️");
//output: ❤️


//3
//2. er ulta korbo... not diya ekta value output shishabe dekhabo
if(captain !== "Mashrafi"){
    console.log("😡");
}



//4
//3 k ai vabe o likte pari
// || use kory
captain === "Mashrafi" || console.log("😡")// true hole:Mashrafi  or false hole: 😡








//6. Replace all occurances of a string
//ekta boro string k boro string er maddo replace kore dibo
const quote = "React is a JS framework & this framework is the most popular front-end framework right now";



//joto jaigai framework kotha ta ase amra oitake library diya replace kore dibo
// Replace all occurances of 'framework' with 'library'
//aita amra String.replace use kore korte pari
console.log(quote.replace(/framework/g, "library"));//1st parameter bolbo ki replace korbo or ki replace korbo, Akhon sheta boro hater & choto hater hote pare so amra RegExp use korbo, joto gula framework ase shob replace korbo so g use korbo mane global   //2nd parameter ki diya replace korte chassi
//output: // React is a JS library & this library is the most popular front-end library right now






//7. Log values with variable names smartly
const library1 = "jQuery";
const library2 = "React";

// //jeta korte pari
// console.log(`library1 - ${library1}`);// library1 - jQuery
// console.log(`library2 - ${library2}`);// library2 - React



//mainly je babe korte pari (aita smart way)
console.log({library1});//output:{library1: "jQuery"}
console.log({library1/*property*/});//{library1: "jQuery"}
// console.log({library1 : library1}); //property: value aita k e choto kore likha hoise ai vabe likher dorkar nai
//object patern use koresi object diya diyasi
//property shohokare value chai
console.log({library2});// {library2: 'React'}
//object patern use korlam









//8. Amra jodi kono ekta task er performance jante chai
// Know performance of a task
// We can wrap our task with performance.now()


//for loop ta hote koto khon laglo dekbo performance.now() use kore wrap kore dibo
const startTime = performance.now();

for(let i = 0; i <= 50; i++) {
    console.log(i);
}

const endTime = performance.now();

console.log(`loop took ${endTime - startTime} milliseconds to finish`);










//1. one line a swaping kore dekhaw..
//array descructuring 
let array = [1, 2, 3, 4, 5];
[array[0], array[4]] = [array[4], array[0]];
console.log(array);
//output: [5, 2, 3, 4, 1]

//in math
let a = 1;
let b = 2;
b = a + (a = b) - b;
console.log(a, b);
//output: 2 1



// 2. copy to clipboard


// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>JavaScript Tips & Tricks</title>
//   </head>
//   <body>
//     <h1>২ হালি JavaScript Tips</h1>
//     <p id="text">learnwithsumit.com</p>
//     <p><button id="copy" onclick="handleClick()">Copy</button></p> 
//     <input id="number" type="number" value="123" /> 
//     <script src="./main.js"></script>
//   </body>
// </html>


//Example 2
//2
function copyToClipBoard(str) {
    const element = document.createElement("textarea");
    element.value = str;
    document.body.appendChild(element);
    element.select();
    document.execCommand("copy");//execCommand er bitor vibino command er name dewa jai
    document.body.removeChild(element);//user jeno na dekhe element remove kore dilam
  }
  //1
  function handleClick() {
    let text = document.querySelector("#text");
    copyToClipBoard(text.innerText);
  }
  //output: learnwithsumit.com    Copy button a click korle aita jabo outpu










  
// 3. destructuring aliases

const language = {
    name: "JavaScript",
    founded: 1995,
    founder: "Brendan Eich",
  };
  
  const { name, founder} = language;
  
  console.log(name, founder);

  //Amon jodi hoi amr onek bor ekta application she khane name ek e name variable thakte pare & founder name o. So Akhon ami onno name aita k ber korbo. Ki babe ber korbo? dekhi....
  //short cart ekta way ase
  //Clone mane(:) = aliase/ dak name


  const language = {
    name: "JavaScript",
    founded: 1995,
    founder: "Brendan Eich",
  };
  
  const { name:language, founder: creator} = language;//name er language name dilam
  
  console.log(languageName, createrName);







// 4. get value as data type
//<input id="number" type="number" value="123" /> 
const element = document.querySelector("#number").valueAsNumber;//querySelector thake amra je value ta pabo sheta always text hishebe pai
//value k ami jodi number hishabe pete chai ekta shohoj opai ache .valueAsNumber diya dibo
console.log(typeof element);//sure hote chile typeof diya check kore nite pari





// 5. remove duplicates from array
const array = [1, 2, 2, 2, 3, 5, 6, 5];

console.log([...new Set(array)]); //set crate korte hole new keywork diya korte hoi then array spreade kore dilam akhon ekta notun array pelam




// 6. compare two arrays by value
//array reference type
//2 ta array kokhono same hoina So amra dekbo element gula same ki na
const hasSameElements = (a, b) => {
  return a.length === b.length && a.every((v, i) => v === b[i]);//every hosse array er ekta method
};

console.log(hasSameElements([1, 2], [1, 2]));



//pottek ta element er jonno function call hoi ai Example gula te



// 7. shuffling array
//array ulta palta korte thakbo
const numbers = [1, 2, 3, 4, 5, 6];

console.log(numbers.sort(() => Math.random() - 0.5));//.5 minus kore delam jeno kokhono positivr kokhono negative value dai. half + & half - k  diya dilam
//array .sort 2 ta 2 ta kore pair akare nei







// 8. comma operator

let x = 1;
x = (x++, x);

console.log(x);
//output: 2

let y = (2, 3);
console.log(y);
//output: 3

let a = [[1, 2, 3, 4], [3, 4, 5], [5, 6], [7]];

for (let i = 0, j = 3; i <= 3; i++, j--) {
  console.log("a[" + i + "][" + j + "] = " + a[i][j]);
}