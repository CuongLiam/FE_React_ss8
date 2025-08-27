const findElement = <T>(arr : T[], value : T) : T | undefined=>{
    if(arr.find(e=> e === value)){
        return arr.find(e=> e === value);
    } else{
        return undefined;
    }
}

const a = [1,2,3,4,5,6];
console.log(findElement(a, 5));
console.log(findElement(a, 7));

const str = ["abc", "def", "hig"];
console.log(findElement(str, "def"));
console.log(findElement(str, "balls"));
