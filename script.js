var readlineSync=require('readline-sync');
var chalk=require("chalk");
console.log(chalk.bgWhite(chalk.black("Do you want to play a cricket quiz?")));
console.log("\n");
console.log(chalk.underline(chalk.blue("Rules of the game")));

console.log(chalk.green("For correct answer you get +1"));
console.log(chalk.red("For every incorrect answer you get -1"));
console.log("\n");
var userName=readlineSync.question("Enter your name to play the game?"+"\n");
var score=0;
var max= Number.NEGATIVE_INFINITY;
var scorecard=[{name:"Ayush panda",score:"8"},{name:"Bharat Mohanty",score:"5"},{name:"Adarsh Mohanty",score:"2"},{name:"Kumar Saransh",score:"9"}];
console.log(userName);
var ListOfQ=[{question:"Which is first Indian cricket tournament ? ",
                a:"Bombay Triangular",
                b:"Pepsi Cup",
                c:"None of these",
                d:"Bombay Series",
                Ans:"a"},
                {question:"Which of the following is first cricket club in India ?",
                a:"East Indian Cricket Club",
                b:"Maharashtra Cricket Club",
                c:"Oriental Cricket Club",
                d:"Bombay Cricket Club",
                Ans:"c"},
                {question:"Indian played first test match against ________ .",
                a:"south Africa",
                b:"Pakistan",
                c:"England",
                d:"Australia",
                Ans:"c"},
                {question:"Indian played their First ODI Match against _______.",
                a:"Pakistan",
                b:"England",
                c:"Australia",
                d:"South Africa",
                Ans:"b"},
                {question:"Indian played their First T20 Match against _______. ",
                a:"Pakistan",
                b:"South Africa",
                c:"England",
                d:"Australia",
                Ans:"b"},
                {question:"Who was first test captain of Indian cricket team ?",
                a:"Ajit Wadekar",
                b:"Bapu Nadkarni",
                c:"Vijay Hazare",
                d:"CK Nayudu",
                Ans:"d"},
                {question:"Who was first ODI captain of Indian cricket team ?",
                a:"Bapu Nadkarni",
                b:"CK Nayudu",
                c:"Ajit Wadekar",
                d:"Vijay Hazare",
                Ans:"c"},
                {question:"India won first ODI in ______ against _______.",
                a:"None of these",
                b:"1974, Pakistan",
                c:"1975, East Africa",
                d:"1974, England",
                Ans:"c"},
                {question:"India won first Test in ______ against _______.",
                a:"1940-41 , England",
                b:"1951-52 , England",
                c:"1950-51 , England",
                d:"None of these",
                Ans:"b"},
                {question:"India got First Test Series Victory in _______ against _________.",
                a:"None of these",
                b:"1952 , Australia",
                c:"1952 , Pakistan",
                d:"1952 , England",
                Ans:"c"},
                ]
 function play(question,answer,a,b){
   var UserAns=readlineSync.question(chalk.blue(question+"\n"+"a: "+a+"\n"+"b: "+b+"\n"+"c: "+c+"\n"+"d: "+d+"\n"));
   if(UserAns.toLowerCase()==answer){
      score++;
      console.log(chalk.green("yes,you are right"));
   }
   else{
       score--;
       console.log(chalk.red("Oops!,you are wrong"));
   }
   console.log("current score: "+score);
   console.log("-------------------------------------------------------------");
} 

for(var i=0;i<ListOfQ.length;i++){
    var {question,Ans,a,b,c,d}=ListOfQ[i];
    play(question,Ans,a,b,c,d);
}              
console.log(chalk.bgBlue("Final Score: ",score));
let object={name: `${userName}`,score:`${score}`}
scorecard.push(object);
console.log("ScoreCard: ",scorecard);


function highscore(scorecard){
    for(var i=0;i<scorecard.length;i++){
         var {name,score}=scorecard[i];
         if(score>max){
            max=score;
           var highscorer=scorecard[i].name;
            
        }
        
    }
    console.log(chalk.bgBlue("Highscore: "+max+" by "+highscorer));
}
highscore(scorecard);

