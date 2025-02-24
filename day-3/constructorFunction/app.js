//constroctor function
// function Details(){
//     this.name = 'Rohit';
//     this.age = 25;
//     this.address="SMD";
// }
// let user=new Details();
// console.log(user.name);

//custom constructor function
function Details(name,age,address){
    this.name = name;
    this.age = age;
    this.address=address;
    this.description=function(){
        return (`my name is ${this.name} and   My age is ${this.age} and address is ${this.address}`)
}
}
let user=new Details('Rohit',25,'SMD');
console.log(user);
let user1=new Details('vivek',21,'BDK');
console.log(user1);

console.log(user.description());
console.log(user1.description());

// let user3=new Details('Siddu',21,'NPN');
// console.log(user3);