class Student{
  constructor(sId, sName){
    this.id = sId;
    this.name = sName;
    this.school = "Rabindra university";
  }
}
const student1 = new Student(12, "Mamun");
const student2 = new Student(22, "Azmol");

// console.log(student1, student2);
console.log(student1, student2.name);