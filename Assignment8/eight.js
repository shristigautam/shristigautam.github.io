const make_adder = function(inc) { //factory module
    var counter = 0;
    return function() {
        return counter += inc;
    }
};
add5 = make_adder(5);
add5();
add5();
console.log(add5()); //returns 15