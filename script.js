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
    titleData.content = book.title;
    tableRow.append(titleData);

    let authorData = document.createElement('td');
    authorData.content = book.author;
    tableRow.append(authorData);

    let numPagesData = document.createElement('td');
    numPagesData.content = book.numPages;
    tableRow.append(numPagesData);

    let haveReadData = document.createElement('td');
    haveReadData.content = book.haveRead;
    tableRow.append(haveReadData);

    const libraryTable = document.querySelector("#library-table");
    libraryTable.append(tableRow);
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

const button = document.querySelector("#myButton");
button.addEventListener("click", () => {
    onRefreshBooksClicked();
});