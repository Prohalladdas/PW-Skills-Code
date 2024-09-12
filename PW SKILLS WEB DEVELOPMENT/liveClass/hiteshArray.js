//SPREADE OPERATOR

let oneArry = [1, 2, 3, 4]
let twoArry = [5, 6, 7, 8]

// let threeArrt =oneArry.concat(twoArry);
// let threeArrt =[...oneArry,...twoArry] //concat or ... (same inside the array adding)

// let threeArrt =[oneArry,twoArry]
// let threeArrt =[oneArry+twoArry]
// console.log(threeArrt);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//REST OPERATOR

function manyArguement() {
    console.log(typeof arguments);
    let args = Array.from(arguments)
    let finalArr = args.map(e => e)
    console.log(finalArr);
}

function manyArguement2(...args) {
    console.log(typeof args);
    // let arr1 = Array.from(arguments)
    let finalArr = args.map(e => e)
    console.log(finalArr);
}

// manyArguement(1,2,3)
// manyArguement2(4,5,6)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const name1 = ["spiderman", "flash"];
// const name2 = ["superman", ...names, "Thor"];

const siteName = "PwSkills" //SPREAD OPERATOR
// console.log([...siteName]);

function PwSkills(...values) { //REST OPERATOR
    return values
}
// console.log(PwSkills("superman","flash"));

// ----------------------------------------------------------------------------------------------------------
// SET OPETATER

let setop = new Set();
// console.log(setop.size);

let myArray = [1, 2, 3, 4, 3, 1]  //Uniqe number store
let newSet = new Set(myArray)
// console.log(newSet);
// console.log(newSet.has(4));

newSet.delete()
newSet.clear()
newSet.add(69)
// console.log(newSet);

// set defference 
function setDifference(setA, setB) {
    return new Set([...setA].filter(el => !setB.has(el)))
}
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// MAP

let map = new Map()
console.log(map.size);

let arr = [
    [1, "Madara"],
    [2, "Obito"],
    [3, "Nagato"],
    [4, "Itachi"],
]
arr.map((arrayItem)=> map.set(arrayItem[0],arrayItem[1]))
// console.log(arr);