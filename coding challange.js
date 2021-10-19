//function coding challange 7 my drive cource


//iife function for private our code
//7
(function(){
    //1
    function Qestion(questions, answers, correct) {
        this.questions = questions;
        this.answers = answers;
        this.correct = correct;
    }
    
    Qestion.prototype.displayQuestion = function() {
    console.log(this.questions);
    //amra jani answer koto gula hote pare 2,3 etc so loop korbo
    for(var i=0; i<this.answers.length; i++){
        console.log(i + ':' + this.answers[i]);
     }
    }
    //6
    Qestion.prototype.checkAnswer = function(ans) {
        if (ans === this.correct) {
            console.log("correct answer!")
        }else{
            console.log("Wrong answer. Try again");
        }
    }
    //2
    //answer ekta variable tai ekta variable er modda amra array akare onek gula value rakte pari tai array
    var q1 = new Qestion('Js Every where?', ['yes', 'No'], 0);
    var q2 = new Qestion('Js create fun?', ['yes', 'No', 'both'], 2);
    var q3 = new Qestion('Js cource butuful?', ['yes', 'No'], 0);
    //3
    question = [q1, q2, q3];
    
    //4
    var n = Math.floor(Math.random() * question.length);
    question[n].displayQuestion();
    //5
    //Answer jano number hoi ai jonno parseInt //parseInt string k number a convert kore
    var answer = parseInt(prompt("Please secect the correct answer"));
    
    question[n].checkAnswer(answer);
    })()
    



    






//Expert level
//7
(function(){
    //1
    function Qestion(questions, answers, correct) {
        this.questions = questions;
        this.answers = answers;
        this.correct = correct;
    }
    
    Qestion.prototype.displayQuestion = function() {
    console.log(this.questions);
    //amra jani answer koto gula hote pare 2,3 etc so loop korbo
    for(var i=0; i<this.answers.length; i++){
        console.log(i + ':' + this.answers[i]);
     }
    }
    //6
    Qestion.prototype.checkAnswer = function(ans, callback) {
        var sc;
        if (ans === this.correct) {
            console.log("correct answer!")
           sc = callback(true);
        }else{
            console.log("Wrong answer. Try again");
            sc = callback(false);
        }
        this.displayScore(sc);//displayScore ai khane pilam prototype er karone
    }
    Qestion.prototype.displayScore = function(score) {
        console.log("Your current score is: " + score);
        console.log("---------------------")
    }
    //2
    //answer ekta variable tai ekta variable er modda amra array akare onek gula value rakte pari tai array
    var q1 = new Qestion('Js Every where?', ['yes', 'No'], 0);
    var q2 = new Qestion('Js create fun?', ['yes', 'No', 'both'], 2);
    var q3 = new Qestion('Js cource butuful?', ['yes', 'No'], 0);
   

  //10 
    question = [q1, q2, q3];
    function score() {
        var sc = 0;
        return function(correct){
            if (correct) {
                sc++;
            }
            return sc;
        }
    }
    var keepScore = score();//keepScore sc varible k use korbe closer er karone korte parbe

   //8
   function nextQuestion(){
    //4
    var n = Math.floor(Math.random() * question.length);
    question[n].displayQuestion();
    //5
    //Answer jano number hoi ai jonno parseInt //parseInt string k number a convert kore
    var answer = prompt("Please secect the correct answer");
  //9
    if(answer !== 'exit') {//aita to cholte e thakbe tai exit dewa holo off korer jonno
        question[n].checkAnswer(parseInt(answer), keepScore);
    
        nextQuestion();//function er bitor e function call holo next next qus jano cholte thake
    }
   
   }
   nextQuestion();
    })()
    



    











//Coding challange with ES6 feature

class Element {
    constructor(name, buildYear){
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends Element {
    constructor(name, buildYear, area, numTress){
        super(name, buildYear);
        this.area = area;
        this.numTress = numTress;
    }
    treeDensity(){
        const density = this.numTress / this.area;
        console.log(`${this.name} has a tree density of ${density} trees per squire km`);
    }
} 

class Street extends Element {
    constructor(name, buildYear, length, size = 3 ){
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }
    classifyStreet() {
        const classificaton = new Map();
        classificaton.set(1, 'tiny');
        classificaton.set(2, 'small');
        classificaton.set(3, 'normal');
        classificaton.set(4, 'big');
        classificaton.set(5, 'huge');
        console.log(`${this.name}, build in ${this.buildYear}, is a ${classificaton.get(this.size)} street`);
    }
}

const allPark = [new Park('Green Park', 1987, 0.2, 215), new Park('National Park', 19894, 1.2, 21534), new Park('Blue Park', 1957, 2.2, 3215)];

const allStreets = [new Street('Ocean Avenue', 1990, 1.8, 4), new Street('Street Avenue', 1990, 1.2, 4), new Street('Read streed Avenue', 2012, 2.2, 2), new Street('True street', 1999, 5.2, 4)];


function calc(arr) {
    const sum = arr.reduce((prev, cur, index) => prev + cur, 0);

    return [sum, sum / arr.length];

}

function reportPark(p) {
    console.log(`------------Park report-----------`);
    //Density
    p.forEach(el => el.treeDensity());

    //Average age
    const ages = p.map(el => new Date().getFullYear() - el.buildYear);
    const [totalAge, avgAge] = calc(ages);
    console.log(`Our ${p.length} parks have an average of ${avgAge} years.`);


    //Which park has more than 1000 trees
    const i = p.map(el => el.numTress).findIndex(el => el >= 1000);
    console.log(`${p[i].name} has more than 1000 trees.`);

}

function reportStrees(s) {
    console.log(`------------Park report-----------`);
    //Total and avg length of the town streets
    const [totalLength, avgLength] = calc(s.map(el => el.length)); //distructure kore niya ashlam totalLength & avgLength
    console.log(`Our ${s.length} streets have a total length of ${totalLength} km, with an average of ${avgLength} km.`);
    
    //Classify size
    s.forEach(el => el.classifyStreet());//size=3 kora ai jonno classifyStreet() bitor diya kisu pass kora hoi nai

}

reportPark(allPark);
reportStrees(allStreets);







// output:
// ------------Park report-----------
//  Green Park has a tree density of 1075 trees per squire km
//  National Park has a tree density of 17945 trees per squire km
//  Blue Park has a tree density of 1461.3636363636363 trees per squire km
//  Our 3 parks have an average of -5925 years.
//  National Park has more than 1000 trees.
//  ------------Park report-----------
//  Our 4 streets have a total length of 10.4 km, with an average of 2.6 km.
//  Ocean Avenue, build in 1990, is a big street
//  Street Avenue, build in 1990, is a big street
//  Read streed Avenue, build in 2012, is a small street
//  True street, build in 1999, is a big street
