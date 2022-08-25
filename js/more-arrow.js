// arrow function

const multiply=(a,b) =>a*b;

const result=multiply(4,5);
// console.log(result)

// no parameter

const getPie=() => 3.14;

// one parameter
const doubleIt=(num)=>num*3;


// one simple parameter
const price=rate=>rate*5;
console.log(price(9))

// multi line arrow function 
const number=(x,y,z)=>{
    const sum=x+y;
    const sum1=y+z;
    total=sum*sum1;
    totalDivider=total%4;
    return totalDivider;
}

console.log(number(5,6,9))