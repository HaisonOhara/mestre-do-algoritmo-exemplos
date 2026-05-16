let x = ["OP1","OP2","OP3","OP4"];
let Y = ["OP1","OP2","OP3","OP4"];


x = x.forEach(element => {
   return element.toLowerCase();
    // console.log(element)
});

Y =Y.map(element => {
   return element.toLowerCase();
    // console.log(element)
})

console.log(x)
console.log(Y)