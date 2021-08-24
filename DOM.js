//DOM is a object
//Dom k manupulate kore js ekta web page k interactive banai.
//Document Object Model
//HTML =HTML page is a Document, Object =html, Head, body, div, hi, p ai element gula e object js a shob e oject, model =  HTML tree structure is the Model


console.dir(document);//document er modda ki ki ase dekher jonno
//output: #document

console.log(typeof(document));
//output: object

console.log(document.URL);//Website url dekhar jonno
console.log(document.title);//Website title dekhar jonno

//head er type dekbo karon amra to jani shob object dekhi ai gula object ki na
console.log(typeof(document.head));
//output: object

console.dir(document.head);
//onek property, method ache



//amra chiley dynamicaly ai gula change o kore dite pari, js a amra object er property change korte pari change korley oi object er property e change hoi karon object reference type.
document.title = "Play with DOM";


//ekta array hole tar upor amra oboshi array operation chalate parbo
//proto er modda symbol.iterator thakle e amra iterate korte parbo for of use kory




//document object er bitor er methods use kore kaj korbo amra.