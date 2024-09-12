const user = {
    UserName: "Hitesh",
    Email: "hitesh@gmail.com"
}
const { UserName, Email } = user
console.log(Email);

//Arrey in Object
const myArr = [
    {
        UserName: "Naruto",
        Email: "naruto@gmail.com"
    },
    {
        UserName: "Boruto",
        Email: "boruto@gmail.com"
    }
];
myArr.map((exp)=>{
    console.log(exp.UserName);
})