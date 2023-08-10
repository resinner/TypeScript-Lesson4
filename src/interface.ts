// interface Iperson {
//     readonly name: string;
//     age: number;

//     greet(phrase: string): void;
// }

// let user: Iperson;

// user = {
//     name: 'John',
//     age: 36,

//     greet(phrase: string) {
//         console.log(phrase + ' ' + this.name)
//     }
// };


// user.greet('Всім привіт, я');

//================================================================

// type Iperson = {
//   readonly name: string;
//   age: number;

//   greet: (phrase: string) => void;
// }

// let user: Iperson;

// user = {
//   name: "John",
//   age: 36,

//   greet(phrase: string) {
//     console.log(phrase + " " + this.name);
//   },
// };

// user.greet("Всім привіт, я");
//================================================================

interface Iperson {
  readonly name: string;
  age: number;

  greet(phrase: string): void;
}


interface IPilot extends Iperson {
    flyMessage(): void;
}


class Pilot implements Iperson, IPilot {
    constructor(public readonly name: string, public age: number) {
        this.checkAge();
    }
    
private checkAge() {
    if (this.age < 28) {
       throw new Error('Pilot to young!') 
    }
}

   public greet(phrase: string) {
         console.log(phrase + " " + this.name);
    }

flyMessage(): void {
      console.log('Літак набрав висоту, приємного польоту!');
}
}


abstract class Plane{
    protected pilot?: IPilot;
    
    public sitInPlane(pilot: IPilot){
        this.pilot = pilot;
    }

    public abstract startEngine(): boolean;
}


class Boeing extends Plane {

    public startEngine() {
        if (!this.pilot) {
            throw new Error('No pilot in cabin');
        }

        console.log('Запуск турбіни');

        this.pilot.flyMessage();

    return true;
  }
}

// const pilot = new Pilot("John", 34);
// const boeing = new Boeing();

// pilot.greet('Вас вітає капітан кораблю');

// boeing.sitInPlane(pilot);

// boeing.startEngine();
//================================================================

// class Terrorist implements IPilot {
//     bluff(phrase: string) {
//     console.log(phrase);
// }

// public flyMessage(): void {
//     console.log("Грошовий переказ на рахунок Visa");
//   }
// }

// const boeing = new Boeing();

// const pilot = new Terrorist();

// boeing.sitInPlane(pilot);

// pilot.bluff("Літах захвачено!");

// boeing.startEngine();