const object = document.getElementById("object");

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  hobbies: ["Being #1 placeholder name"],
  city: "Atlantis",
};

console.table(person);

object.innerText = JSON.stringify(person, null, 2);
