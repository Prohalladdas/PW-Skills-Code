const obj1 ={
    name:"Naruto",
    role:"Ninja",
    dreamHokage:true,

    registerUser : function (){
        console.log(`${this.name} is nindo way `);
    }
}
// console.log(obj1.name);

const obj2 ={
    10:"number10",
    20:"number20",
}
// console.log(obj2);

//Symbol
const name1 = Symbol("");
const name2 = Symbol("");

const obj3 ={
    [name1]:"Hashimura",
    [name2]:"Madara"
}
// console.log(obj3[name1]);
// console.log(obj3[name2]);

const final ={
    Name:"Itachi",
    Job:"Spy",
    Wanted:true
}
final.Name="Itachi Uchiha";
final["Wanted"]=false;
console.log(final);
console.log(Object.keys(obj3));