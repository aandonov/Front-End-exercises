var read = require('readline'),
    input = read.createInterface(process.stdin, process.stdout),
    questions = ['age', 'maxAge', 'food', 'foodPerDay'],
    info = {},
    counter = 0;

function calcSupply(info) {
  var ageDiff = Number(info.maxAge) - Number(info.age),
      maxAge = info.maxAge,
      food = info.food,
      days = 365,
      kg = ageDiff * days * Number(info.foodPerDay),
      sentence = kg + 'kg of ' + food + ' would be enough until I am ' + maxAge + ' years old.';

      console.log(sentence);
}

input.setPrompt(questions[0] + ': ');
input.prompt();

input.on('line', function(data) {
  info[questions[counter]] = data;
  counter++;

  if (counter < questions.length) {
    input.setPrompt(questions[counter] + ': ');
    input.prompt();
  } else {
    calcSupply(info);
    process.exit(0);
  }
});
