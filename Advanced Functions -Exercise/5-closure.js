function privCount() {

    let count = 0;
  
    return {
      increment: function() {
        count += 1;
      },
      getCount: function() {
        return count;
      }
    };
  }
  
  const counter = privCount();
  
  counter.increment();
  console.log(counter.getCount()); 
  