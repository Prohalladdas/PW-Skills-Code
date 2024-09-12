const powerTwo = (n)=>{
    return n ** 2
}

function powerCube(powerTwo,n){
    return powerTwo(n)*n
}
// console.log(powerCube(powerTwo,3));

function sayHello (){
    return()=>{
        console.log("Konichiwa");
    };
};
let gussValue = sayHello()
// console.log(gussValue);

// gussValue()

const higherOrder = n =>{
    const oneFun = m =>{
        const twoFun = p =>{
            return n + m + p
        }
        return twoFun
    }
    return oneFun
}
// console.log(higherOrder(3)(4)(5));

function attitude() {
    console.log("Heyy Kakpakhi" ,Math.random());
}

setInterval(attitude,1000);
// setTimeout(attitude,3000);