# One-Piece-Battle

# An Object-Oriented Adventure

# Pirates Adventure RPG

### Pirates Class

The `Pirates` class is the foundation for characters in the adventure RPG. It includes properties like name, health, and inventory. The class provides methods for rolling dice, adding items to inventory, and receiving damage.

```javascript
class Pirates {
  constructor(name) {
    this.name = name;
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

  hitDamage(amount) {
    if (this.health > 0) this.health -= amount;
  }
}
```

### Class Features Class Uniforms

The code introduces subclasses, strawHatPirates and donquixotePirates, each extending the Pirates class.
