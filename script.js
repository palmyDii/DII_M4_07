const n = 9;

let n1For = 0, n2For = 1, nextTermFor;
for (let i = 0; i < n; i++) {
    nextTermFor = n1For + n2For;
    n1For = n2For;
    n2For = nextTermFor;
}

let n1While = 0, n2While = 1, nextTermWhile;
let i=0;
while (i < n) {
    nextTermWhile = n1While + n2While;
    n1While = n2While;
    n2While = nextTermWhile;
    i++;
}

console.log('For:   Fibonacci(' +n +') = ' + n1For);
console.log('While: Fibonacci(' +n +') = ' + n1While);