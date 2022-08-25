const fish={
    name:'King Hilsha',
    address:'chandpur',
    color:'silver',
    phone:'0128304545',
    price:4000
};

const phone=fish.phone;
// const color=fish.color;
console.log(phone)
console.log(phone)
console.log(phone)
console.log(phone)

const {age,name}={name:'almas', age:56, profession:'makeup artist'}
console.log(name)

const {color}=fish;
console.log(color)

// array destructuring

const [first,other]=[99,343,99];
console.log(other,first)

const gayok=['yousuf', 'junaid', 'sami'];
const [bura, died, now]=gayok;
console.log(died)

function getNames(){
    return ['abul','labul']
}

const [one,two]=getNames();

console.log(two,one)