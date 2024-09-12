let obj = {id : 101,Name :"Naru",Job:"Jonin",Salary:10000};

let emp = new Object();
emp.id=102;
emp.Name="Naruto";
emp['Job']="Hokage"

console.log(emp);
console.log(obj);

function Emp2 (i,n,j,s){
    this.id = i;
    this.Name = n;
    this.Job = j;
    this.Salary = s;
}
const e =new Emp2(103,"Naruto Uzumaki","Careing",199999);
console.log(e);

console.log(emp.id);
console.log(emp['Name']);

emp.Salary = 200000; //Add Korar jonno
console.log(emp);
emp.id =15;
console.log(emp);
delete emp .id
console.log(emp);