

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
for(let i=0;i<5;i++){
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
getData(3);