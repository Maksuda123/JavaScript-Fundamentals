// // //1. Remove falsy values from array
// // //ja a 6 ta falsy value ai gulo k chara amra onno value gulo bar kore anbo
// // // passing Boolean to array.filter() will remove falsy values from array
// // let miscellaneous = ['🍎', false, '🍊', NaN, 0, undefined, '🌶️', null, '', '🥭'];
// // let fruits = miscellaneous.filter(Boolean);//Boolean function reference pass koraci call kori ni.
// // console.log(fruits);
// // //output: ["🍎", "🍊", "🌶️", "🥭"]


// // // Boolean(expression) in JS returns true/false
// // Boolean(5 < 6);//true
// // Boolean( 100 > 200);//false
// // Boolean('JavaScript');//true
// // Boolean(' ');//false




// // //array example
// // let miscellaneous = ['🍎', false, '🍊', NaN];
// // let fruits = miscellaneous.filter(function(element) {});//function liklam call kori ni kintu.







// //2. Convert any value to boolean
// //je kono value k boolean a convert korbo
// //So je kono value k boolean a convert korte hole tar age double not boshiya dile e hoiya jabey
// // Using !! in front of any value
// console.log(!!"mashrafi");//true
// console.log(!!1);//true
// console.log(!!0);//false
// console.log(!!undefined);//false


// // We can also use Boolean() to achieve same
// console.log(Boolean("mashrafi"));//true




// // 3. Resizing any array
// let animals = ["🐕", "🐒", "🦊", "🐅"];



// // We can use array's length property
// animals.length = 3;//Amra koto tuko length chai length a bole dile e hobey

// console.log(animals); // ["🐕", "🐒", "🦊"]











// //4. How to flattern a multi-dimensional array
// let smileys = ['🥰', ['😄', '😃'], '😉', ['🥲', '😑']];

// //ai multi-dimensional array k single kore felbo mane alada alada kore felbo
// //flat use kore amra aita korte pari aita shudu one level array k flat korte pare
// console.log(smileys.flat());
// //output: ["🥰", "😄", "😃", "😉", "🥲", "😑"]



// //je kono level porjonto flat korte chaile flat Infinity baboher korbo.
// console.log(smileys.flat(Infinity));
// //output:["🥰", "😄", "😃", "😉", "🥲", "😑"]





// //5. Short conditionals.... & (&& ||)
// const captain = "Mashrafi";


// //1
// //simple if use kore aita korbo amra
// if(captain === "Mashrafi"){
//     console.log("❤️");
// }
// //output: ❤️







// //2
// //1. k amra 1 line korte pari && use kore
// //short conditional and holo: &&
// captain === "Mashrafi" && console.log("❤️");
// //output: ❤️


// //3
// //2. er ulta korbo... not diya ekta value output shishabe dekhabo
// if(captain !== "Mashrafi"){
//     console.log("😡");
// }



// //4
// //3 k ai vabe o likte pari
// // || use kory
// captain === "Mashrafi" || console.log("😡")// true hole:Mashrafi  or false hole: 😡








// //6. Replace all occurances of a string
// //ekta boro string k boro string er maddo replace kore dibo
// const quote = "React is a JS framework & this framework is the most popular front-end framework right now";



// //joto jaigai framework kotha ta ase amra oitake library diya replace kore dibo
// // Replace all occurances of 'framework' with 'library'
// //aita amra String.replace use kore korte pari
// console.log(quote.replace(/framework/g, "library"));//1st parameter bolbo ki replace korbo or ki replace korbo, Akhon sheta boro hater & choto hater hote pare so amra RegExp use korbo, joto gula framework ase shob replace korbo so g use korbo mane global   //2nd parameter ki diya replace korte chassi
// //output: // React is a JS library & this library is the most popular front-end library right now






// //7. Log values with variable names smartly
// const library1 = "jQuery";
// const library2 = "React";

// // //jeta korte pari
// // console.log(`library1 - ${library1}`);// library1 - jQuery
// // console.log(`library2 - ${library2}`);// library2 - React



// //mainly je babe korte pari (aita smart way)
// console.log({library1});//output:{library1: "jQuery"}
// console.log({library1/*property*/});//{library1: "jQuery"}
// // console.log({library1 : library1}); //property: value aita k e choto kore likha hoise ai vabe likher dorkar nai
// //object patern use koresi object diya diyasi
// //property shohokare value chai
// console.log({library2});// {library2: 'React'}
// //object patern use korlam









// //8. Amra jodi kono ekta task er performance jante chai
// // Know performance of a task
// // We can wrap our task with performance.now()


// //for loop ta hote koto khon laglo dekbo performance.now() use kore wrap kore dibo
// const startTime = performance.now();

// for(let i = 0; i <= 50; i++) {
//     console.log(i);
// }

// const endTime = performance.now();

// console.log(`loop took ${endTime - startTime} milliseconds to finish`);





