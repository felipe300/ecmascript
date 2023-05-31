const username = "felipe";
let lastname = "gutierrez";
var age = 200;

const isAnAdult = () => {
  age = 12;
  return age >= 18 ? "Eres un Adulto" : "Eres menor de edad";
};

console.log(isAnAdult(age));

function fullname(first, second) {
  return `${first[0].toUpperCase()}${first.slice(
    1
  )} ${second[0].toUpperCase()}${second.slice(1)}`;
}

const fullnameASConst = (first, second) => {
  return `${first[0].toUpperCase()}${first.slice(
    1
  )} ${second[0].toUpperCase()}${second.slice(1)}`;
};

const myAnimal = {
  age: 4,
  name: "Sir lancelot",
  genre: "macho",
  race: "gato",
  likes: "cazar",
};

function printInfo() {
  const { name, age, genre, race, likes } = myAnimal;
  return `${name} es un ${race} de ${age}, ${genre} que adora ${likes}!`;
}

const newMyAnimal = {
  power: "lanzar rayos",
  dislike: "Los lunes",
  ...myAnimal,
  age,
  race: "Tigre milenario",
};

const createArr = (obj) => {
  let newObj = Object.values(obj);
  for (const val of newObj) {
    console.log(val);
  }
};

console.log(fullname(username, lastname));
console.log(printInfo(myAnimal));
// 'age' deberia ser '200', mantiene el valor dado por 'var'
console.log(newMyAnimal);
createArr(newMyAnimal);
