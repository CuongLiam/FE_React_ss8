const noIdeaFunction = <T, U>(a : T, b : U) =>{
    return [a, b];
} 

console.log(noIdeaFunction<string, number>("hello", 123));
console.log(noIdeaFunction<number, number>(203, 123));
console.log(noIdeaFunction<number, string>(203, "balls"));
