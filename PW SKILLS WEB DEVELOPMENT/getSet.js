class complexNumber{
    #real;
    #imag;

    constructor(r,i){
        this.#real = r;
        this.#imag = i;
    }
    
    display (){
        console.log(this.#real," + i",this.#imag);
    }

    //get and set 
    get realName (){
        return this.#real;
    }
    get imagName (){
        return this.#imag;
    }
    addComplexNumber(c){
        this.#real += c.realName;
        this.#imag += c.imagName;
    }

}

const c1 = new complexNumber(2,5);
c1.display();

const c2 = new complexNumber (4,4);
c1.addComplexNumber(c2);
c1.display();