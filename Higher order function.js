//what is functional programming? ekta ba akadik function ke parameter hishaba er ekta function a pathte parben or ekta function theke er ekta function eturn korte parben
//js a function e holo object, special type of object
//console.dir() details dakhiya dai
// js a function k variable a assign korte parbo, parameter hishaba pathate parbo, function theke er ekta function return o korte parbo
//first class function
function hello() {
    console.log("Hello world");
}
hello();
//prove function is a abject
hello.language = "javaScript";//function k object er moto property dilam //but aita amra korbo na aita bad object create korbo property add korte chile
console.log(hello.language);




//what is Higher order function? jeta onno ekta function er upor kaj kore & parameter hishaba er ekta function k nibe, function theke er ekta function return korbe
function hello() {//higher order function
    return function() {
        console.log("Hello world");
    }
}
hello()();//aber call ta na korle output ashto na




//Example1 without higher order function
var number = [1, 2, 3];
var result = [];// aiter modda result diya dibo tai faka ekta Array niya nilam
for(let i =0; i< number.length; i++){
    result.push(number[i] * 2);//puch build in function// [i] element gula 1, 2, 3
}
console.log(result);



//Example1 with higher order function
//Array.prototype.map() use
var number = [1, 2, 3];
var result = number.map(function(number){ //map portek ta elemet er moddo diya jai
//map ekta function nai tar parameter hishbe and shai function ta array er portek ta element k pai ekbar kore shai element ta k ami ja kushi korte parbo kore return koe dibo
return Number * 2;// (var number = [1, 2, 3];)aitar change aita

});


//Example1 wth arrow function
var number = [1, 2, 3];
var result = number.map((number) => {
    return Number * 2;   
});






//Example2 with higher order function

var playrs = [
    {
        name: 'Sakib',
        avg: 38.44,
    },
    {
        name: 'Tamim',
        avg: 23.4,
    },
    {
        name: 'Mush',
        avg: 53.55,
    },
    {
        name: 'Ique',
        avg: 33.44,
    },
];
var playersWithAvgThirtySeven = [];
for(let i = 0; i < playrs.length; i++){
    if (playrs[i].avg >=37){
        playersWithAvgThirtySeven.push(playrs[i]);
    }
}
console.log(playersWithAvgThirtySeven);
//filter , map ata main array k change kore na



//Example2 with higher order function
//Array.prototype.filter() use
var playrs = [
    {
        name: 'Sakib',
        avg: 38.44,
    },
    {
        name: 'Tamim',
        avg: 23.4,
    },
    {
        name: 'Mush',
        avg: 53.55,
    },
    {
        name: 'Ique',
        avg: 33.44,
    },
];

//filer o parameter hishaba function niyase
var playersWithAvgThirtySeven = playrs.filter((player) => player.avg >= 37 );//ek line a likle return likte hoi na
console.log(playersWithAvgThirtySeven);

//ato khon build in functio deklam map, filter




//akhon amra nijera higher order function banabo
//amra akhon map funtion nijera banbo
const languages  = ['JavaScript', 'PHP', 'c'];

//map function banasi but map name dite parbo na map js a ase
//aita higher order function karon paramiter function nisse and array return korse
function mapSumit(arr, fn) {//mapSumit to buildin na ja amta dot niya excess korte parbo na so amra para mitter hishaba pathasi
//map ki korto she paramitter hishabe array  & function nito tai ai khane o amra array & function pathasi
const newArray = [];
    for(let i = 0; i<arr.length; i++){
        newArray.push(fn(arr[i]));
    }
    return newArray;//map finaly ekta array return korto tai amra ai line a array return korsi

}

const myArray = mapSumit(languages, function(language) {
    return language.length;
});
console.log(myArray);



//uporer code tuko e without command //nijer banano higher order function

const languages = ["JavaScript", "PHP", "c"];
function mapSumit(arr, fn){
    const newArray = [];
    for(let i = 0; i <arr.length; i++){
        newArray.push(fn(arr[i]));
    }
 return newArray;
}
const myArray = mapSumit(languages, function(language){
    return language.length;
});
console.length(myArray);