console.log("Start");

setTimeout( function f(){
    console.log("Timeout 1");
},100)

setTimeout( function f(){
    console.log("Timeout 2");
},0)

console.log("End");

for(let i = 0; i<10000000; i++){}
