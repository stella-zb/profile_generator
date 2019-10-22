// work with Michelle
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let profile = {};

rl.question('What is your name? ', (name) => {
  profile.name = name;
  rl.question('What\'s an activity you like doing? ', (activity) => {
    profile.activity = activity;
    rl.question('What do you listen to while doing that? ', (sound) => {
      profile.sound = sound;
      rl.question('Which meal is your favourite? (e.g. dinner, brunch, etc.) ', (meal) => {
        profile.meal = meal;
        rl.question('What\'s your favourite thing to eat for that meal? ', (food) => {
          profile.food = food;
          rl.question('Which sport is your favourite? ', (sport) => {
            profile.sport = sport;
            rl.question('What is your superpower? ', (superpower) => {
              profile.superpower = superpower;
              console.log(`My name is ${name} and I like listening to ${sound} while ${activity}. I like eating ${food} for ${meal}. My favourite sport is ${sport}. My superpower is ${superpower}`)
              rl.close();
            });
          });
        });
      });
    });
  });
});

