// Get Coding :)

class Shark extends Animal {
  constructor(name,age,status) {
    super(name,age,status);
    this.legs = 0;
    this.species = "shark";
    this.status = status ;
   
  }
}

class Cat extends Animal {
  constructor(name,age,status) {
    super(name,age,status);
    this.status = status
    this.legs = 4;
    this.species = "cat"
  }
   introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
  }
  // Do the same here as you did for Shark - define your constructor function and any other methods you need
}

class Dog extends Animal {
   constructor(name,age,status,master) {
    super(name,age,status)
    this.legs = 4;
     this.status = status;
     this.species = "dog";
     this.master = master;
  }
   greetMaster() {
    return `Hello ${this.master}`;
  }
  // On your own now - you can do it :D
}


// but they were already defined so you didn't have to do all this 
class Shark extends Animal {
    constructor(name, age, status) {
      super(name, age, 0, "shark", status);
    }
  }

  class Cat extends Animal {
    constructor(name, age, status) {
      super(name, age, 4, "cat", status)
    }
    introduce() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`
    }
  }

  class Dog extends Animal {
    constructor(name, age, status, master) {
      super(name, age, 4, "dog", status);
      this.master = master
    }
  greetMaster() {
    return `Hello ${this.master}`
  }
  }