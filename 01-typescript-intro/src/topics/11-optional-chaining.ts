interface Passenger {
  name: string;
  children?: string[];
}

const passanger1: Passenger = {
  name: "fernando",
};
const passanger2: Passenger = {
  name: "roberto",
  children: ["maria", "julia"],
};

const printChildren = (passenger: Passenger) => {
  const howMany = passenger.children?.length || 0;
  console.log(passenger.name + " " + howMany);
};

printChildren(passanger1);
