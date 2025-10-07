const add = (x, y) => {
    if(x < 0) return 0;
    return x + y;
}

const sub = (x,y) => {
    if(x < 0) return 0;
    return x - y;
}

const multiple = (x,y) => x * y

const divide = (x,y) => x/y

console.log(add(1, 2)); // 3
console.log(sub(2,1));
console.log(divide(4,2));