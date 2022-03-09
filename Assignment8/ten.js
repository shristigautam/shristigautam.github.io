// Using revealing module pattern
const Employee = (function() {
    let name;
    let age;
    let salary;
    setAge = function(newAge) {
        age = newAge;
    }
    setSalary = function(newSalary) {
        salary = newSalary;
    }
    setName = function(newName) {
        name = newName;
    }

    getAge = function() {
        return age;
    }
    getSalary = function() {
        return salary;
    }
    getName = function() {
        return name;
    }
    return {
        setSalary: setSalary,
        setAge: setAge,
        setName: setName,
        increaseSalary: function(percentage) {
            return getSalary() + getSalary() * percentage / 100;
        },
        incrementAge: function(value) {
            return getAge() + value;
        }
    }
})();
Employee.setSalary(1000);
Employee.setAge(23);
console.log(Employee.increaseSalary(5));
console.log(Employee.incrementAge(2));