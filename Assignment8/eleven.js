// Using extension
const Employee = (function() {
    let name;
    let age;
    let salary;
    let address;
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

//Extension code
Employee.getAddress = function() {
    return address;
}
Employee.setAddress = function(newAddress) {
    address = newAddress;
}
Employee.setAddress("1000000 N 4th");
console.log(Employee.getAddress());