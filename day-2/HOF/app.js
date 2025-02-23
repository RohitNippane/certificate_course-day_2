// //case-1
// function a(b){
//     console.log("I am inside functin a");
//     b();
// }

// function b(){
//     console.log("I am inside function b");
// }

// console.log(a(b));

//case-2
function a(){
    console.log("I am inside functin a");

    function b(){
        console.log("I am inside function b");
    }
    return b;
}
let ans=a();
console.log(ans());
