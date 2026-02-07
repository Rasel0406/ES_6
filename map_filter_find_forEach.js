const student =[
    {name: "Rafi", age: 25, city: "Dhaka",mark: 80},
    {name: "Rafika", age: 22, city: "Chittagong",mark: 89},
    {name: "Rafina", age: 20, city: "Khulna",mark: 90},
    {name: "Rafiq", age: 30, city: "Sylhet",mark: 70},
]
const studentName = student.filter(x=>x.age<25);
const studentMark = student.map(num =>num.mark*0.80);
const goodStudent= student.find( x=>x.mark>85);
const studentForEach= student.forEach(x=>console.log(x.city));

console.log(studentMark);
console.log(studentName);
console.log(goodStudent);