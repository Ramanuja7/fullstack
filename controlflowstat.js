let age=17;
if(age<18){
    console.log("you are an minor ");


}
else if(age>=18 && age<65){
    console.log("you are an adult ");
}
else{
    console.log("u are old ");

}
//switch case
let day=3;
switch (day){
    case 1:
        console.log("monday");
        break;
    case 2:
         console.log("tuesday");
         break;
    case 3:
        console.log("wednesday");
        break;
    default:
        console.log("invalid day");


        
}
//for/while/
for(let i=0;i<5;i++){
    console.log("iterator ");
}
j=10;
while (j<20){
    j=j+1;
    console.log(j);

}
k=0;
do
{
    k++;
}
while(k<5);