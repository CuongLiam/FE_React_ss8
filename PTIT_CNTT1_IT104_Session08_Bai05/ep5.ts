const noIdeaFunction = <T extends number>(arr : T[]) : T | undefined => { // extends number
    if(arr.find(x => x % 2 === 0)){
        return arr.find(x => x % 2 === 0);
    } else{
        return undefined;
    }
}

console.log(noIdeaFunction([1,2,3]));
console.log(noIdeaFunction([1,3,3]));
