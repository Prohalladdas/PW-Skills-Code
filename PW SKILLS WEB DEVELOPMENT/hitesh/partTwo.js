const arr =[2,3,4];

arr.forEach(function(element,index,arr){ //function
    console.log(index,element,arr);
})

arr.forEach((element,index,arr) =>{ //arrow
    console.log("arrow",index,element,arr);
})

//forEach & map same work

const heros =["Spiderman","Superhero","Shaktiman","OnepunchMan"];

// heros.forEach((el) =>{  //forEach
//     console.log(el.toUpperCase());
// })

// heros.map((el) =>{  //map
//     console.log(el.toUpperCase());
// })

arr.map(function(element,index,arr){
    console.log(element,index,arr);
})
heros.map((h)=>{
    console.log(h.toUpperCase());
})

//filters (onek gulo object theke shesher common name likhe find kora)
console.log(heros);
const herosWithMan = heros.filter((h)=>{
    return h.endsWith('Man')
})
console.log(herosWithMan);

const cartBill =[26,30,50];
const sumOfCartBill =cartBill.reduce((prev,curr)=> prev+curr,0);
console.log(sumOfCartBill);



const gameScore =[200,250,350,560];
//check if all values are number
const gameScoreCheck = gameScore.every((v) => typeof v ==="number");
console.log("Check : ",gameScoreCheck);

