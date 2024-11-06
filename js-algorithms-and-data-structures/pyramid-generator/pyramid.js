const character = "#";
const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {
	rows.push(character.repeat(i+1));
}

function padRow(name) {
	return  name;
}
const call = padRow("Gabriel");
console.log(call);

let result = "";
console.log(result);

for (const row of rows) {
	result = result + "\n" + row;
}

function addTwoNumbers(a, b) {
	return a + b;
}

let sum = addTwoNumbers(5, 10);
console.log(sum)
