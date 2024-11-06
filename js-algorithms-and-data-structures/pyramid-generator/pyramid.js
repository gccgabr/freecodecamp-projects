const character = "#";
const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {
	rows.push(padRow(i+1, count));
}

function padRow(rowNumber, rowCount) {
	return " ".repeat(rowCount - rowNumber) + character.repeat(rowNumber) + " ".repeat(rowCount - rowNumber);
}

let result = "";
console.log(result);

for (const row of rows) {
	result = result + "\n" + row;
}
