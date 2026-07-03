import {db} from "./database.js";

db.on("populate", () => {
    db.books.bulkAdd([
        {
            id: 1,
            status: "want_to_read",
            title: "The Night Circus",
            bookID: "OL43146591M",
            author: "Erin Morgenstern",
            authorID: "OL6976354A",
            bookCoverID: "14579344"
        },
        {
            id: 2,
            status: "reading",
            title: "Project Hail Mary",
            bookID: "OL29597011M",
            author: "Andy Weir",
            authorID: "OL7234434A",
            bookCoverID: "15208263"
        },
        {
            id: 3,
            status: "read",
            title: "The Hobbit",
            bookID: "OL51709286M",
            author: "J.R.R. Tolkien",
            authorID: "OL26320A",
            bookCoverID: "15223072"
        },
        {
            id: 4,
            status: "dnf",
            title: "Infinite Jest",
            bookID: "OL2943602W",
            author: "David Foster Wallace",
            authorID: "OL448939A",
            bookCoverID: "13186006"
        }
    ])
})