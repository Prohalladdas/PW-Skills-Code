class Product{
    //Properrties --> varible --> data  Member
    Name;
    Price;
    Rating;

    //Behaviours --> functions --> Member functioon
    //Bottom this is function ,function name(){} ,function nehi likhna padta hai direcct function ki name likhna padta hai ,,,,display is function name.
    display(){
        console.log("Displaing the correct product");
    }

}

const p = new Product();
console.log(p);
p.display();