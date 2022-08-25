
// friends array even 
const friends=(array)=>{
    let newArray=[];
    for(i=0; i<array.length; i++){
        element=array[i]
        name=element.length;
        if(name%2 === 0){
            newArray.push(element)
        }
        
    }
    return newArray;
}


const result=friends(['zia', 'monjur', 'sunny', 'marjan'])
// console.log(result)

// ------------------- second problem square

const getSquare=(array)=>{
let newArray=[];

for(i=0; i<array.length; i++){

   const index=array[i];
    square=Math.pow(index,2)
    newArray.push(square)
}
let sum=0;
for(i=0; i<newArray.length; i++){
   const index=newArray[i];
    sum=sum+index;
}
    return sum/newArray.length;

}

console.log(getSquare([12,12,13]))