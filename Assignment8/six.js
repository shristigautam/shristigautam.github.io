const count = {
    counter: 0, //must set the counter here
    add: function() {
        return ++this.counter; //should use "this" keyword
    },
    reset: function() {
        return this.counter = 0;
    }
}
console.log(count.add()); //returns 1
console.log(count.add()); //returns 2
console.log(count.reset()); //returns 0