let promise=new Promise(function(resolve,reject){
   console.log("wait for promise");
   setTimeout(function(){
        // let data="promise is resolved";
        // resolve(data);
       let error="promise is rejected";
       reject(error);
   },2000)
})
promise.then(function(data){
    console.log(data);
}).catch(function(error){
    console.log(error);
})

// async and await
