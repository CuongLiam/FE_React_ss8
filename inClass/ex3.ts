// Generic interface
interface IName<T>{
    property : T;
    method(value : T): void;
}

// small example
interface IBox<T>{
    value : T;
}

const numberOfBoxes: IBox<number> = {value : 10};
console.log(numberOfBoxes);

// apply to func and callback func
interface IIdentityFn<T>{
    (args : T) : T; // func with no name
}

const identity : IIdentityFn<number> = (x) => x * 2;

console.log(identity(10));