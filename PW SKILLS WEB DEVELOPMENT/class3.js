class MyProdduct {
    #Rating;
    constructor(n,p,r){
        console.log("Calling the constructor");
        this.Name = n;
        this.Price = p;
        this.#Rating = r;
    }

    static staticName (){
        console.log("Calling the static method");
    }
    //+====================
    //getter and setter
    get ratingGetter (){
        console.log(this.#Rating);
    }
    set ratingSetter (r){
        if(r < 0) return;
        this.#Rating
    }
    //+================
    display(){
        console.log("Displaying the current product", this.Name,this.Price,this.#Rating);
        // console.log("this refers to",this);
    }
}

const Pd = new MyProdduct("Iphone",69000,4.8);
console.log(Pd);
// Pd.Name= "Fish";

Pd.ratingSetter=10;
Pd.ratingGetter;

Pd.display()
//call static
// Pd.staticName(); --> This method has wrong
MyProdduct.staticName(); //--> and this is right