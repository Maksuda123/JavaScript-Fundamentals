const myArray = [1,2 ,3];
console.log(myArray.includes(2));
console.log(myArray["includes"](3))


const include = Symbol("My adda");
Array.prototype[include] = () => {
    
}