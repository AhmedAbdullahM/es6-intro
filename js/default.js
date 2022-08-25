// function add(first,second){
   
//    second=second||0;
//     // if(second ===undefined){
//     //     second=0
//     // }
//     total=first+second;
//     return total;
// }

// const result=add(20);
// console.log(result)


function add(first = 0,second = 0){

    total=first+second;
    return total;
}

const result=add();
// console.log(result)


function fullName(first,second = 'ali'){

   const name=first+' '+second;
    return name;
}

const name=fullName('dushabe');
console.log(name)