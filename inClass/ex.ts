// Generic function
const identity = <T>(args : T)=>{
    return args;
};

//another example

function loggingIdentities<T>(args : T[]) : T[]{
    console.log(args.length);
    return args;
}

let hello = identity<string>("dang it");
let num = identity(123); // ts automatically infer to number

// console.log(hello);
// console.log(num);

// tuple 
const getTuple = <T, U>(a: T, b: U): [T, U] =>{
    return [a, b];
}

let strPair = getTuple<string, number>("hello", 123);
let numPair = getTuple<number, string>(456, "balls");

// console.log(strPair);
// console.log(numPair);


// why use Generic?
// for exp get the first el of an arr

// const getFirst = (arr : any[]) : any=>{
//     return arr[0];
// };
// let number2 = getFirst([1,2,3,4,5]);
// number.toFixed(2); // 'number' only refers to a type, but is being used as a value here.

// generic solution

const getFirst = <T>(arr : T[]) : T =>{
    return arr[0];
}

let number2 = getFirst([1.312842,2,3,4,5]);
number2.toFixed(2); //no error anymore

let rounded = parseFloat(number2.toFixed(2));

console.log(number2);
console.log(rounded);
