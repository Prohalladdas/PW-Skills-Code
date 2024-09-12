//Ex-1
//Right
// const myglobalValue =0;

// function fun() {
//     const val1 = 1;
//     console.log(myglobalValue);

//     function fun2 (){
//         const val2 =2;
//         console.log(val2,val1,myglobalValue);

//         function fun3 (){
//             const val3 = 3;
//             console.log(val3,val2,val1,myglobalValue);
//         } 
//         fun3()
//     }
//     fun2();
// }
// fun();

//----------------------------------------------------
//Ex-2
//This is wrong
// function funcky (){
//     const innerFuncky ="Hello world";
// }
// funcky();
// console.log(innerFuncky);

//----------------------------------------------------
//Ex-3
//Right
// function superFun (){
//     let outerVal ="I am outer"

//     function minorFun(){
//         console.log(outerVal);
//     }
//     minorFun()
// }
// superFun();

//-----------------------------------------------------
// Ex-4
//Right
// const creammy ="Heyy....ulala"

// setTimeout(function funTi(){
//     console.log(creammy);
// },2000);

//-----------------------------------------------------
//Ex-5
let pageCount = 0
const item =[3,2,4,7,5,9]
item.forEach(function intertor(num){
    pageCount++
    console.log(num);
})
console.log("Page countt no :",pageCount);