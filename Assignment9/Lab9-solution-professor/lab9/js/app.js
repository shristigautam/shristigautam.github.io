/**
 * app.js
 * Lab9 solutions
 */
 "use strict";

 console.log("Lab9 Solutions");
 
 // Task 1:
 const person = {
     name: "",
     dateOfBirth: null,
     getName: function() {
         return this.name; 
     },
     setName: function(newName) {
         //console.log(this);
         this.name = newName;
     }
 };
 const john = Object.create(person);
 console.log(john);
 console.log(john.__proto__);
 john.setName("John");
 john.dateOfBirth = new Date(1998, 11, 10);
 console.log(john);
 console.log(`The person's name is ${john.name}\n${john.name} was born on ${john.dateOfBirth}`);
 console.log(`The person's name is ${john.getName()}\n${john.getName()} was born on ${new Intl.DateTimeFormat().format(john.dateOfBirth)}`);
 console.log(`The person's name is ${john.getName()}\n${john.getName()} was born on ${john.dateOfBirth.toISOString()}`);
 console.log(`The person's name is ${john.name}\n${john.getName()} was born on ${john.dateOfBirth.getFullYear()}-${john.dateOfBirth.getMonth()+1}-${john.dateOfBirth.getDate()}`);
// Task 2: 
 const employee = Object.create(person);
 employee.salary = 0.0;
 employee.hireDate = new Date();
 employee.doJob = function(jobTitle) {
     console.log(`${this.getName()} is a ${jobTitle} who earns ${this.salary}`);
 };
 const anna = Object.create(employee);
 anna.setName("Anna");
 anna.salary = 249995.50;
 anna.doJob("Programmer");
 
 // Alternative syntax using Object.create(proto, [propsObjects])
 const employee2 = Object.create(person, {
                                     salary: {
                                         writable: true,
                                         configurable: true,
                                         enumerable: true,
                                         value: 0.0
                                     },
                                     hireDate: {
                                         writable: true,
                                         configurable: true,
                                         enumerable: true,
                                         value: new Date()
                                     }
                     });
 
 
 employee2.doJob = function(jobTitle) {
     console.log(`${this.getName()} is a ${jobTitle} who earns ${new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(this.salary)}`);
 }
 const anna2 = Object.create(employee2);
 anna2.setName("Anna2");
 anna2.salary = 249995.50;
 anna2.doJob("Programmer2");
 
 // Task 3:
 // Constructor Function
 function Person(name, dateOfBirth) {
     this.name = name;
     this.dateOfBirth = dateOfBirth;
 }
 
 const peter = new Person("Peter", new Date(1985,10, 10));
 Person.prototype.toString = function() {
         return `{Name: ${this.name}, DateOfBirth: ${new Intl.DateTimeFormat().format(this.dateOfBirth)}}`;
 };
 console.log(peter.toString());
 const john2 = new Person("John", new Date(2001, 8, 21));
 console.log(john2.toString());