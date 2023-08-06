const input = document.querySelector("#input-search");

// Carregar os primeiros 15 livros e mostrar na tela
// async function getBooks(valueSearch = "Alisson") {
// 	try {
// 		const response = await fetch(
// 			`https://www.googleapis.com/books/v1/volumes?q=${valueSearch}&key=AIzaSyB2ExKjH5DFfPENRmmLwa36INArILcXHCU`
// 		);
// 		if (!response.ok) {
// 			throw new Error(
// 				"Não foi possível obter as informações da API"
// 			);
// 		}
// 		const {
// 			kind: volBookApiResults,
// 			totalItems: allBookApiResults,
// 			items: bookApiResults,
// 		} = await response.json();

// 		const arrayOfBooks = await bookApiResults.map(
// 			({ volumeInfo }) => {
// 				// let titleBook = volumeInfo.title;
// 				// let imageLink = volumeInfo.imageLinks;
// 				return volumeInfo;
// 			}
// 		);

// 		Array.from(arrayOfBooks);

// 		return arrayOfBooks;
// 	} catch (error) {
// 		alert(error);
// 	}
// }
// async function renderBooks(books) {
// 	const ul = document.querySelector(".books__all");
// 	const fragment = document.createDocumentFragment();

// 	Array.from(books).forEach((book) => {
// 		const li = document.createElement("li");
// 		li.setAttribute("class", "books__items");
// 		const img = document.createElement("img");
// 		if (book.imageLinks === undefined) {
// 			img.setAttribute("src", "#");
// 			img.setAttribute(
// 				"alt",
// 				"Não existe capa para esse livro"
// 			);
// 		} else {
// 			img.setAttribute("src", book.imageLinks.thumbnail);
// 			img.setAttribute("alt", "Capa do livro");
// 		}
// 		const h2 = document.createElement("h2");
// 		h2.textContent = `${book.title}`;

// 		const p = document.createElement("p");
// 		if (book.description === undefined) {
// 			p.textContent = "Não possui descrição esse livro";
// 		} else {
// 			p.textContent = `${book.description}`.substring(
// 				0,
// 				90
// 			);
// 		}

// 		li.append(img, h2, p);
// 		fragment.append(li);
// 	});
// 	ul.append(fragment);
// }
// async function handlePageLoaded() {
// 	const books = await getBooks();
// 	renderBooks(books);
// }

input.addEventListener("change", () => {
	let valueInput = input.value;
	async function getBooks() {
		try {
			const response = await fetch(
				`https://www.googleapis.com/books/v1/volumes?q=${valueInput}&key=AIzaSyB2ExKjH5DFfPENRmmLwa36INArILcXHCU`
			);
			if (!response.ok) {
				throw new Error(
					"Não foi possível obter as informações da API"
				);
			}
			const {
				kind: volBookApiResults,
				totalItems: allBookApiResults,
				items: bookApiResults,
			} = await response.json();

			const arrayOfBooks = await bookApiResults.map(
				({ volumeInfo }) => {
					// let titleBook = volumeInfo.title;
					// let imageLink = volumeInfo.imageLinks;
					return volumeInfo;
				}
			);

			Array.from(arrayOfBooks);

			return arrayOfBooks;
		} catch (error) {
			alert(error);
		}
	}
	async function renderBooks(books) {
		const ul = document.querySelector(".books__all");
		const fragment = document.createDocumentFragment();

		Array.from(books).forEach((book) => {
			const li = document.createElement("li");
			li.setAttribute("class", "books__items");
			const img = document.createElement("img");
			if (book.imageLinks === undefined) {
				img.setAttribute("src", "#");
				img.setAttribute(
					"alt",
					"Não existe capa para esse livro"
				);
			} else {
				img.setAttribute("src", book.imageLinks.thumbnail);
				img.setAttribute("alt", "Capa do livro");
			}
			const h2 = document.createElement("h2");
			h2.textContent = `${book.title}`;

			const p = document.createElement("p");
			if (book.description === undefined) {
				p.textContent = "Não possui descrição esse livro";
			} else {
				p.textContent = `${book.description}`.substring(
					0,
					90
				);
			}

			li.append(img, h2, p);
			fragment.append(li);
		});
		ul.append(fragment);
	}
	async function handlePageLoaded() {
		const books = await getBooks();
		renderBooks(books);
	}

	handlePageLoaded();
	alert(valueInput);
});
