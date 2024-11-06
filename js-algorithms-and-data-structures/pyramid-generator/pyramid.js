const character = "#";
const count = 8;
const rows = [];

let inverted = true;

for (let i = 1; i <= count; i++) {
	if (inverted) {
		rows.unshift(padRow(i, count));
	} else {
		rows.push(padRow(i, count));
	}
}
