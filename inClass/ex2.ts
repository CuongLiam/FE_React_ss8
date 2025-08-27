// Generic class
class ClassName<T>{
    val : T;
    constructor(val : T){
        this.val = val;
    }
    getVal() : T{
        return this.val;
    }
}

// const victim1 = new ClassName<string>("hello");
// console.log(victim1.getVal());
// const victim2 = new ClassName<boolean>(true);
// console.log(victim2.getVal());
// const victim3 = new ClassName<number>(23.5);
// console.log(victim3.getVal());

// more example
class StorageBox<T>{
    private data : T[] = [];

    addItem(item : T) : void{
        this.data.push(item);
    }
    getItem() : T[]{
        return this.data;
    }
}

//usage:
// const strBox = new StorageBox<string>();
// strBox.addItem("a");
// strBox.addItem("asdj");
// console.log(strBox.getItem());

// const numBox = new StorageBox<number>();
// numBox.addItem(2);
// numBox.addItem(3);
// console.log(numBox.getItem());

// Tuple
class CTuple<T, U>{
    public first: T;
    public second: U;
    constructor(first: T, second: U){
        this.first = first;
        this.second = second;
    }

    display() : void{
        console.log(`${this.first} - ${this.second}`);
    }
}

let t1 = new CTuple<string, number>("hello", 2);

t1.display()

// compile note: 
// class CTuple<T, U> {
//     constructor(public first: T, public second: U) {} // if u want to use this, compile it to js

//     display(): void {
//         console.log(`${this.first} - ${this.second}`);
//     }
// }
