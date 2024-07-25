function sum(a, b, c, d) {
    return a + b + c + d;
  }
  
  function partial(d) {
    return function(a, b, c) {
      return sum(a, b, c, d);
    };
  }
  
  const addFive = partial(5);
  
  console.log(addFive(1, 2, 3)); 
  