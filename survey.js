// import * as readline from 'node:readline';

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question(`What's your name? Nicknames are also acceptable :) `, (answer1) => {
  console.log(`Thank you for your response: ${answer1}`);

  rl.question(`What's an activity you like doing? `, (answer2) => {
    console.log(`Thank you for your response: ${answer2}`);

    rl.question(`What do you listen to while doing that? `, (answer3) => {
      console.log(`Thank you for your response: ${answer3}`);

      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.) `, (answer4) => {
        console.log(`Thank you for your response: ${answer4}`);

        rl.question(`What's your favourite thing to eat for that meal? `, (answer5) => {
          console.log(`Thank you for your response: ${answer5}`);

          rl.question(`Which sport is your absolute favourite? `, (answer6) => {
            console.log(`Thank you for your response: ${answer6}`);

            rl.question(`What is your superpower? In a few words, tell us what you are amazing at! `, (answer7) => {
              console.log(`Thank you for your response: ${answer7}`);


              console.log(`Thank you for your valuable feedback ${answer1}: ${answer2} can be a fun and stressful activity, but
              listening to ${answer3} can be a great choice. Great to know you love ${answer4}, and eating ${answer5} and your favourite sport is ${answer6}. 
              Interesting to know that  ${answer7} is your superPower  `); 
              
              rl.close();
            });

          });

        });

      });

    });

    

  });

 
});