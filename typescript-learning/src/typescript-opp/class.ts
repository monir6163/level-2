// opp = class - object
class Animal {
  name: string;
  type: string;
  sound: string;

  constructor(name: string, type: string, sound: string) {
    this.name = name;
    this.type = type;
    this.sound = sound;
  }

  makeSound() {
    console.log(`${this.name} is making sound : ${this.sound}`);
  }
}

const dog = new Animal("Poki", "Read", "Ghew Ghew");

class Products {
  constructor(public name: string, public price: number, public stock: number) {
    this.name = name;
    this.price = price;
    this.stock = stock;
  }
}
const product = new Products("Head phone", 300, 50);
