export const PI = Math.PI;

export let user = "Jon";
//export default const password = "qwerty";
const password = "qwerty";
//export default password;

//only 1 default

const hello = () =>  console.log("Hello +ES6");

/*
export default function gretting() {
    console.log("Hello +ES6");
}
*/

export default function gretting() {
    console.log("Hello +ES6");
}

//cont let 
//function or class, default same line
export class Gretting{
    constructor(){
        console.log("Hello Classes +ES6")
    }
}