let pm ={
    id:106,
    name:'Lady Tsunade',
    age:120,
}

let keysObject = Object.keys(pm);
console.log(keysObject);

let valuesObject = Object.values(pm)
console.log(valuesObject);

let entriesObject = Object.entries(pm)
console.log(entriesObject);

Object.freeze(pm);
pm.id=108;
console.log(pm);

Object.seal(pm);
pm.height=10;
console.log(pm);

let p = Object.assign({Village:'Live'},pm)
console.log(p);

