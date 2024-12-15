const myLibrary = [
    {
        title: "the hobbit",
        author: "jrr tolksdaddy",
        numPages: "like a ton",
        haveRead: "basically"
    }
];

function Book(title, author, numPages, haveRead) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.haveRead = haveRead;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBook(book) {
    const tableRow = document.createElement('tr');
    tableRow.className = "library-content-row";

    let titleData = document.createElement('td');
    titleData.textContent = book.title;
    tableRow.append(titleData);

    let authorData = document.createElement('td');
    authorData.textContent = book.author;
    tableRow.append(authorData);

    let numPagesData = document.createElement('td');
    numPagesData.textContent = book.numPages;
    tableRow.append(numPagesData);

    let haveReadData = document.createElement('td');
    haveReadData.textContent = book.haveRead;
    tableRow.append(haveReadData);

    const libraryTable = document.querySelector("tbody");
    libraryTable.appendChild(tableRow);
}

function displayLibrary() {
    for (let book of myLibrary) {
        displayBook(book);
    }
}

function clearLibraryContent() {
    let libraryContent = document.querySelectorAll(".library-content-row");
    for (let content of libraryContent) {
        content.remove();
    }
}

function onRefreshBooksClicked() {
    clearLibraryContent();
    displayLibrary();
}

const newBookButton = document.querySelector("#newBookButton");
newBookButton.addEventListener("click", () => {
    let titleInput = document.querySelector("#title");
    let authorInput = document.querySelector("#author");
    let numPagesInput = document.querySelector("#numPages");
    let haveReadInput = document.querySelector("#haveRead");

    myLibrary.push(new Book(titleInput.value, authorInput.value, numPagesInput.value, haveReadInput.value));
    onRefreshBooksClicked();
});

const button = document.querySelector("#myButton");
button.addEventListener("click", () => {
    onRefreshBooksClicked();
});