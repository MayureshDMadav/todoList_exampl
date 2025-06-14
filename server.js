const express = require("express");
const database = require("./modal/connect");

const app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  const todoList = await database.find();
  const response = await todoList;
  res.render("index", { list: response });
});

app.post("/", async (req, res) => {
  try {
    const enteredText = req.body["todo-entry"];
    const priority = req.body["priority"];
    const createNewEntry = await database.create({
      title: enteredText,
      priority: priority,
    });
    if (createNewEntry) {
      res.redirect("/");
    }
  } catch (e) {
    console.log(e);
  }
});

app.put("/editTodo", async (req, res) => {
  try {
    const todoid = req.body["todo_id"];
    const updatedText = req.body["edit_input"];
    const priority = req.body["priority"];
    const response = await database.findByIdAndUpdate(todoid, {
      title: updatedText,
      priority: priority,
    });

    if (response) {
      res.redirect("/");
    }
  } catch (e) {
    console.log(e);
  }
});

app.delete("/delete", async (req, res) => {
  try {
    const dataToDelete = req.body["todo_id"];
    const response = await database.findByIdAndDelete(dataToDelete);
    if (response) {
      res.redirect("/");
    }
  } catch (e) {
    console.log(e);
  }
});

app.listen(3000, () => {
  console.log("server started");
});
