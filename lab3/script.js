import { get_items, add_item, update_item_title_by_id, delete_item_by_id, get_item_title_by_id } from "./data.js";

// 1a)
"use strict"
console.log("\nLAB3 - Problem 1 –------------------------------------------------------------------------------\n")
function computeSumOfSquares(...args) {
    return args.reduce((res, element) => res + element * element, 0);
}
console.log(computeSumOfSquares(1, 2, 3))

// 1b)
const oddOnly = function (...args) {
    return args.filter(item => item % 2 != 0);
}

console.log(oddOnly(1, 2, 3, 4, 5))


// 1c)

const fibo = (n, a, b) => {
    let result = [a, b];
    while (result.length < n) {
        result.push(result[result.length - 2] + result[result.length - 1]);
    }
    console.log(result);
    return result;
}


fibo(1, 0, 1); //expect 0 
fibo(3, 0, 1); //expect 0, 1, 1 
fibo(6, 0, 1); //expect 0, 1, 1 


// 2. Destructuring assignment:
console.log("\nLAB3 - Problem 2 –------------------------------------------------------------------------------\n")

let user = { name: "John", years: 30 };

let { name, years, isAdmin = false } = user;
let { name: n, years: y } = user; //another way

console.log("name", name, "years", years, "isAdmin", isAdmin);
console.log("name", n, "years", y, "isAdmin", isAdmin);


//3

console.log("\nLAB3 - Problem 3 –------------------------------------------------------------------------------\n")
export let libraryBooks = [
    { title: "The Road Ahead", author: "Bill Gates", ID: 1235 },
    { title: "Walter Isaacson", author: "Steve Jobs", ID: 4268 },
    { title: "The Road Ahead", author: "Bill Gates", ID: 4268 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", ID: 3257 }
];

//3a)
export const addBook = (title, author, id) => {
    let existBook = libraryBooks.find((item) => item.ID == id);
    if (!existBook) {
        let newBook = { title: title, author: author, ID: id };
        libraryBooks.push(newBook);
        return newBook;
    }
}
console.log(addBook("Book", "Loc", 1234)); //add new book happy case
console.log(addBook("Book", "Loc", 1236)); //add new book with same author, title but different ID
console.log(addBook("Book", "Loc", 1234)); //add new book but existed


//3b)
export const getTitles = () => {
    return libraryBooks.map((item) => item.title).sort();
}

console.log("Titles = ", getTitles());

//3c)
// o findBooks, which will take the keyword of title as input. It will find books which contain the given keyword in
// the title and return books (object array). The books should be sorted by ID.
export const findBooks = (keyword) => {
    return libraryBooks.filter((item) => item.title.includes(keyword)).sort(compareID);
}

const compareID = (a, b) => {
    if (a.ID > b.ID) return 1;
    if (a.ID == b.ID) return 0;
    if (a.ID < b.ID) return -1;
}
console.log("Findbook Road:", findBooks("Road"));
console.log("Findbook Book", findBooks("Book"));




console.log("\nLAB3 - Problem 4 –------------------------------------------------------------------------------\n")
// get_items, update_item_title_by_id, delete_item_by_id, get_item_title_by_id 

console.log("Test get_items empty:", get_items());
console.log("Test add item 1:", add_item({ title: "Book 1", author: "Loc", ID: 1 }));
console.log("Test add exist item 1:", add_item({ title: "Book 1", author: "Loc", ID: 1 }));
console.log("Test add item 2", add_item({ title: "Book 2", author: "Loc", ID: 2 }));
console.log("Test add item 3", add_item({ title: "Book 3", author: "Loc", ID: 3 }));
console.log("Test get_items after added: ", get_items());

console.log("Test update_item_title_by_id:", update_item_title_by_id(1, "Book 1 Updated"));
console.log("Test update_item_title_by_id not exist:", update_item_title_by_id(5, "Book 5 Updated"));
console.log("Test get_items after updated: ", get_items());

console.log("Test delete_item_by_id:", delete_item_by_id(3));
console.log("Test delete_item_by_id not exist:", delete_item_by_id(4));
console.log("Test get_items after deleted:", get_items());

console.log("Test get title by id:", get_item_title_by_id(1));
console.log("Test get title by id not exist:", get_item_title_by_id(5));
console.log("Test get_items final: ", get_items());
