const express = require("express");
const fs = require("fs/promises");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors())
let users = [];
const readdata = async () => {
  usersdata = await fs.readFile("./data.json", "utf8");
  users = JSON.parse(usersdata);
};
const writedata = async () => {
  await fs.writeFile("./data.json", JSON.stringify(users));
};
readdata();
app.get("/users", (req, res) => {
  res.json(users);
});
app.post("/users", (req, res) => {
  const { name, age } = req.body;
  const newid = users.length > 0 ? users[users.length - 1].id + 1 : 1;
  const newUser = {
    id: newid,
    name,
    age,
  };
  users.push(newUser);
  writedata();
  res.json({ message: "data received", data: newUser });
});

app.put("/users/:id", (req, res) => {
  const { name, age } = req.body;
  const uid = req.params.id;
  if (!name || !age)
    return res.status(400).json({ message: "enter name and age" });
  const index = users.findIndex((user) => user.id == uid);
  if (index == -1) return res.status(404).json({ message: "user not found" });
  else {
    users[index].name = name;
    users[index].age = age;
    writedata();
    res.json({ message: "data updated", data: users[index] });
  }
});

app.delete("/users/:id", (req, res) => {
    const uid = req.params.id;
  const index = users.findIndex((user) => user.id == uid);
  if (index == -1) return res.status(404).json({ message: "user not found" });
  else {
    users.splice(index, 1);
    writedata();
    res.json({ message: "user deleted" });
  }
  

})

app.listen(9000, () => {
  console.log("Server running on port 9000");
});