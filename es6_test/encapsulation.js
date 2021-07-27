class Tiger{
  #speed = 100;
  location = 'Pabna';
  constructor(name){
      this.name = name;
      this.#speed = 125;
  }
  run(){
      console.log(`I am ${this.name}. I am running at ${this.#speed}mph. I live in ${this.location}`)
  }
}
const royal = new Tiger('Royal Bengal');
royal.name = 'Mamun';
royal.location = 'Pabna';

royal.run();