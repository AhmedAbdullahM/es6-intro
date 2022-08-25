// breakup with var
// no more use var
// let:it to ressign
// const: do not allow it ressign

let money=25;
money=30;

// console.log(money)

const bird='jaan pakhi'
// bird ='mon pkahi'
const message=bird+' black diamond'
// console.log(message)

const numbers=[ 77,8,88,345,0,];
numbers.push(5)
numbers[3]=66;
// console.log(numbers)

const student={ name:'mofa', address:'rangpur'};
// student.name='kabul'
// console.log(student)

 let sum=0;
for(let i=0; i<numbers.length; i++){
    number=numbers[i];
    sum=sum+number;
    console.log(sum)
}
