function Car(make, model, year) {
    // Properties
    this.make = make;
    this.model = model;
    this.year = year;
  
    // Method
    this.displayInfo = function() {
      return `${this.year} ${this.make} ${this.model}`;
    };
  }
  
  // Creating an instance of the Car object
  const myCar =  Car('Toyota', 'Camry', 2022);

  Car(1,"j",2)