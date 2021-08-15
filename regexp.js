// Regular Expression k shong khep a regexp bola hoi.
// Regular Expression string er modda vibinno patern khuje pete shahajo hoi.
// Regular Expression er common use holo 1. User input validate korte help kore(valivate user input) 2.Onek boro text er modda search korte help kore(search inside text), onek boro documentation er modda find rerlace operation korte help kore.
// pratice in online website link: regexr.com



// Regular Expression likte hoi foroward slash er modda

// Exact Match, by dedault first match dai
// /color/g ....shob color er jonno g


// case insencitive er jonno /color/gi  (mane boro choto shob letter er jonno i)

// color colour ai rokom 2 ta ke match korte chile /color|color/gi



// group korbo () diya
//  /(color|color).blind/gi


// shob word k select korer jonno w
// /w/gi



// small d diya disit select
//  /\d/gi


// white space select er jonno s
// /\s/gi


// capital W mane word chara ja kisu ase select korer jonno
// /\W/gi





// capital D diya disit chara ja kisu ase select korer jonno
// /\D/gi



// capital S diya white space chara ja kisu ase select korer jonno
// /\S/gi


//  \n diya new line select



//  /./gi deya new chara baki shob select korte pari



// a to z shob selet korer jonno
// /a-z/g     /a-f/g

// /[a-gA-G/g  camel case


//  ^ = not
//  /[^abc]/g     abc chara shob




// quentity bole dibo    u thakte o pare na o thakte pare
// /colou?r/gi
// /colou?r*/gi    * mane 0 or multiple
// + mane 1 or multiple
// {} a koto bar chai bole dibo

// ? thakle or na thakle select korte  \?



// /^hi/ = start position  /!$/ = end 


// number diya line suro hole shei number k select korte /^[0-9]/


// multiline select korte hole m




// javascript example in regEx
// javascript a regExp niya kaj korer jonno 4 ta function ache match, search, replace, test


//Example 1: Matching HEX Color code
const text = '#2A2A2A';
const regex = /#?([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})/g;
const matches = text.match(regex);
const index = text.search(regex);
const replaced = text.replace(regex, '#000000');
const testing = regex.test(text);
console.log(matches, index, replaced, testing);
//output: ["#2A2A2A"]0: "#2A2A2A"


//Example 1: BD phn number check korbo
const text = '+88-01987456456';
const regex = /(\+88)?-?01[1-9]\d{8}/g;
const matches = text.match(regex);
const index = text.search(regex);
const replaced = text.replace(regex, 'phn');
const testing = regex.test(text);
console.log(matches, index, replaced, testing);
//output: ["+88-01987456456"] 0 "phn" true