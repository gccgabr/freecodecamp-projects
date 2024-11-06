const character = "!";
const count = 10;
const rows = [];

let inverted = false;

for (let i = 1; i <= count; i++) {
	if (inverted) {
		rows.unshift(padRow(i, count));
	} else {
		rows.push(padRow(i, count));
	}
}
