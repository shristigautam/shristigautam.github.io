import { Employee } from "./model/employee.js";
import { Person } from "./model/person.js";
const anna = new Person("Ana Smith", new Date(1998, 11, 15));
const bob = new Person("Bob Jone", new Date(1945, 10, 16));
const carlos = new Person("Carlos Slim Helu", new Date(1976, 8, 24));
const people = [anna, bob, carlos];
console.log("Hello");
people.forEach(p => console.log(p.toString()));

const jim = new Employee(245990.00, new Date());
jim.name = "Jim Hanson";
jim.doJob("Software Engineer");
