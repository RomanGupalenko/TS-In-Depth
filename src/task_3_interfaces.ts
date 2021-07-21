import { Category } from './task_1_basic-types';

const myBook: Book = {
    id: 5,
    title: 'Colors, Backgrounds, and Gradients',
    author: 'Eric A. Meyer',
    available: true,
    category: Category.CSS,
    pages: 200,
    markDamaged: (reason: string) => {
        console.log(`Damaged: ${reason}`);
    },
};
const logDamage: DamageLogger = (reason: string) => {
    console.log(`Damaged: ${reason}`);
};
const favoriteAuthor: Author = {
    name: 'Ann',
    email: 'ann@mail.ru',
    numBooksPublished: 300,
};
const favoriteLibrarian: Librarian = {
    name: 'Ann',
    email: 'ann@mail.ru',
    department: 'USA Department',
    assistCustomer: (custName: string): void => {
        console.log(`Cust Name: ${custName}`);
    },
};
const offer: any = {
    book: {
        title: 'Essential TypeScript',
    },
};

type BookProperties = keyof Book;

export interface Book {
    id: number;
    title: string;
    author: string;
    category: Category;
    available: boolean;
    pages?: number;
    markDamaged?: DamageLogger;
}

interface DamageLogger {
    (reason: string): void;
}

export interface Person {
    name: string;
    email: string;
}

interface Author extends Person {
    numBooksPublished: number;
}

export interface Librarian extends Person {
    department: string;
    assistCustomer: (custName: string) => void;
}

function printBook(book: Book): void {
    console.log(`${book.title} by ${book.author}`);
}

function getProperty(book: Book, property: BookProperties): any {
    if (typeof book[property] !== 'function') {
        return book[property];
    }

    return property;
}

// printBook(myBook);
// myBook.markDamaged('missing back cover');
// logDamage('missing back cover');
// console.log(offer.magazine);
// console.log(offer.magazine?.getTitle?.());
// console.log(offer.book.getTitle?.());
// console.log(offer.book.authors?.[0]);
// console.log(getProperty(myBook, 'title'));
// console.log(getProperty(myBook, 'markDamaged'));
// console.log(getProperty(myBook, 'id'));
