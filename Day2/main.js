window.addEventListener("DOMContentLoaded", function () {
	let status = [0, 100 / 3, (100 / 3) * 2, 100];
	let index = 0;
	let prevBtn = document.querySelector(".prev");
	let nextBtn = document.querySelector(".next");
	let bar = document.querySelector(".process__level-bar");
	let numbers = document.querySelectorAll(".process__level-item");
	prevBtn.onclick = () => {
		index != 0 && index--;
		checkDisabled();
		bar.style.width = `${status[index]}%`;
		numbers.forEach((e, i) => {
			i > index ? e.classList.remove("active") : null;
		});
	};
	nextBtn.onclick = () => {
		index != 3 && index++;
		checkDisabled();
		bar.style.width = `${status[index]}%`;
		numbers.forEach((e, i) => {
			i <= index ? e.classList.add("active") : null;
		});
	};
	const checkDisabled = () => {
		index == 0 ? (prevBtn.disabled = true) : (prevBtn.disabled = false);
		index == numbers.length - 1 ? (nextBtn.disabled = true) : (nextBtn.disabled = false);
	};
});
