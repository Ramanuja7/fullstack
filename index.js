

/*console.log('hello world');
function sayHello(){
    console.log("hello form say hello function");

}
sayHello();
console.log('this is simple javascript program');*/
/*console.log("one");
console.log("two");
setTimeout(()=>{
    console.log("hello world");

},5000);
console.log('three');
console.log('four');
/*function sum(a,b){
    console.log(a+b);

}*/
/*function cal(a,b,s){
    s(a,b);
}
cal(11,33,(a,b)=>{
    console.log(a+b);
});
console.log("one");
console.log('two');
const hello=()=>{
    console.log("hello world");
}
setTimeout(hello,5000);*/
/*for(let i=0;i<5;i++){
    let str="";
    for(let j=0;j<5;j++){
        str+=j;

    }console.log(i,str);
}
function getData(dataid){
    setTimeout(()=>{
        console.log("fetching data for id:",dataid);
    },5000);
}
getData(1);
getData(2);
getData(3);*/
//call back hell
function getData(dataid,getnextdata){
    setTimeout(()=>{
        console.log("fetching data for ",dataid);
        if(getnextdata){
            getnextdata();
        }
    },5000);
}
getData(1,()=>{
    console.log("getting data 2..");
    getData(2,()=>{
        console.log("getting data 3..");
        getData(3);
    });
});
//to avoid call back hell we use promises   
//prommise is an object thta respresnts the eventual completion or failure of an asynchrous operation and its resuling value.it allows you to write asynchrouus code in a more mangeable way,avoiding call back hell.
//promise syntax
//const myPromie=new Promise
//((resolve,reject)=>{..})
//resolve is called when the asynchronous operation is successful 
//reject is called when the asynchronous operation fails
/*const myPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const success=false;
        if(success){
            resolve("data fetched successfully");
        }
        else{
            reject("error fetching data");
        }

    });
});
myPromise
    .then((data)=>{
    console.log("promise resolved wih data:",data);
})
    .catch((error)=>{
        console.error("Promise rejected with error",error);
    });
//using the promise
//the then()mehtod is called when the promise is resolved successfullu
//the catch()method is called when the promise is rejected with an error
//the finally()method is called when te promise is settled,regardless of whetherit was resolved or rejected*/
/*const myPromise= new Promise((resolve,reject)=>
{
    console.log("i am a promise");
    if(1<0){
        resolve(143);

    }
    reject("something went wrong");
});
myPromise
.catch((data)=>{
    console.log("something wrong");

})
function getData(dataid){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("fetching data for id",dataid);
            resolve("success");
        },2990);

    })
}
let result=getData(1024);
result
.then(result=>{
    console.log("first fetch",result);
    return getData(1025);
})
.then(result=>{
    console.log("second fetch",result);
    return getData(1026);
})
.then(result=>{
    console.log("first fetch",result);
    return getData(1027);
})
.then(result=>{
    console.log("first fetch",result);
    return getData(1028);
})
.catch(result=>{
    console.log("rejected");
})*/
/*const getpromise=()=>{
    return new Promise((resolve,reject)=>{
    console.log("i am a promise");
    resolve("resolved");
    reject("something went wrong");});
}
let result=getpromise();
result
.then(data=>{
    console.log("data");
});
.catch((error)=>{
        console.error("Promise rejected with error",error);
    });

});*/
//promise chaining
//promise chaining is used to enusre one task starts after the previous complete
function asyncFunc1(){
    return new Promise((reject,resolve)=>{
        setTimeout(()=>{
            console.log("data2");
            resolve("success");

        },2000)
    }
    );
}
function asyncFun2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data2");
            resolve("success");
        },4000);
    });
}
console.log("fetching data 1..");
let p=asyncFunc1();
p.then((data)=>{
    console.log("data fetched",data);
    let p1=asyncFun2();
    p1.then((data)=>{
        console.log("data fetched",data);
    });
});