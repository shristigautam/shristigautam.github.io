/**
 * form.js
 * 
 * @author Shristi Gautam
 * @since 2022-03-10
 */

"use strict";
export class Patient {
    #id = null;
    #firstName = null;
    #middleInitials = null;
    #lastName = null;
    #dateofBirth = null;
    #department = null;
    #isOutPatient = false;

    constructor(id, firstName, middeleInitials, lastName, dateofBirth, department, isOutPatient) {
        this.#id = id;
        this.#firstName = firstName;
        this.#middleInitials = middeleInitials;
        this.#lastName = lastName;
        this.#dateofBirth = dateofBirth;
        this.#department = department;
        this.#isOutPatient = isOutPatient;
    }

    getId() { return this.#id; }
    getfirstName() { return this.#firstName; }
    getmiddleInitials() { return this.#middleInitials; }
    getlastName() { return this.#lastName; }
    getdateofBirth() { return this.#dateofBirth; }
    getdepartment() { return this.#department; }
    getisOutPatient() { return this.#isOutPatient; }

    setId(value) { this.#id = value; }
    setfirstName(value) { this.#firstName = value; }
    setmiddleInitials(value) { this.#middleInitials = value; }

    setlastName(value) { this.#lastName = value; }
    setdateofBirth(value) { this.#dateofBirth = value; }
    setdepartment(value) { this.#department = value; }
    setisOutPatient(value) { this.#isOutPatient = value; }

    toString() {
        return `id=${this.#id},FName:${this.#firstName}, LName:${this.#lastName}, DOB: ${this.getdateofBirth()}, department: ${this.department}, outPatiend?:${this.#isOutPatient}`;
    }
}