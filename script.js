//EASY

function exerciseOfTheDay() {
    return function(exercise) {
      return `Today's exercise: ${exercise}`;
    };
  }
  
  const exercise = exerciseOfTheDay();
  
  console.log(exercise("Running"));   // Output: Today's exercise: Running
  console.log(exercise("Swimming"));  // Output: Today's exercise: Swimming
  console.log(exercise("Dancing"));   // Output: Today's exercise: Dancing
  console.log(exercise("Fencing"));   // Output: Today's exercise: Fencing


  //MEDIUM

  function sharePizza(totalSlices, people) {
    const slicesPerPerson = (totalSlices / people).toFixed(2);
    return `Each person gets ${slicesPerPerson} slices of pizza; from our ${totalSlices} slice pizza`;
  }
  
  console.log(sharePizza(8, 2));   
  console.log(sharePizza(8, 3));   
  console.log(sharePizza(21, 20)); 
  console.log(sharePizza(10, 3)); 

  //HARD

  function createPII(name, ssn) {
    const PII = {
      name: name,
      ssn: ssn
    };
    
    return {
      getName: function() {
        return PII.name;
      }

    };
  }
  
  console.log(patient2.name);     
  console.log(patient2.ssn);       
  console.log(patient2.getName()); 
  console.log(patient2.getSSN()); 


  //VERY HARD

  class Person {
    constructor(name, job, age) {
      this.name = name;
      this.job = job;
      this.age = age;
    }
    
    exercise() {
      console.log("Running is fun! - said no one ever");
    }
    
    fetchJob() {
      console.log(`${this.name} is a ${this.job}`);
    }
  }
  
  class Programmer extends Person {
    constructor(name, job, age, languages) {
      super(name, job, age);
      this.languages = languages;
      this.busy = true;
    }
    
    completeTask() {
      this.busy = false;
    }
    
    acceptNewTask() {
      this.busy = true;
    }
    
    offerNewTask() {
      if (this.busy) {
        console.log(`${this.name} can't accept any new tasks right now.`);
      } else {
        console.log(`${this.name} would love to take on a new responsibility.`);
      }
    }
    
    learnLanguage(newLanguage) {
      this.languages.push(newLanguage);
    }
    
    listLanguages() {
      return this.languages.join(", ");
    }
  }
  
  // Test cases
  const person1 = new Person("Harold", "Backend Engineer", 20);
  const c1 = new Programmer("Liana", "DevOps", 35, ["HTML", "C#", "LUA"]);
  const c2 = new Programmer("Edwin", "Janitor", 55, ["HTML", "SASS", "Ruby"]);
  const c3 = new Programmer("Manny", "SysOps", 31, ["HTML", "CSS", "JS", "R"]);
  
  // Adding new languages
  c1.learnLanguage("CSS");
  c2.learnLanguage("C++");
  c3.learnLanguage("JAVA");
  
  // Listing languages
  console.log(c1.listLanguages()); // Output: HTML, C#, LUA, CSS
  console.log(c2.listLanguages()); // Output: HTML, SASS, Ruby, C++
  console.log(c3.listLanguages()); // Output: HTML, CSS, JS, R, JAVA
  
  // Checking properties
  console.log(person1); // Person { name: 'Harold', job: 'Backend Engineer', age: 20 }
  console.log(c1);      // Programmer { name: 'Liana', job: 'DevOps', age: 35, languages: [...], busy: true }
  console.log(c2);      // Programmer { name: 'Edwin', job: 'Janitor', age: 55, languages: [...], busy: true }
  console.log(c3);      // Programmer { name: 'Manny', job: 'SysOps', age: 31, languages: [...], busy: true }
  
  // Testing methods on Person
  person1.exercise();   // Output: Running is fun! - said no one ever
  person1.fetchJob();   // Output: Harold is a Backend Engineer
  
  // Testing Programmer methods
  c1.offerNewTask();    // Output: Liana can't accept any new tasks right now.
  c1.completeTask();
  c1.offerNewTask();    // Output: Liana would love to take on a new responsibility.
  c1.acceptNewTask();
  c1.offerNewTask();    // Output: Liana can't accept any new tasks right now.