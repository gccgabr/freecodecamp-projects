const character = "#";
const count = 8;
const rows = [];

/*
for (let i = 1; i <= count; i++) {
	rows.push(padRow(i, count));
	// Comment.
}
*/

/*
while (rows.length < count) {
	rows.push(padRow(rows.length+1, count));
}
*/

for (let i = count; i > 0; i -= 1) {
	rows.push(padRow(i, count));
}

function padRow(rowNumber, rowCount) {
	return " ".repeat(rowCount - rowNumber) + character.repeat(2*rowNumber-1) + " ".repeat(rowCount - rowNumber);
}

let result = "";
console.log(result);

for (const row of rows) {
	result = result + "\n" + row;
}
