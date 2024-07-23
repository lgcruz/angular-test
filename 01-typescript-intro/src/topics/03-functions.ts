function addNumber(a: number, b: number): number {
  return a + b;
}
const result = addNumber(2, 4);

function multiply(
  firstNumber: number,
  secondNumber?: number,
  base: number = 2
): number {
  return firstNumber * base;
}
const result2 = multiply(5);
console.log({ result, result2 });

interface Character {
  name: string;
  hp: number;
  showHp: () => void;
}
const healCharacter = (character: Character, amount: number) => {
  return (character.hp += amount);
};
const strider: Character = {
  name: "Strider",
  hp: 50,
  showHp() {
    console.log(`Puntos de vida ${this.hp}`);
  },
};

healCharacter(strider, 40);

console.table(strider);

export {};
