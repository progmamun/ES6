/*OOP core concept 
1. inheritance (
Inheritance is an important concept in object oriented programming. In the classical inheritance, methods from base class get copied into derived class. In JavaScript, inheritance is supported by using prototype object. Some people call it "Prototypal Inheritance" and some people call it "Behaviour Delegation".)
2. Encapsulation (Encapsulation is one of the fundamentals of OOP (object-oriented programming). It refers to the bundling of data with the methods that operate on that data. Encapsulation is used to hide the values or state of a structured data object inside a class, preventing unauthorized parties' direct access to them.)
3. polymer Features (Polymer is an open-source JavaScript library for building web applications using Web Components. The library is being developed by Google developers and contributors on GitHub. Modern design principles are implemented as a separate project using Google's Material Design design principles.)
*/

class Parent {
  constructor(){
    this.fatherName = "Schwerznegger";
  }
}

class Child extends Parent{
  constructor(name){
    super();
    this.name = name;
  }
  getFullName(){
    return this.name + " " + this.fatherName;
  }
}
const baby = new Child("Arnold");
const baby2 = new Child("Tom");
console.log(baby);
console.log(baby2);
console.log(baby.getFullName());
