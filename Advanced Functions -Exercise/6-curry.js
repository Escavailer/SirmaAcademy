function multi(a, b, c) {
    return a * b * c;
}

function curry(a) {
    return function(b) {
        return function(c) {
return multi(a, b, c);
        };
    };
}

console.log(curry(2)(3)(4));
