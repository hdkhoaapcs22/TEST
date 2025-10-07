const add = (x, y) => {
    if(x < 0) return 0;
    return x + y;
}

const sub = (x,y) => {
    if(x < 0) return 0;
    return x - y;
}

console.log(add(1, 2)); // 3
console.log(sub(2,1))