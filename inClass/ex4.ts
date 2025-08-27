// Constrain Generic
// if no constrain
// const IHasLength = <T>(value : T) =>{
//     return value.length; // Property 'length' does not exist on type 'T'
//     // ts doesnt sure if value type T has property 'length;
// }

// with extends
interface IHasLength {
    length : number;
}

const displayLength = <T extends IHasLength>(value : T) =>{
    return value.length;
}

// Generic built- in
let nums : Array<number> = [1,2,3,4,5];
let names : Array<string> = ["abc", "alice", "balls"];

// more Generic datatype that we use alot:
//https://portal.rikkei.edu.vn/learn/54/document/1946