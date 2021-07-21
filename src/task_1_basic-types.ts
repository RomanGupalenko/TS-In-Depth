type Book = {
    id: number;
    title: string;
    author: string;
    category: Category;
    available: boolean;
};

type Library = {
    lib: string;
    books: number;
    avgPagesPerBook: number;
};

enum Category {
    JavaScript = 'JavaScript',
    CSS = 'CSS',
    HTML = 'HTML',
    TypeScript = 'TypeScript',
    Angular = 'Angular',
}

function getAllBooks(): ReadonlyArray<Book> {
    let booksList: ReadonlyArray<Book> = <const>[
        {
            id: 1,
            title: 'Refactoring JavaScript',
            author: 'Evan Burchard',
            category: Category.JavaScript,
            available: true,
        },
        {
            id: 2,
            title: 'JavaScript Testing',
            author: 'Liang Yuxian Eugene',
            category: Category.JavaScript,
            available: false,
        },
        { id: 3, title: 'CSS Secrets', author: 'Lea Verou', category: Category.CSS, available: true },
        {
            id: 4,
            title: 'Mastering JavaScript Object-Oriented Programming',
            author: 'Andrea Chiarelli',
            category: Category.JavaScript,
            available: true,
        },
    ];

    return booksList;
}

function logFirstAvailable(booksList: readonly Book[]): void {
    const lenght: number = booksList.length;
    const { title }: Book = booksList.find(book => book.available);

    console.log(`Lenght: ${lenght}, Book Title: ${title}`);
}

function getBookTitlesByCategory(categoryName: Category): Array<string> {
    const bookTitlesList: Array<string> = getAllBooks()
        .filter(book => book.category === categoryName)
        .map(book => book.title);

    return bookTitlesList;
}

function logBookTitles(bookTitlesList: string[]): void {
    console.log(`Book Titles List: ${bookTitlesList.join(', ')}`);
}

function getBookAuthorByIndex(index: number): [title: string, author: string] {
    const bookByIndex: Book = getAllBooks()[index];
    const { title, author } = bookByIndex;

    return [title, author];
}

function calcTotalPages(): bigint {
    let librariesList: ReadonlyArray<Library> = <const>[
        { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 },
    ];
    const totalPages: bigint = librariesList.reduce(
        (sum: bigint, library: Library) => sum + BigInt(library.books) * BigInt(library.avgPagesPerBook),
        0n,
    );

    return totalPages;
}

logFirstAvailable(getAllBooks());
logBookTitles(getBookTitlesByCategory(Category.JavaScript));
console.log(getBookAuthorByIndex(1));
