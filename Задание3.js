function func1(a) {
    return function func2(b) {
        return a + b;
    }
}
const result = func1(10)(5);
console.log(result);