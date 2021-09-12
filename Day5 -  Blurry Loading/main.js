let img = document.querySelector(".img");
let ld = document.querySelector(".ld");
let percent = 0;
const upPer = () => {
	percent++;
	ld.innerText = `${percent}%`;
	img.style.filter = `blur(${100 - percent}px)`;
	ld.style.opacity = `${(100 - percent) / 100}`;
};
setInterval(() => {
	percent != 100 && upPer();
}, 30);
