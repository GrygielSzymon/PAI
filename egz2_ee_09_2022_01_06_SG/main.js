function color(color) {
	let right = document.getElementById("right");
	right.style.background = color;
}
function fontColor() {
	let right = document.getElementById("right");
	let color = document.getElementById("colorC");
	right.style.color = color.value;
}
function fontSize() {
	let right = document.getElementById("right");
	let size = document.getElementById("size").value;
	right.style = "font-size: " + size + "%";
}
function border() {
	let img = document.getElementById("img");
	let isBorder = document.getElementById("border").checked;
	if(isBorder) {
		img.style.border = "1px solid white";
	} else img.style.border = "none";
}
function point(type) {
	let list = document.getElementById("list");
	list.style.listStyleType = typ;
}
