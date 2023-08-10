abstract class House {
  protected door = false;
  private tenants: Person[] = [];
    
  constructor (protected key: Key) {}

  comeIn(person: Person): void {
    if (!this.door) {
      throw new Error("Двері зачинені");
    }

    this.tenants.push(person);
    console.log("Можете зайти, ключ підійшов");
  }

  abstract openDoor(key: Key): boolean;
}


class MyHouse extends House {
  openDoor(key: Key) {
    if (key.getSignature() !== this.key.getSignature()) {
      throw new Error("Ключ не підходить");
    }

    return (this.door = true);
  }
}


class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature(): number {
    return this.signature;
  }
}


class Person {
  constructor(private key: Key) {}
  getKey(): Key {
    return this.key;
  }
}

const key = new Key();

const house = new MyHouse(key);

const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);