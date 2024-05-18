let a = undefined;
let b = null;
let c = b + '4 2';

let d = Number(a)
console.log(d)          // NaN เพราะ undefined ถูกแปลงเป็น Number
console.log(typeof(d))           

let e = Number(b)
console.log(e)          // 0 เพราะแปลงเป็น Number
console.log(typeof(e))          

let f = Number(c)
console.log(f)          // Nan เพราะ null + string ถูกค่าแล้วแปลงเป็น Number
console.log(typeof(f))  

