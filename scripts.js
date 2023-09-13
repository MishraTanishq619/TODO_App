var list = document.querySelector("ol");

var text = document.getElementById("inp");

var arr = [];

function listing() {
	let x = "";
	for (const i in arr) {
		x += `<li key="${i}">${arr[i]}</li>`;
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
	// console.log(dets.target.outerHTML);

	console.log(dets.target.innerHTML);

	// arr.pop(dets.target.innerHTML);
	let i = arr.indexOf(dets.target.innerHTML);

	arr.splice(i, 1);

	listing();
});
