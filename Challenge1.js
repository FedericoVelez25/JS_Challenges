//Mark
let marksWeight = 78;
let marksHeight = 1.69;

//John
let johnWeight = 92;
let johnHeight = 1.95;

let marksBmi = 78 / 1.69 ** 2;
let johnsBmi = 92 / (1.95 * 1.95);

console.log(marksBmi);
console.log(johnsBmi);

let markHigherBmi = marksBmi > johnsBmi;
console.log(markHigherBmi);
