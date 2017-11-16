const myNum = 5,
    myString = "Hello Universe",
    myArr = [1,2,3,4];

let myObj: any = { name: 'Bill'};

let anythingVariable:any = "Hey";
anythingVariable = 25; 

const arrayOne = [true, false, true, true],
    arrayTwo = [1, 'abc', true, 2];

myObj = { x: 5, y: 10 };

// object constructor
class MyNode {
    _priv: number;

    constructor(val: number) {
        this._priv = val;
    }
    doSomething() {
        this._priv = 10;
    };
};
var myNodeInstance = new MyNode(1);
console.log(myNodeInstance._priv);

function myFunction(): void{
    console.log("Hello World");
}

function sendingErrors(message: string):never {
	throw new Error(message);
}
