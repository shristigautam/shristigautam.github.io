//1

const person = {
    name: null,
    dateOfBirth: null,
    getName: function() {
        return this.name;
    },
    setName: function(name) {
        this.name = name;
    }
}

const John = Object.create(person);
John.setName("John");
John.dateOfBirth = new Date(1998, 11, 10); //The month here is 11 instead of 12 because javascript date startd from 0.

console.log(`The person’s name is ${John.getName()}`);
let formattedDate = John.dateOfBirth.getFullYear() + "-" +
    (John.dateOfBirth.getMonth() + 1) + "-" + John.dateOfBirth.getDate();
console.log(`${John.getName()} was born on  ${formattedDate}`);

//2
const Employee = {
    salary: 0.0,
    hireDate: new Date(),
    doJob: function(jobTitle) {
        console.log(`${this.name} is a ${jobTitle} who earns $${this.salary}`);

    },
    setSalary: function(salary) {
        this.salary = { value: salary };
    }
};
Object.setPrototypeOf(Employee, person)

const Anna = Object.create(Employee);
Anna.setName("Anna");
Anna.salary = 249995.50;
Anna.doJob("Programmer");