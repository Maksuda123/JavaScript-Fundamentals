// First class function return function
function interviewQuestion(job) {
    if(job === 'designer') {
        return function(name){
            console.log(`${name} Can you explain what is UX design?`);
        }
    }    
        else if(job === 'techer'){
            return function(name){
                console.log(`${name} What subject do you tech?`);
            }
        }
        else{
            return function(name){
                console.log(`${name} What are you do?`);
            }
        }
        
     
    
}
//for techer
var techerQuestion = interviewQuestion('techer');
techerQuestion('mila');
//or
var techerQuestion = interviewQuestion('techer')('lili');
//for designer
var designerQuestion = interviewQuestion('designer');
designerQuestion('mila');



//imadiate invok function Expression(iife)
function game(){
    var score = Math.random() * 10;
    console.log(score >= 5);
    
}
game();



(function game(){
    var score = Math.random() * 10;
    console.log(score >= 5);
    
})(5);










//bind,call, apply

var john = {
    name: 'Jahn',
    age: 23,
    job:"techer",
    presentatin: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log(`Good ${timeOfDay} everyone`);
        }
        else if(style === 'friendly') {
            console.log(`What's up ${this.name} ${timeOfDay}`);
        }
    }
};

var emily = {
    name: 'Emily',
    age:23,
    job: 'designer',
};

john.presentatin('formal', 'morning');
//call here first argument this variable emily,then 2nd argument
john.presentatin.call(emily, 'friendly', 'afternoon');//What's up Emily 
// john.presentatin.apply(emily, ['friendly', 'afternoon']);//aita kaj korbe na aita array
var johnFriendly = john.presentatin.bind(john, 'friendly');//first argument john, aita ekta function return korbe
johnFriendly('Morning');















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
    



    