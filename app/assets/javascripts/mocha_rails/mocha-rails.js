mocha.setup('bdd');
expect = chai.expect;
onload = function() {
  var runner = mocha.run();
  //runner.globals(['testExports']);
};
