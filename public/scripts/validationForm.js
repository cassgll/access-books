/** Form validation */
const form = document.getElementById("form");
const email = document.getElementById("email");
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const password = document.getElementById("password");
const spans = document.getElementsByClassName("required");

let nameInput = document.getElementById("name");
let lastNameInput = document.getElementById("lastName");

const styleInputError = (element, index) => {
	element.style.border = "2px solid #fe4343";
	spans[index].style.display = "block";
};

const removeStyleInputError = (element, index) => {
	element.style.border = "";
	spans[index].style.display = "none";
};

function nameValidation() {
	if (
		nameInput.value === "" ||
		nameInput.value.length < 5
	) {
		styleInputError(nameInput, 0);
		return;
	} else {
		removeStyleInputError(nameInput, 0);
	}
}

function lastNameValidation() {
	if (
		lastNameInput.value === "" ||
		lastNameInput.value.length < 5
	) {
		styleInputError(lastNameInput, 1);
		return;
	} else {
		removeStyleInputError(lastNameInput, 1);
	}
}

function emailValidation() {
	if (emailRegex.test(email.value) && nameInput) {
		removeStyleInputError(email, 2);
	} else if (!emailRegex.test(email.value) && nameInput) {
		styleInputError(email, 2);
	} else if (
		emailRegex.test(email.value) &&
		nameInput === null
	) {
		removeStyleInputError(email, 2);
	} else {
		styleInputError(email, 2);
	}
}

function passwordValidation() {
	if (password.value.length < 8 && nameInput) {
		styleInputError(password, 3);
	} else if (!password.value.length < 8 && nameInput) {
		removeStyleInputError(password, 3);
	} else if (
		password.value.length < 8 &&
		nameInput === null
	) {
		styleInputError(password, 3);
	} else {
		removeStyleInputError(password, 3);
	}
}

if (spans.length > 2) {
	form.addEventListener("submit", (event) => {
		event.preventDefault();
		if (lastNameInput) {
			lastNameValidation();
		}
		if (nameInput) {
			nameValidation();
		}

		emailValidation();
		passwordValidation();
	});
}

if (spans.length === 2) {
	function emailValidation() {
		if (emailRegex.test(email.value) && nameInput) {
			removeStyleInputError(email, 0);
		} else if (!emailRegex.test(email.value) && nameInput) {
			styleInputError(email, 0);
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
			styleInputError(password, 1);
		} else if (!password.value.length < 8 && nameInput) {
			removeStyleInputError(password, 1);
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

		emailValidation();
		passwordValidation();
	});
}
