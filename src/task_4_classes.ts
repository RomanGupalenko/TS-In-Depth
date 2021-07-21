import { Category } from './task_1_basic-types';
import { Book, Librarian, Person } from './task_3_interfaces';

type PersonBook = Person & Book;
export type BookOrUndefined = Book | undefined;

abstract class ReferenceItem {
    // title: string;
    // year: number;

    // constructor(newTitle: string, newYear: number) {
    //     console.log('Creating a new ReferenceItem...');
    //     this.title = newTitle;
    //     this.year = newYear;
    // }

    private _publisher: string;
    #id: number;
    static department: string = 'New Department';

    get publisher(): string {
        return this._publisher;
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    constructor(public title: string, protected year: number, id: number) {
        this.#id = id;
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`);
        console.log(`Department: ${ReferenceItem.department}`);
    }

    getID(): number {
        return this.#id;
    }

    abstract printCitation(): void;
}

class Encyclopedia extends ReferenceItem {
    constructor(title: string, year: number, id: number, public edition: number) {
        super(title, year, id);
    }

    printItem(): void {
        super.printItem();
        console.log(`Edition: ${this.edition} (${this.year})`);
    }

    printCitation(): void {
        console.log(`${this.title}-${this.year}`);
    }
}

class UniversityLibrarian implements Librarian {
    constructor(public name: string, public email: string, public department: string) {}

    assistCustomer(custName: string): void {
        console.log(`${this.name} is assisting ${custName}`);
    }
}

// const ref: ReferenceItem = new ReferenceItem('New Title', 2020, 10);
// ref.publisher = 'New Publisher';
// console.log(ref.publisher.toUpperCase());
// console.log(ref);
// console.log(ref.getID());
// console.log(ref.printItem());

const refBook: Encyclopedia = new Encyclopedia('New Title', 2020, 10, 3);
refBook.printItem();
refBook.printCitation();

const favoriteLibrarian: Librarian = new UniversityLibrarian('Ann', 'ann@mail.ru', 'USA Department');
favoriteLibrarian.assistCustomer('Bob');

const personBook: PersonBook = {
    author: 'Ann',
    available: true,
    category: Category.TypeScript,
    email: 'ann@mail.ru',
    id: 10,
    name: 'Ann',
    title: 'TypeScript In Depth',
    pages: 220,
    markDamaged: (reason: string) => {
        console.log(`Reason: ${reason}`);
    },
};
console.log(personBook);
