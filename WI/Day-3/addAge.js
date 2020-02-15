let students = [{
    name: "Hiếu",
    age: 12
  },{
    name: "Tuấn Anh",
    age: 29
  },{
    name: "Phong",
    age: 12 
  },{
    name: "Minh",
    age: 12
}]

const addAge = () => {
  return students.map( (person) => {
    let fatherAge = Math.floor(Math.random() * 100);
    let motherAge = Math.floor(Math.random() * 100);
    return {
      name: person.name,
      age: person.age + 2,
      fatherAge: fatherAge,
      motherAge: motherAge
    }  
  });
}


let addedAgeStudents = addAge();

console.log(students);

console.log(addedAgeStudents);

const olderThan14 = () => {
    return addedAgeStudents.filter( (person) => {
        return person.age > 14; 
    });
}

console.log(olderThan14());

let countAgeStudent = students.reduce(findArraySum, {"12age": 0, "29age": 0})

function findArraySum (total, student){
  if (student.age == 12) {
    return {
      "12age": total["12age"]+1,
      "29age": total["29age"]
    }
  }
  if (student.age == 29) {
    return {
      "12age": total["12age"],
      "29age": total["29age"]+1
    }
  }
}

console.log(countAgeStudent)

let pupils = [
  {grade: Math.floor(Math.random() * 11)},
  {grade: Math.floor(Math.random() * 11)},
  {grade: Math.floor(Math.random() * 11)},
  {grade: Math.floor(Math.random() * 11)},
  {grade: Math.floor(Math.random() * 11)},
  {grade: Math.floor(Math.random() * 11)},
  {grade: Math.floor(Math.random() * 11)},
  {grade: Math.floor(Math.random() * 11)},
  {grade: Math.floor(Math.random() * 11)},
  {grade: Math.floor(Math.random() * 11)}
]

let gradeStats = pupils.reduce( (total, person) => {
  if (person.grade <= 4) {
    return {
      good: total["good"],
      average: total["average"],
      weak: total["weak"] + 1
    }
  };
  
  if (person.grade > 4 && person.grade <= 6) {
    return {
      good: total["good"],
      average: total["average"] + 1,
      weak: total["weak"]
    }
  }; 

  if (person.grade > 6) {
    return {
      good: total["good"] + 1,
      average: total["average"],
      weak: total["weak"]
    }
  }
}, {good:0, average:0, weak:0});

console.log(pupils);
console.log(gradeStats);
