const skills: string[] = ["Bash", "Counter", "Healing"];

interface Character {
  name: string;
  skills: string[];
  hp: number;
  homeTown?: string;
}
const strider: Character = {
  name: "Strider",
  skills: skills,
  hp: 95,
};
strider.homeTown = "Rivendell";
console.table(strider);
export {};
