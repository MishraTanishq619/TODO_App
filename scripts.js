var list = document.querySelector("ol");

var text = document.getElementById("inp");

var arr = [];

function listing() {
	let x = "";
	for (const i of arr) {
		x += `<li>${i}</li>`;
	}
	list.innerHTML = x;
}

document.querySelector("button").addEventListener("click", (t) => {
	// t.preventDefault();
	// x += `<li>${text.value}</li>`;
	// list.innerHTML = x;

	if (text.value == "") {
		alert("Empty TaskLine.");
	} else {
		arr.push(text.value);
		text.value = "";
		listing();
	}
});

document.addEventListener("keypress", (k) => {
	if (k.code == "Enter") {
		document.querySelector("button").click();
	}
});

document.querySelector("ol").addEventListener("click", (dets) => {
	// dets.target.outerHTML = "";
	// console.log(dets);
	// console.log(x);

	arr.pop(dets.target.outerHTML);
	listing();
});
