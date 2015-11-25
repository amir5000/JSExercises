function createCounter(counterName) {
  var counter = 0;

  function display() {
    console.log("Number of " + counterName + ": " + counter);
  }

  function increment() {
    counter = counter + 1;

    display();
  };

  function decrement() {
    counter = counter - 1;

    display();
  };

  return {
    increment : increment,
    decrement : decrement
  };
}

var dogsCounter = createCounter("dogs");

dogsCounter.increment(); // Number of dogs: 1
dogsCounter.increment(); // Number of dogs: 2
dogsCounter.decrement(); // Number of dogs: 1