//Explanning Prototype in JS 

let myHero = ["Madara","Obito","Itachi"];
let yourHero = ['Batman',"Spiderman"];

let heroPower = {
    Madara:"Susano",
    Obito:"Infinite",
    Itachi:"Sonu Sharinggan",

    getItachiPower : function(){
        console.log(`Itachi Uchiha power is ${this.Itachi}`);
    }
}

Object.prototype.Naruto = function(){
    console.log(`Naruto is a main Characters`);
}

// Array.prototype.Naruto = function(){  //Arrey is show error
//     console.log(`Naruto is a main Characters`);
// }

console.log(myHero.Naruto());
console.log(heroPower.Naruto());

//inheritance

const AnimeMovie ={
    Name:"YourName",
    Rating:9.3,
    type:"Romance,Thrilar,Emotions",
    WouldWatch:true,
}

const Horror = {
    Name:"Conjuring",
    Rating:"8.1",
    type:"Horror,Suspance"
}

const Si_Fi = {
    Name:"Black Mirror",
    Rating:"8.7",
    type:"si-fi,Suspance,Thrillar",
    BestSeries:true,
}
const bollywood ={
    WouldWatch:false,

    __proto__:AnimeMovie
}

// console.log(bollywood.Name);

//Si_Fi .__proto__ = AnimeMovie
Object.setPrototypeOf(Si_Fi,Horror)
console.log(bollywood.Name);

String.prototype.truelength = function(){
    console.log(`True length is ${this.trim().length}`);
}

"Mitsuha     ".truelength();
"Taki     ".truelength();