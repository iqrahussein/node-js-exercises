const express = require("express");

const app = express();
app.use(express.json());

let books = [
  { id: 1, title: "Atomic Habits", author: "James Clear" },
  { id: 2, title: "Deep Work", author: "Cal Newport" },
];

app.get("/", (req, res) => {
  res.json(books);
});

app.get("/books/:id", (req, res) => {
  const book = books.find((b) => req.params.id == b.id);
  res.json(book);
});

app.post("/books", (req, res) => {
  const newUsers = {
    id: books.length + 1,
    title: req.body.title,
  };
  books.push(newUsers);
  res.status(201).json(newUsers);
});
app.delete("/books/:id", (req, res) => {
  books = books.filter((b) => b.id != req.params.id);
  res.send("user deleted");
});
app.put("/books/:id", (req, res) => {
  const book = books.find((b) => b.id == req.params.id);
  if (!book) return res.status(404).send("not founs");
  book.title = req.body.title;
  res.json(book);
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
