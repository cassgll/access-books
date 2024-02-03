/*==== FEATHER ICONS ====*/
feather.replace();

/*==== LIB SCROLL REVEAL ====*/

/*== INDEX.HTML ==*/
const homeItems =
	document.querySelector(".home__info").children;
for (let index = 0; index < homeItems.length; index++) {
	ScrollReveal().reveal(homeItems[index], {
		origin: "rigth",
		distance: "-75px",
		easing: "ease-in-out",
		delay: 100,
		duration: index * 100 + 500,
	});
}

ScrollReveal().reveal(".library__image", {
	origin: "bottom",
	distance: "75px",
	easing: "ease-in-out",
	delay: 100,
	duration: 500,
});

const libraryItems = document.querySelector(
	".library__informations"
).children;
for (
	let index = 0;
	index < libraryItems.length - 1;
	index++
) {
	ScrollReveal().reveal(libraryItems[index], {
		origin: "bottom",
		distance: "75px",
		easing: "ease-in-out",
		delay: 100,
		duration: 500,
	});
}

const libraryGroupItem = document.getElementsByClassName(
	"library__group__item"
);

let itemsLibrary = [];
Array.from(libraryGroupItem).forEach((item) => {
	itemsLibrary.push(item.children[0]);
	itemsLibrary.push(item.children[1]);
});

for (let index = 0; index < itemsLibrary.length; index++) {
	ScrollReveal().reveal(itemsLibrary[index], {
		origin: "bottom",
		distance: "75px",
		easing: "ease-in-out",
		delay: 100,
		duration: index * 100 + 500,
	});
}

const galleryItems =
	document.querySelector(".gallery").children;
const galleryImages = document.querySelector(
	".gallery__images"
).children;

for (let index = 0; index < galleryItems.length; index++) {
	ScrollReveal().reveal(galleryItems[index], {
		origin: "bottom",
		distance: "75px",
		easing: "ease-in-out",
		delay: 100,
		duration: 500,
	});
}

for (let index = 0; index < galleryImages.length; index++) {
	ScrollReveal().reveal(galleryImages[index], {
		origin: "bottom",
		distance: "75px",
		easing: "ease-in-out",
		delay: 100,
		duration: index * 100 + 500,
	});
}

const environment =
	document.querySelector(".environment").children;

for (let index = 0; index < environment.length; index++) {
	ScrollReveal().reveal(environment[index], {
		origin: "bottom",
		distance: "75px",
		easing: "ease-in-out",
		delay: 100,
		duration: index * 100 + 500,
	});
}

const advantageItems = document.getElementsByClassName(
	"advantage__item"
);
let itemsAdvantage = [];
Array.from(advantageItems).forEach((item) => {
	itemsAdvantage.push(item.children[0]);
	itemsAdvantage.push(item.children[1]);
});

for (
	let index = 0;
	index < itemsAdvantage.length;
	index++
) {
	ScrollReveal().reveal(itemsAdvantage[index], {
		origin: "bottom",
		distance: "75px",
		easing: "ease-in-out",
		delay: 100,
		duration: index * 100 + 500,
	});
}

const advantage =
	document.querySelector(".advantage").children[0];
ScrollReveal().reveal(advantage, {
	origin: "bottom",
	distance: "75px",
	easing: "ease-in-out",
	delay: 100,
	duration: 500,
});

const contact = document.querySelector(".contact").children;
for (let index = 0; index < contact.length; index++) {
	ScrollReveal().reveal(contact[index], {
		origin: "bottom",
		distance: "75px",
		easing: "ease-in-out",
		delay: 100,
		duration: index * 100 + 500,
	});
}

const about = document.querySelector(".about").children;

for (let index = 0; index < about.length; index++) {
	ScrollReveal().reveal(about[index], {
		origin: "bottom",
		distance: "75px",
		easing: "ease-in-out",
		delay: 100,
		duration: index * 100 + 500,
	});
}
