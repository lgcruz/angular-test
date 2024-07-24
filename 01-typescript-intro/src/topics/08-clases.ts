export class Person {
  //   public name: string;
  //   private address: string;

  constructor(public name: string, private address: string = "no address") {
    // this.name = "Fernando";
    // this.address = "New York";
  }
}

// export class Hero extends Person {
//   constructor(public realName: string, public age: number) {
//     super(realName, "New York");
//   }
// }

export class Hero {
  constructor(
    public realName: string,
    public age: number,
    public person: Person
  ) {}
}
const tony = new Person("Tony Stark");
const ironMan = new Hero("Ironman", 54, tony);
console.log(ironMan);
