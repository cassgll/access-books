const buttonMobile = document.querySelector(
	".button__mobile"
);

let nav = document.querySelector("#nav");

function toggleMenu(event) {
	if (event.type === "touchstart") event.preventDefault();
	nav.classList.toggle("active");
}

function toggleMenuItems(){
	if (event.type === "touchstart") event.preventDefault();
	nav.classList.remove("active");
}

buttonMobile.addEventListener("click", toggleMenu);
buttonMobile.addEventListener("touchstart", toggleMenu);

const menuItems = document.querySelector("#menu").children;
for (let index = 0; index < menuItems.length; index++) {
	let item = menuItems[index];
	item.addEventListener("click", toggleMenuItems);
}
