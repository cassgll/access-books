feather.replace();

const keyGoogleBook =
	"AIzaSyCqasJmJlaFL93p1m9-knC2ACKD53xvlu4";
const input = document.querySelector("#input-search");
const ul = document.querySelector(".books__all");

input.addEventListener("change", () => {
	let valueInput = input.value;
	let startIndex = 0;
	let maxResults = 40;

	async function getBooks() {
		try {
			const response = await fetch(
				`https://www.googleapis.com/books/v1/volumes?q=${valueInput}&key=${keyGoogleBook}&printType=books&startIndex=${startIndex}&maxResults=${maxResults}`
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

			Array.from(bookApiResults);

			const arrayOfBooks = await bookApiResults.map(
				({ volumeInfo, id }) => {
					const book = {
						vol: volumeInfo,
						bookID: id,
					};

					return book;
				}
			);

			Array.from(arrayOfBooks);
			const bookUnique = new Map();

			arrayOfBooks.forEach((book) => {
				if (!bookUnique.has(book.bookID)) {
					bookUnique.set(book.bookID, book);
				}
			});
			const books = Array.from(bookUnique.values());

			startIndex += maxResults;

			return books;
		} catch (error) {
			alert(error);
		}
	}

	async function renderBooks(books) {
		const fragment = document.createDocumentFragment();

		Array.from(books).forEach((book) => {
			const URLimage = `https://books.google.com/books/publisher/content/images/frontcover/${book.bookID}?fife=h600&source=gbs_api`;
			const li = document.createElement("li");
			li.setAttribute("class", "books__items");
			const img = document.createElement("img");
			img.setAttribute("loading", "lazy");

			if (book.vol.imageLinks === undefined) {
				img.setAttribute(
					"src",
					"../assets/img/no-image.png"
				);
				img.setAttribute(
					"alt",
					"Não existe capa para esse livro"
				);
			} else {
				img.setAttribute("src", URLimage);
				img.setAttribute("alt", "Capa do livro");
			}

			const h2 = document.createElement("h2");
			h2.textContent = `${book.vol.title}`;

			li.append(img, h2);
			fragment.append(li);
		});
		ul.append(fragment);
		return;
	}

	function observeLastItem(itemsObserver) {
		const lastItem =
			document.querySelector(".books__all").lastChild;
		itemsObserver.observe(lastItem);
	}

	function handleNextItems() {
		const itemsObserver = new IntersectionObserver(
			async ([lastItem], observer) => {
				if (!lastItem.isIntersecting) {
					return;
				}

				observer.unobserve(lastItem.target);
				const item = await getBooks();
				renderBooks(item);
				observeLastItem(itemsObserver);
			}
		);
		observeLastItem(itemsObserver);
	}

	async function handlePageLoaded() {
		const books = await getBooks();
		renderBooks(books);
		handleNextItems();
	}

	handlePageLoaded();
});
