process.stdin.resume();
  console.log('Enter km/h to be converted into knots. Type \'quit\' to exit.')
  process.stdin.setEncoding('utf8');
  var util = require('util');

  process.stdin.on('data', function (text) {
    console.log('received data:', util.inspect(text));
    if (text === 'quit\n') {
      done();
    } else {
      var oneKnotToKm = 1.852;
      var result = (Number(text) / oneKnotToKm).toFixed(2);
      console.log(result);
    }
  });

  function done() {
    console.log('Bye bye');
    process.exit();
  }
