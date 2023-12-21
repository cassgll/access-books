/** Validação de formulário */
const form = document.getElementById("form");
const email = document.getElementById("email");
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const password = document.getElementById("password");
const spans = document.getElementsByClassName("required");

form.addEventListener("submit", (event) => {
	event.preventDefault();

	let nameInput = document.getElementById("name");

	const styleInputError = (element, index) => {
		element.style.border = "2px solid #e63636";
		spans[index].style.display = "block";
	};

	const removeStyleInputError = (element, index) => {
		element.style.border = "";
		spans[index].style.display = "none";
	};

	function emailValidation() {
		if (emailRegex.test(email.value)) {
			removeStyleInputError(email, 0);
		} else {
			styleInputError(email, 0);
		}
	}
	function passwordValidation() {
		if (password.value.length < 8) {
			styleInputError(password, 1);
		} else {
			removeStyleInputError(password, 1);
		}
	}

	emailValidation();
	passwordValidation();
});
