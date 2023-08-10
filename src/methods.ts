// class House {
//   private tenants: string[] = [];

//   constructor(public readonly type: string, protected street: string) {
//   }

//   public showAddress(this: House): void {
//     console.log("Addres " + this.street);
//   }

//   public showType(this: House): void {
//     console.log("Type " + this.type);
//   }

//   public addTenant(name: string) {
//     this.tenants.push(name);
//   }

//   public showTenants() {
//     console.log(this.tenants);
//   }
// }
//============================================================================

// const house = new House('wood', 'Middle-earth');

// house.addTenant('Max');
// house.addTenant("Nikita");
// house.addTenant("Joy");

// house.showTenants();

// house.type = '';

// console.log(house.type);

//================================================================

// class StoneHouse extends House {
//   private chargeOfHouse: string;

//   constructor(street: string, general: string) {
//     super("stone", street);

//     this.chargeOfHouse = general;
//   }

//   public showAddress(): void {
//     console.log("Addres " + this.street);
//   }

//   public showTenants() {
//     console.log("General: " + this.chargeOfHouse);

//     super.showTenants();
//   }
// }

// const stoneHouse = new StoneHouse('Stone-world', 'John');

// stoneHouse.addTenant('Anton');
// stoneHouse.addTenant("Nikita");

// stoneHouse.showTenants();

//================================================================
//================================================================

// class UseStatic {
//     private static count = 0;

//     constructor() {
//         UseStatic.count += 1;
//     }

//     public static isStaticMethod() {
//         console.log("I`m static");
//     }

//     public showCount() {
//         console.log(UseStatic.count);
//     }
// }

// const obj1 = new UseStatic();
// const obj2 = new UseStatic();
// const obj3 = new UseStatic();

// obj1.showCount();
// obj2.showCount();
// obj3.showCount();

// UseStatic.isStaticMethod();

//================================================================

// abstract class Plane{
//     protected pilotInCabin = false;

//     public sitInPlane(){
//         this.pilotInCabin = true;
//     }

//     public abstract startEngine(): string;
// }

// class Maize extends Plane {
//     public startEngine() {
//         return 'Ta-ta-ta-ta-ta-ta';
//     }
// }

// class Boeing extends Plane {
//   public startEngine() {
//     return "Buuu";
//   }
// }

// const maize = new Maize();
// const boeing = new Boeing();

// maize.sitInPlane();
// boeing.sitInPlane();

// console.log(maize.startEngine);
// console.log(boeing.startEngine);
