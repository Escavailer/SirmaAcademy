const stringManipulator = {
    
    _value: '',
  
    setValue: function(value) {
      this._value = value;
      return this;
    },
  
    toUpperCase: function() {
      this._value = this._value.toUpperCase();
      return this;
    },
  
    toLowerCase: function() {
      this._value = this._value.toLowerCase();
      return this;
    },
  
    print: function() {
      console.log(this._value);
      return this;
    }
  };
  
  stringManipulator
    .setValue('Hello')
    .toUpperCase()
    .print() 
    .toLowerCase()
    .print();
  