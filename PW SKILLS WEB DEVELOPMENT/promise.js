function createPromise (){
    return new Promise(function ex (resolve,reject){
        //your code here
        setTimeout(function f (){
            console.log("Timer done");
            // resolve("resolver");
            reject(10)
        },3000)
    });
};

console.log("Start");

let x = createPromise()
console.log("got anew Promise");

x.then(function f(value){
    console.log("First Promise",value);
}).catch(function c(value){
    console.log("second handled",value);
}).finally(function fc(value){
    console.log("always showing",value);
})
console.log("End");
