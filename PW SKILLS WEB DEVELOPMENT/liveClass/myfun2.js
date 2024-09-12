function register(public = "Sauske") {
    if (!public) {
        return "Go out home"
    }
    return public + "Welcome "
}
// console.log(register("Naruto"));


function ane(...number) {
    let a = 0

    for (const supervi of number) {
        a += supervi
    }
    return a
}

const use = {
    id:"123",
    name:"Nobita",
    email:"nobi69@gmaiil.com"
}
function add (obj){
    console.log(`Nobi name is ${obj.name} and his email id ${obj.email}`);
}
// add(use)

function ad1 (a,b){
    return a+b
}
const ad2 = (a,b) =>{
    return a+b
}
const ad3 = (a,b) => a+b
const ad4 = a => 2
const ad5 = a => ({name:"Narito"})


let forname =[1,2,3,4]
for (const num of forname) {
    console.log(num);
    
}