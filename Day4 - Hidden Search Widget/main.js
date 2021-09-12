btn = document.querySelector(".btn");
inp = document.querySelector(".inp");
btn.onclick = function () {
	console.log("click");
	inp.classList.toggle("active");
};
