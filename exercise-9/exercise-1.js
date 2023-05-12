const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

let keysArr = Object.keys(person);
keysArr.forEach((el => {
  console.log(el + ": " + person[el]);
}))
// Print values of person using Object.keys