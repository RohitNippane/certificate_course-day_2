//sync we can use for sequence of execution
// console.log("fisrt");
// console.log("second");
// console.log("third");

//ansync we can use setTimeout() function to change the order of execution
//1.using setTimeout() function
// console.log("fisrt");
// console.log("second");
// setTimeout(function(){
//     console.log("it will exe third after 4 sec");
// },4000)
// console.log("fourth");

//2.using setInterval() function
// setInterval(function(){
//     console.log("it will exe  after 3 sec");
// },3000)

let count=0;
let intervalID=setInterval(function(){
    count++;
    console.log(`my count is: ${count}`);
    if(count==5){
        clearInterval(intervalID);
        console.log("task completed");
    }
},1000)
