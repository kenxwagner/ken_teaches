let person = {
    name: 'Michael',
    age: 19,
    sex: 'male'
};
let student = {
    name: 'Jacob',
    age: 42,
    xp: '8'
};

let newStudent = Object.assign({}, person, student);

console.log(newStudent.name); // Jacob
console.log(newStudent.age); // 42
console.log(newStudent.sex); // male
console.log(newStudent.xp); // 8