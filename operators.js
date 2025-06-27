let a=10;
let b=20;
console.log("addition"+ a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
//assignment operators
let x=10;
x+=5;
x-=5;
x/=5;
x*=6;
x/=10;
x%=1;
console.log("x after assingment operators" + x);
console.log("\n");
//comparison operators
let isEqual=(a==b);
let isStrictEqual = (a==b);
let isNotEqual =(a!=b);
let isStrictNotEqual=(a!==b);
let isGreaterThan=(a>b);
let isLessThan=(a<b);
let isGreaterThanOrEqual=(a>=b);
let isLessThanOrEqual=(a<=b);

console.log(isEqual,isStrictEqual,isNotEqual,isStrictNotEqual,isGreaterThan,isLessThan,isLessThanOrEqual,isGreaterThanOrEqual);
//logical operators
let and=(a>0 && b>0);
let or=(a>0 || b>0);
let not=!(a<b);
console.log(and,or,not);
//bitwise operators
let bitwiseand= a&b;
let bitwiseor=a|b;
let bitwisenxor=a^b;
let bitwiseNot=~a;
let leftshift=a<<1;
let rightshift=a>>1;
console.log('and'+bitwiseand+"or"+bitwiseor+'xor'+bitwisenxor+"not"+bitwiseNot+"leftshift"+leftshift+"rightshift"+rightshift);
let age=18;
let eligiblity=(age>=18)?'eligible to vote ': "not eligble";
console.log(eligiblity);
let variableType=typeof a;
console.log(variableType);