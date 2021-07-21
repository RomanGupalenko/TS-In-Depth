/* eslint-disable no-redeclare */
import { getAllBooks, getBookTitlesByCategory, logBookTitles, logFirstAvailable } from './task_1_basic-types';
import { Book } from './task_3_interfaces';

const myID = createCustomerID('Ann', 10);
let idGenerator: (name: string, id: number) => string = (name: string, id: number) => `${id}-${name}`;
idGenerator = createCustomerID;
const myBooks = сheckoutBooks('Ann', 1, 2, 4);
const checkedOutBooks = getTitles(false);

function createCustomerID(name: string, id: number): string {
    return `${id}-${name}`;
}

function createCustomer(name: string, age?: number, city?: string): void {
    let customerInfo = `Name - ${name}`;

    if (age) {
        customerInfo += `, Age - ${age}`;

        if (city) {
            customerInfo += `, City - ${city}`;
        }
    }

    console.log(`Created Customer: ${customerInfo}`);
}

function getBookByID(id: number): Book {
    const bookByID = getAllBooks().find(book => book.id === id);

    return bookByID;
}

function сheckoutBooks(customer: string, ...bookIDs: number[]): string[] {
    const bookTitlesList: string[] = bookIDs
        .map(id => getBookByID(id))
        .filter(book => book.available)
        .map(book => book.title);

    console.log(`Customer Name: ${customer}`);

    return bookTitlesList;
}

function getTitles(available: boolean): string[];
function getTitles(author: string): string[];
function getTitles(id: number, available: boolean): string[];
function getTitles(...params): string[] {
    if (typeof params[0] === 'boolean') {
        return getAllBooks()
            .filter(book => book.available === params[0])
            .map(book => book.title);
    }

    if (typeof params[0] === 'string') {
        return getAllBooks()
            .filter(book => book.author === params[0])
            .map(book => book.title);
    }

    if (typeof params[0] === 'number' && typeof params[1] === 'boolean') {
        const bookById = getBookByID(params[0]);

        return bookById.available === params[1] ? [bookById.title] : [];
    }
}

function assertStringValue(value: any): boolean {
    if (typeof value !== 'string') {
        console.error('value should have been a string');
        return false;
    }

    return true;
}

function bookTitleTransform(bookName: any): string | void {
    if (assertStringValue(bookName)) {
        return [...bookName].reverse().join('');
    }
}

// console.log(`MyID: ${myID}`);
// console.log(`Generated ID: ${idGenerator('Ann', 10)}`);
// createCustomer('Ann');
// createCustomer('Ann', 10);
// createCustomer('Ann', 10, 'USA');

// logBookTitles(getBookTitlesByCategory());
// logFirstAvailable();
// console.log(getBookByID(1));
// console.log(myBooks);
// console.log(checkedOutBooks);
// bookTitleTransform('Ann');
// bookTitleTransform(10);
