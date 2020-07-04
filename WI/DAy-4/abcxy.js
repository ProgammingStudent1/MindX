let array = [
  Math.floor(Math.random() * 7),
  Math.floor(Math.random() * 7),
  Math.floor(Math.random() * 7),
  Math.floor(Math.random() * 7),
  Math.floor(Math.random() * 7),
  Math.floor(Math.random() * 7),
];
console.log(array);

function findSame() {
  for (let a = 0; a < array.length - 1; a++) {
    for (let b = a + 1; b < array.length; b++) {
      console.log(array[a], array[b]);
      if ((array[a] == array[b])) {
        return b;
      }
    }
  }
}

console.log(findSame());

function sortArray() {
  array.sort();
}
sortArray();
console.log(array);

function reverseArray() {
  array.reverse();
}

reverseArray();
console.log(array);

function findMax() {
  return Math.max(...array);
}

console.log(findMax());

function findTotal(total, num) {
  return total + num;
}

let a = array.reduce(findTotal);

console.log(a);
