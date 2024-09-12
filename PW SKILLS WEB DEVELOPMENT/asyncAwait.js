function createPromise (){
    return new Promise(function ex (resolve,reject){
        //your code here
        setTimeout(function f (){
            console.log("Timer done");
            // resolve("resolver");
            reject(10);
        },3000)
    });
};
async function consume(){
    try{    
        console.log("inside function");
        const response = await createPromise();
        // const response1 = await createPromise();
        console.log("response in ",response);
    }catch (err){
        console.log("handled",err);
    }
}
console.log("start");
consume();
console.log("end");

//+++++++++++++++++++++++++++++++++++++++++
//run on website console
// fetch("https://type.fit/api/quotes")
// .then(function f (response){
//     return response.json();
// })
// .then(function f (value){
//     console.log(value);
// })
//++++++++++++++++++++++++++++++++++++=++++