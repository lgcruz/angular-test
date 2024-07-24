function decorador(constructor: any): any {
  return class extends constructor {
    newProperty = "hola";
    hello = "mundo";
  };
}

@decorador
export class SuperClass {
  public myProperty: string = "Abc123";

  public print() {
    console.log(this.myProperty);
  }
}

console.log(SuperClass);
const example = new SuperClass();
console.log(example);
