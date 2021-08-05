// XMLHttpRequest or XHR
// XML name kano? aita ekta data type, and format, aita browser er buildin ekta feature
// Akhon JSON er maddome data pass hoi er age XML er maddome hoto age XML populer chilo, akhon JSOP populer
// Node js Ekta run time, request er jonno tar module ase
// Browser er khatre XMLHttp er maddome request hoi, aita amder provite kore browser run time
// Request adan prodan er khatre shudu XML na she josn, http, text, html aro onek data type e she handle korte pare








//Example 1
//2 ta button k nibo mane get korbo
// GetButton diya extranl data niya ashbo & Send button diya extranl kothao data pathiya dibo
const getButton = document.getElementById('get-button');
const sendButton = document.getElementById('send-button');
//Line duplicate command Shift+ALT+Up/Down key

const getData = function() {//data get er jonno code likbo
    const xhr = new XMLHttpRequest();//xhr name ekta notun request object banalam

    //request k prepare korer jonno xhr a property add korbo
    //open holo ami ki request chassi & kon url a hit korbe ai 2 ta paramiter nei
    xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1")//fake appi website: JsonPlaceHolder
    //open diya request take prepare korlam
    // xhr.responseType = "json"; // aita kore dile real js object dibe
    xhr.send();//aita browser a network a dekbo output


    //jai response ta pathalam shei response ta diya akhon amra kisu korbo ai jonno onload name ekta method ase
    xhr.onload = function() {//response er modda result pabo she response er modde result dai
        const result = xhr.response;
        console.log(result);//akhon console result pabo //result ta string er moto pure object na //aita diya kaj kora jabe na
        console.log(JSON.parse(result));//Akhon pure js object
        //Json.parse diya real js object a convert korte pari
    }   
};


const sendData = function() {};


//Button a click korte pari addEventListener er maddome
//Fast parameter ki event listen korte chassi, 2nd parameter click hole kon function k linten korbe ta dite hoi
getButton.addEventListener("click", getData);
getButton.addEventListener("click", sendData);









//Example 1 with refector

//refactor korbo uporer code k karon ekta function create korley get,post 2 tar jonno e use korte parbo

const getButton = document.getElementById('get-button');
const sendButton = document.getElementById('send-button');

//ai tukor code er refactor niche
// const sendRequest = function (method, url) {
//     const xhr = new XMLHttpRequest();
//     xhr.open(method, url);
//     xhr.responseType = "json";
//     xhr.send();

//     xhr.onload = function() {//aita response power porer gotona so aita k ai khane rakher mane hoi na ai khon thaka ekta promise return kore dibo
//         const result = xhr.response;
//         console.log(result);
//     };
// };



const sendRequest = function (method, url, data) {//sendRequest ja kono request pathare shomvob // function er kono parameter er value na dile shita undefine pai , data er value nai ai Get er khetre so tokhon she undefine
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = "json";
    xhr.setRequestHeader("Content-Type", "application/json");//amra meta tag add kore dite pari nijera jeta pathate hoi request er header a so ai khane o tai kora holo take content type json pathiya dewa holo
    xhr.send(data);

    xhr.onload = function() {//on load er modda o application secifique error thakte pare so amk ai jaigai shai error ta dorte hobe
       if (xhr.status >=400) {//400 theke error
       reject(xhr.response);
       }else{
        resolve (xhr.response);
       }
    };

    xhr.onerror = function() {//onload er onerror er ekta property //xhr handle korer shomoimamra function er callback er modda pabo na xhr er propertyer modda pabo onload, onerror
        reject("Something was wrong");//onerror call hoi tokhon e jodi request pahate or net er kono error hoi  
    }

    });
    return promise;//return koesi so akhon ja kono function er modda promise.then call korte pari
};


const getData = function() {//sendRequest k ai khane call kore dilam aita ekta promise return kore
    sendRequest("GET", "https://jsonplaceholder.typicode.com/todos/1")
    //then a response data pabo
    .then((responseData) => {
        console.log(responseData);

    });
};

const sendData = function() {
    sendRequest("POST", "https://jsonplaceholder.typicode.com/posts", JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    })//server shudu flat/pure json data receive kore //json.stringify na korle she a ekta object
    //then er modda response data pabo
    ).then((responseData) => {
        console.log(responseData);

    })
    .catch((err) => {
        console.log(err);
    })

};

getButton.addEventListener("click", getData);
sendButton.addEventListener("click", sendData);