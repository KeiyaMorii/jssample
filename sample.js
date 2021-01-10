function calcCircle(radius) {
    return radius * radius * 3.14;
}
function callFunc() {
    let area = calcCircle(5);
    return area;
}
console.log(callFunc());