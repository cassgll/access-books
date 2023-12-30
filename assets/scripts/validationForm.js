/** Form validation */
const form = document.getElementById("form");
const email = document.getElementById("email");
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const password = document.getElementById("password");
const spans = document.getElementsByClassName("required");

let nameInput = document.getElementById("name");

const styleInputError = (element, index) => {
	element.style.border = "2px solid #e63636";
	spans[index].style.display = "block";
};

const removeStyleInputError = (element, index) => {
	element.style.border = "";
	spans[index].style.display = "none";
};

function nameValidation() {
	if (
		nameInput.value === "" ||
		nameInput.value.length < 10
	) {
		styleInputError(nameInput, 0);
		return;
	} else {
		removeStyleInputError(nameInput, 0);
	}
}
function emailValidation() {
	if (emailRegex.test(email.value) && nameInput) {
		removeStyleInputError(email, 1);
	} else if (!emailRegex.test(email.value) && nameInput) {
		styleInputError(email, 1);
	} else if (
		emailRegex.test(email.value) &&
		nameInput === null
	) {
		removeStyleInputError(email, 0);
	} else {
		styleInputError(email, 0);
	}
}

function passwordValidation() {
	if (password.value.length < 8 && nameInput) {
		styleInputError(password, 2);
	} else if (!password.value.length < 8 && nameInput) {
		removeStyleInputError(password, 2);
	} else if (
		password.value.length < 8 &&
		nameInput === null
	) {
		styleInputError(password, 1);
	} else {
		removeStyleInputError(password, 1);
	}
}

form.addEventListener("submit", (event) => {
	event.preventDefault();

	if (nameInput) {
		nameValidation();
	}
	emailValidation();
	passwordValidation();
});
