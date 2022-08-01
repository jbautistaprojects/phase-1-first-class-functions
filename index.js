

function receivesAFunction(callback) {
    callback();
}

function callback() {
 spy();
}

function spy() {
    return("chai");
}
receivesAFunction(callback);

function returnsANamedFunction() {
    return function namedFunction() {
        console.log('Returning a function');
    }
}
returnsANamedFunction();

// to call the function use this code:
//const x=returnsANamedFunction()
//x()

function returnsAnAnonymousFunction() {
    return function() {
        console.log('Returning an anonymous function');
    }
}

returnsAnAnonymousFunction();