export class Person {
    constructor(name, dateOfBirth) {
        this.name = name;
        this.dateOfBirth = dateOfBirth;
    }
    get name() {
        return this._name;
    }
    get dateOfBirth() {
        return this._dateOfBirth;
    }
    set name(value) {
        this._name = value;
    }
    set dateOfBirth(value) {
        this._dateOfBirth = value;
    }
    toString(){
        let formattedDate = this._dateOfBirth.getFullYear() + "-" +
            (this._dateOfBirth.getMonth() + 1) + "-" + this._dateOfBirth.getDate();
        return `{ Name: ${this._name}, DateOfBirth: ${formattedDate} } `;
    }
}