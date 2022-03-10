import { Person } from "./person.js";

export class Employee extends Person{
    constructor(salary, hireDate){
        super();
        this.salary = salary;
        this.hireDate = hireDate;
    }
    doJob(jobTitle){
        const formattedSalary = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(this.salary)
        console.log(`${this.name} is a ${jobTitle} who earns ${formattedSalary}`);
    }
}