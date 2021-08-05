//whta is recurnsion? ekta function nijer modda nijk call korle take recurnsion bole
let myFunc = function() {//golbal score
    myFunc();//child score //global scopey child score passi
}



//1+2+3+4+............+ n er sum korbo
let total = 0;
let n = 10;
for(let i = 1; i<=n; i++){
    total +=i;//total = total + 1 same
}
console.log(total);


//convert loop to recursive function
// formula toiri hoilo: f(n-1) + n;
function sum(n){//ai function nijk e nije call korse ai function kono din sesh hobe na
    return sum (n-1) + n;
    
}

//1. convert loop to recursive function
//aita recurnsion function jeta nijak nije korse
function sum(n){//ai function nijk e nije call korse ai function kono din sesh hobe na
    if(n === 0){
        return 0;

    }else{
        return sum(n-1) + n;   
    }
    
}
console.log(sum(10));

// code ta ki vabe run hosse 1 No?
sum(3)//dorlam n = 3;
sum(2) + 3
sum(1) + 2 + 3
sum(0) + 1 + 2 + 3

//onek boro number niya jak korer konno recursion suitable na
//recursion avoid kora e valo



//n number er jug kora lagbe onek boro number tahole ki korbo? dakhi ki korte pari code diya...

function sum(n){//ai function nijk e nije call korse ai function kono din sesh hobe na
    if(n === 0){
        return 0;

    }else{
        return sum(n-1) + n;   
    }
    
}
console.log(sum(10000000));//output rage error// for loop error dito na run korto but efecient na 

//solution
//age formila use kore kortam choto bela akhon o tai korbo
//(n(n+1))/2
var n = 1000000000;
console.log((n * (n + 1)) / 2);//function lagse na math formula use kore korlam 
//cpu use kore calculation na kora
//aita onek voro number tai recursion avoid kora hoiyase