function getFibonacci() {
    
    let a = 0, b = 1;
  
    return function() {
      const nextNumber = b;
      b = a + b;
      a = nextNumber;
      return a;
    };
  }
  
  let fibonacci = getFibonacci();
  
  console.log(fibonacci()); 
  console.log(fibonacci()); 
  console.log(fibonacci()); 
  console.log(fibonacci()); 
  console.log(fibonacci()); 
  console.log(fibonacci()); 
  console.log(fibonacci()); 
  console.log(fibonacci()); 
  