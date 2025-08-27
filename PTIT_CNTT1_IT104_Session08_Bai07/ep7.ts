const flatten = <T>(arr : T[][]): T[]=>{
    return arr.flatMap(x => x);
}

let arr =  [[1, 2], [3, 4], [5, 6]];
let str =  [['apple', 'banana'], ['cherry'], ['date', 'elderberry']]

console.log(flatten(arr));
console.log(flatten(str));