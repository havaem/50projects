image = document.querySelectorAll(".images__item");
const clearActive = () => {
	image.forEach((e) => {
		e.classList.remove("active");
	});
};
image.forEach((e) => {
	e.onclick = function () {
		clearActive();
		e.classList.add("active");
	};
});
