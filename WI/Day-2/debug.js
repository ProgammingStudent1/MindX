let students = [{
    name: "Hiếu",
    age: 12
  },{
    name: "Tuấn Anh",
    age: 27
  },{
    name: "Phong",
    age: 14
  },{
    name: "Minh",
    age: 13
  }]

console.log(students);

const deleteOldest = (studentList) => {
    let max = 0;
    let index = 0;
    for(let a in studentList){
        if(max < studentList[a].age){
            max = studentList[a].age;
            index = a;
        }
    }
    studentList.splice(index, 1);
}

console.log(students)
const findMax = (array) => {
  let max = 0;
  let std = {};
    for(let a in array){
      if(max < array[a].age){
        max = array[a].age;
        std = array[a]
    }
  }
  return std;
}

const sortMinToMax = (array) => {
  let sortedArray = [];
  let compareArray = array;
  while(compareArray.length > 1){
    var a = findMax(compareArray)
    sortedArray.unshift({
      name: a.name,
      age: a.age
    });
    deleteOldest(compareArray);
    console.log(compareArray);
  }
  return sortedArray;
}

console.log(sortMinToMax(students));

const olderThan = (list) => {
    let olderStudent = [];
    let require = 12;
    list.forEach(student => {
        if(student.age > require){
            olderStudent.push(student)
        }
    });
    return olderStudent
}

let old = olderThan(students);
console.log(old)

const createArray = (list) => {
  let ages = [];
  list.forEach(student => {
    ages.push(student.age);
  });
  return ages;
}

let ageList = createArray(students);

let totalAge = ageList.reduce(findArraySum)

function findArraySum (total, num){
  return total + num;
}

console.log(totalAge)

let sortedArray = sortMinToMax(students)

console.log(sortedArray)