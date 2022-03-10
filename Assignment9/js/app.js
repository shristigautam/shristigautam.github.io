//1

const person = {
    name: null,
    dateOfBirth: null,
    getName: function () {
        return this.name;
    },
    setName: function (name) {
        this.name = name;
    }
}

const John = Object.create(person);
John.setName("John");
John.dateOfBirth = new Date(1998, 11, 10); //The month here is 11 instead of 12 because javascript date startd from 0.

let formattedDate = John.dateOfBirth.getFullYear() + "-" +
    (John.dateOfBirth.getMonth() + 1) + "-" + John.dateOfBirth.getDate();
// new Intl.DateTimeFormat.format(John.dateOfBirth) //returns 12/10/1998
console.log(`The person’s name is ${John.getName()} \n ${John.getName()} was born on  ${formattedDate}`);

//2

//OR const Employee = Object.create(person);
const Employee = {
    salary: 0.0,
    hireDate: new Date(),
    doJob: function (jobTitle) {
        console.log(`${this.getName()} is a ${jobTitle} who earns ${new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(this.salary)}`);

    },
    setSalary: function (salary) {
        this.salary = { value: salary };
    }
};
Object.setPrototypeOf(Employee, person)

const Anna = Object.create(Employee);
Anna.setName("Anna");
Anna.salary = 249995.50;
Anna.doJob("Programmer");