const list = [
  ["Homer", "Simpson", "36"],
  ["Marge", "Simpson", "34"],
  ["Bart", "Simpson", "10"],
  ["Lisa", "Simpson", "8"],
  ["Maggie", "Simpson", "1"],
];

function add() {
  const content = document.createElement("div");

  const randomPerson = list[Math.floor(Math.random() * list.length)];
  console.log(randomPerson);

  const vorname = document.createTextNode("Vorname: ");
  const firstName = document.createElement("span");
  firstName.textContent = randomPerson[0];

  const nachname = document.createTextNode("Nachname: ");
  const lastName = document.createElement("span");
  lastName.textContent = randomPerson[1];

  const alter = document.createTextNode("Alter: : ");
  const age = document.createElement("span");
  age.textContent = randomPerson[2];

  content.classList.add("content");

  content.appendChild(vorname);
  content.appendChild(firstName);
  content.appendChild(document.createElement("br"));
  content.appendChild(nachname);
  content.appendChild(lastName);
  content.appendChild(document.createElement("br"));
  content.appendChild(alter);
  content.appendChild(age);
  content.appendChild(document.createElement("br"));

  document.getElementById("wrapper").appendChild(content);
}
