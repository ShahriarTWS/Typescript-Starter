const formatValue = <T>(value: T) => {
    if (typeof value === "string") {
        return value.toUpperCase();
    } else if (typeof value === "number") {
        return value * 10;
    } else if (typeof value === "boolean") {
        return !value;
    } else {
        return null;
    }
}

// console.log(formatValue('hello'));
// console.log(formatValue(5));
// console.log(formatValue(true));

const getLength = <T>(value: T) => {
    if (typeof value === 'string') {
        return value.length;
    } else if (Array.isArray(value)) {
        return value.length;
    } else {
        console.log("Input must be a string or an array.")
    }
}

// console.log(getLength('typescript'));
// console.log(getLength([10, 20, 30, 40]));



class Person {
    name: string;
    age: number
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getDetails() {
        return `'Name: ${this.name}, Age: ${this.age}'`
    }

}

// const person1 = new Person('John Doe', 30);
// console.log(person1.getDetails());

// const person2 = new Person('Alice', 25);
// console.log(person2.getDetails());



type Books = {
    title: string;
    rating: number
}

type FilterByRating = (book: Books[]) => Books[]

const filterByRating: FilterByRating = (book: Books[]) => {
    const filterBook = book.filter((singleBook) => {
        return singleBook.rating >= 4.0 && singleBook.rating <= 5.0;
    })
    return filterBook;
}

// const books = [
//     { title: 'Book A', rating: 4.5 },
//     { title: 'Book B', rating: 3.2 },
//     { title: 'Book C', rating: 6.0 },
//     { title: 'Book C', rating: 5.0 },
// ];

// console.log(filterByRating(books));


type ActiveUser = {
    id: number;
    name: string;
    email: string;
    isActive: boolean
}

type FilterActiveUsers = (users: ActiveUser[]) => ActiveUser[]

const filterActiveUsers: FilterActiveUsers = (users: ActiveUser[]) => {
    return users.filter(user => user.isActive);
}

// const users = [
//     { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
//     { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
//     { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
// ];

// console.log(filterActiveUsers(users));
// console.log(users)


interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean
}


type PrintBookDetails = (boolDetails: Book) => void

const printBookDetails: PrintBookDetails = (bookDetails: Book) => {
    console.log(`Title: ${bookDetails.title}, Author: ${bookDetails.author}, Published: ${bookDetails.publishedYear}, Available: ${bookDetails.isAvailable ? "Yes" : "No"}`)
}

// const myBook: Book = {
//     title: 'The Great Gatsby',
//     author: 'F. Scott Fitzgerald',
//     publishedYear: 1925,
//     isAvailable: true,
// };

// printBookDetails(myBook);



type GetUniqueValues = <T>(array1: T[], array2: T[]) => T[]

const getUniqueValues: GetUniqueValues = <T>(array1: T[], array2: T[]) => {
    const result: T[] = [];

    const add = (value: T) => {
        let exists = false;

        for (let i = 0; i < result.length; i++) {
            if (result[i] === value) {
                exists = true;
                break;
            }
        }

        if (!exists) {
            result[result.length] = value;
        }
    };

    for (let i = 0; i < array1.length; i++) {
        add(array1[i]);
    }
    for (let i = 0; i < array2.length; i++) {
        add(array2[i]);
    }

    return result;
}


// const array1 = [1, 2, 3, 4, 5];
// const array2 = [3, 4, 5, 6, 7];
// console.log(getUniqueValues(array1, array2));


type Product = {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
};

type CalculateTotalPrice = (products: Product[]) => number

const calculateTotalPrice: CalculateTotalPrice = (products: Product[]) => {
    if (products.length === 0) {
        return 0;
    }
    return products.map((product) => {
        const totalPrice: number = product.price * product.quantity;
        if (product.discount) {
            const discountAmount: number = (totalPrice * product.discount) / 100;
            return totalPrice - discountAmount;
        }
        return totalPrice;
    }).reduce((sum, value) => sum + value, 0)
}

// const products = [
//     { name: 'Pen', price: 10, quantity: 2 },
//     { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
//     { name: 'Bag', price: 50, quantity: 1, discount: 20 },
// ];

// console.log(calculateTotalPrice(products));

// const products = [
//     { name: 'Pen', price: 10, quantity: 2 },
//     { name: 'Notebook', price: 25, quantity: 3 },
//     { name: 'Bag', price: 50, quantity: 1 },
// ];

// console.log(calculateTotalPrice(products));