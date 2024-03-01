// Part 1: Humble Beginnings

const adventurer = {
  name: "Robin",
  health: 10,
  inventory: ["sword", "potion", "artifact"],
  companion: {
    name: "Leo",
    type: "Cat",
    companion: {
      name: "Frank",
      type: "Cat",
      inventory: ["small hat", "sunglasses"],
    },
  },
  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
  },
};

adventurer.inventory.forEach((item) => {
  //   console.log(item);
});

// adventurer.roll();

// Part 2: Class Fantasy

class Pirates {
  constructor(name) {
    this.name = name;
    // this.pal = [];
    this.health = 100;
    this.inventory = [];
  }
  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
  }
  addItem(item) {
    this.inventory.push(item);
  }
  //   addFriend(buddy) {
  //     this.pal.push(buddy);
  //   }
  hitDamage(amount) {
    if (this.health > 0) this.health -= amount;
  }
}

// Part 3: Class Features & Part 4: Class Uniforms

class strawHatPirates extends Pirates {
  //   static roles = ["Master", "First Mate", "Doctor", "Chef"];
  constructor(name, role) {
    // if (!strawHatPirates.roles.includes(role)) {
    //   throw new Error(
    //     `Invalid role, add only the ${strawHatPirates.roles.join(", ")}`
    //   );
    // }
    super(name);
    this.role;
  }
  gear5() {
    if (luffy.health < 30) {
      luffy.health = luffy.health += 150;
    }
  }
}

class donquixotePirates extends Pirates {
  constructor(name, role) {
    super(name);
    this.role;
  }
}

const luffy = new strawHatPirates("Luffy");
luffy.role = "Captain";
luffy.addItem("GumGumPistols");
// let tony = new Pirates("Choppa");
// luffy.addFriend(tony);

const zoro = new strawHatPirates("Zoro");
zoro.role = "First Mate";
zoro.addItem("Enma");

const doflamingo = new donquixotePirates("Doflamingo");
doflamingo.role = "Captain";
doflamingo.addItem("Strings");
doflamingo.trebol = new donquixotePirates("Trebol");
let snotFace = doflamingo.trebol;
snotFace.addItem("snot");
snotFace.role = "Elite Officer";
doflamingo.sugar = new donquixotePirates("Sugar");
let toyMaker = doflamingo.sugar;
toyMaker.addItem("Toy People");
toyMaker = "Army Officer";

class strawHatSidekick extends strawHatPirates {
  constructor(name) {
    super(name);
  }
  rumble(ball) {
    let rumbleBalls = [1, 2, 3];
    rumbleBalls.forEach((ballType) => {
      if (ball == ballType) {
        tonyTony.health = tonyTony.health += 20 * ballType;
      }
    });
  }
  collierShoot(target) {
    const damage = Math.floor(Math.random() * 20);
    target.hitDamage(damage);
    console.log(`${target.name} just took ${damage} damage`);
    console.log(`${target.name} now has ${target.health} health`);
  }
}

luffy.tony = new strawHatSidekick("Choppa");
let tonyTony = luffy.tony;
tonyTony.addItem("Rumble Balls");
tonyTony.role = "Doctor";

zoro.curlybrows = new strawHatSidekick("Sanji");
let sanji = zoro.curlybrows;
sanji.role = "Chef";
sanji.addItem("shoes");

tonyTony.rumble(2);
console.log(tonyTony.health);

// console.log(luffy, zoro, doflamingo);

sanji.collierShoot(doflamingo);
console.log(doflamingo.health);
