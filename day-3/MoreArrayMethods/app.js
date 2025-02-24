// for-each

// let arr=[1,2,3,4,5];

// arr.forEach(function(itemem,index){
//     console.log(`my index is ${index} and value is ${itemem}`);
// })

//map()
// let marks=[10,25,45,15,22,34,40];
// let newMarks=marks.map(function(item,index){
//     console.log(`${item*item}`)
// })

//ex-2
// let marks=[10,25,45,15,22,34,40];
// let newMarksArray=marks.map(function(item,index){
//     return [item*2,index];
// })
// console.log(marks);

//filter()
let arr=[1,2,3,4,5];
let newArr=arr.filter(function(item,index){
        if(item>=4){
            console.log(item)
            return true;
    }
    return false;
})
// console.log(newArr);