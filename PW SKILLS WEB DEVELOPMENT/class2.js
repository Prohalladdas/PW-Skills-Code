//Class Part  2
//class
class MyProdduct {
    constructor(n,p,r){
        console.log("Calling the constructor");
        this.Name = n;
        this.Price = p;
        this.Rating = r;
    }

    display(){
        console.log("Displaying the current product", this.Name,this.Price,this.Rating);
        // console.log("this refers to",this);
    }
}

// const Pd = new MyProdduct("Iphone",69000,4.8);
// console.log(Pd);
// Pd.display()

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//function
function Product (n,p,r){
    this.Name = n;
    this.Price = p;
    this.Rating = r;
}
// const p = new Product("Iqoo 12",52000,4.8);
// console.log(p);

//function 2
let Product2 = function (n,p,r){
    this.Name = n;
    this.Price = p;
    this.Rating = r;
}
// const p = new Product2("Dell",120000,4.5);
// console.log(p);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//variable 1 =>  keyword don't use
let Product3 =  (n,p,r)=>{
    this.Name = n;
    this.Price = p;
    this.Rating = r;
}
// const p = new Product3("Hell",120000,4.5);
// console.log(p);

//Variable 2
let fun ={
    Name:'Macbook',
    Price:200000,
    Rating:5,
}
console.log("Poduct is",fun);

// Variable 3
let obj ={
    L:10,
    hun(){
        console.log(this.L);
    }
}
// obj.hun();