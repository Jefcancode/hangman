import wordBank from "./word-Bank.js";
import wordBank1 from "./word-Bank.js"
// console.log(wordBank[0]);
import prompt from "readline-sync";
//const answer = prompt.question("Does this work? ");

console.log("len",wordBank1.length);

//let randnumer = 0;


console.log(wordBank1[635]);
// for (let i=1;i<10;i++)
// {

  let randnumer = myRand(10) ;

   function myRand(range){  
    // return Math.round(Math.random(range)+1);
    return Math.round((Math.random(range))*wordBank1.length);
  }

// let randnumer = myRand(10 ) ;
console.log(randnumer,wordBank1[randnumer]);
console.log(wordBank1[randnumer]);

//

console.log("l29",randnumer,wordBank1[randnumer]);


let ar=[];
//let wordbank2='apple';
let letterMatch=0;
let guessCount=0;
for (var i = 0; i < wordBank1[randnumer].length; i++) {
    console.log(wordBank1[randnumer]);

    console.log(wordBank1[randnumer].charAt(i));
   ar[i]=wordBank1[randnumer].charAt(i);
  }
  
   console.log("ar",ar);


/*************************************
   // from index3.js
/********************************************/


   let displaystatus=['','','' ,'','',''];
 
while( (guessCount<6)&&(letterMatch!=wordBank1[randnumer].length) )
{
console.log("\nWelcome to Hangman!\nPress ctrl+c to stop\n");
const letter = prompt.question("Please guess a letter: ");
guessCount++;
console.log(wordBank1[randnumer]);

// let displaystatus=[00,0.0,0,0];

console.log("d",displaystatus );
for (let i=0;i<wordBank1[randnumer].length;i++)
{
    if (ar[i]==letter) {
    displaystatus[i] =letter;
    letterMatch++;
    console.log(i,displaystatus );

    console.log("letterMatch", letterMatch ); 
    
    }
  }  

console.log("display",displaystatus,wordBank1[randnumer].length);
}// end loop 
 if (letterMatch==wordBank1[randnumer].length)
      console.log("win");
 else if (guessCount==6)
        console.log("lose");
    
  