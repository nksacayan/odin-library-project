const myLibrary = [];

function Book(title, author, numPages, haveRead) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.haveRead = haveRead;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayAllBooks() {
    const libraryTable = document.querySelector("#library-table");
    // delete all table rows that arent the header row
    const tableContent = libraryTable.querySelectorAll(":not(.table-header-row)");
    for (const contentRow in tableContent) {
        libraryTable.removeChild(contentRow);
    }
    // push a row for each book
}


const displayLibraryButton = document.querySelector("#display-library-button");
displayLibraryButton.addEventListener("click", () => {
    displayAllBooks();
});