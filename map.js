const number = [4,10,3,14,5,6,7,8,9,11];
const square = number.map(num=> num*num);
const mulIndex = number.map((x,index)=> x*index);
console.log(mulIndex)
console.log(square)