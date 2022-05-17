let n=5;
let facFor=1;
let facWhile=1;

for(let i=n; i>0; i--) {
    facFor = facFor*i;
}

let i=n;
while(i > 0) {
    facWhile = facWhile*i;
    i--;
}

console.log("!"+n +" = " +facFor +" For loop")
console.log("!"+n +" = " +facWhile +" While loop")



