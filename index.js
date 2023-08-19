document.addEventListener("DOMContentLoaded", function (e) {
	const menuHandler = getDom(".mobile");
	const bottom = getDom(".bottom");
	let menu = false;

	menuHandler.addEventListener("click", () => {
		menu = !menu;
		bottom.classList.toggle("open");
		menuHandler.classList.toggle("m-open");
		//?
	});
});

function getDom(selector) {
	return document.querySelector(selector);
}
