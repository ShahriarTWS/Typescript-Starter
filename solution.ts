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






const getLength = <T>(value: T) => {
    if (typeof value === 'string') {
        return value.length;
    } else if (Array.isArray(value)) {
        return value.length;
    } else {
        console.log("Input must be a string or an array.")
    }
}





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
