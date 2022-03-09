function Person() {
    this.name = null;
    this.dateOfBirth = null;
    this.getName = function() {
        return this.name;
    };
    this.setName = function(name) {
        this.name = name;
    };
    this.toString = function(string) {
        let formattedDate = this.dateOfBirth.getFullYear() + "-" +
            (this.dateOfBirth.getMonth() + 1) + "-" + this.dateOfBirth.getDate();
        console.log(`${this.getName()} was born on ${formattedDate}`);
        //To return as object
        // let returnString1 = { Name: this.name, DateOfBirth: formattedDate };
        let returnString = `{Name:${this.name}, DateOfBirth:${formattedDate} }`;
        console.log(returnString);
    }
}

const Peter = new Person();
Peter.setName("Peter");
Peter.dateOfBirth = new Date(10, 10, 1985);
Peter.toString();