import { EnemyTypeDefinition } from "../types"

export const enemyTypes: EnemyTypeDefinition[] = [
  {
    "name": "Zealot",
    "image": "enemies/zealot.jpg",
    "levels": [
      {
        level: 0,
        normal:  { health: 4,  movement: 2, damage: 2 },
        elite:   { health: 7,  movement: 2, damage: 3 }
      },
      {
        level: 1,
        normal:  { health: 6,  movement: 2, damage: 2 },
        elite:   { health: 8,  movement: 2, damage: 3, statuses: { "Wound": 1 } }
      },
      {
        level: 2,
        normal:  { health: 7,  movement: 3, damage: 3 },
        elite:   { health: 11,  movement: 3, damage: 3, statuses: { "Wound": 1 }  }
      },
      {
        level: 3,
        normal:  { health: 8,  movement: 3, damage: 3, statuses: { "Wound": 1 }  },
        elite:   { health: 13, movement: 3, damage: 4, statuses: { "Wound": 1 }  } 
      },
      {
        level: 4,
        normal:  { health: 10,  movement: 3, damage: 3, statuses: { "Wound": 1 }  },
        elite:   { health: 17, movement: 3, damage: 4, statuses: { "Wound": 1 }  }
      },
      {
        level: 5,
        normal:  { health: 12, movement: 4, damage: 3, statuses: { "Wound": 1 }  },
        elite:   { health: 18, movement: 4, damage: 5, statuses: { "Wound": 1 }  }
      },
      {
        level: 6,
        normal:  { health: 14, movement: 4, damage: 4, statuses: { "Wound": 1 }  },
        elite:   { health: 22, movement: 4, damage: 6, statuses: { "Wound": 1 }  }
      },
      {
        level: 7,
        normal:  { health: 16, movement: 4, damage: 5, statuses: { "Wound": 1 }  },
        elite:   { health: 26, movement: 4, damage: 7, statuses: { "Wound": 1 }  }
      }
    ]
  },
  {
    "name": "Vermling Scout",
    "image": "enemies/vermling-scout.jpg",
    "levels": [
      {
        level: 0,
        normal:  { health: 2,  movement: 3, damage: 1 },
        elite:   { health: 4,  movement: 3, damage: 2 }
      },
      {
        level: 1,
        normal:  { health: 3,  movement: 3, damage: 1 },
        elite:   { health: 5,  movement: 3, damage: 2 }
      },
      {
        level: 2,
        normal:  { health: 3,  movement: 3, damage: 2 },
        elite:   { health: 5,  movement: 4, damage: 3  }
      },
      {
        level: 3,
        normal:  { health: 5,  movement: 3, damage: 2  },
        elite:   { health: 7, movement: 4, damage: 3  } 
      },
      {
        level: 4,
        normal:  { health: 6,  movement: 3, damage: 3 },
        elite:   { health: 8, movement: 4, damage: 4 }
      },
      {
        level: 5,
        normal:  { health: 8, movement: 3, damage: 3  },
        elite:   { health: 11, movement: 4, damage: 4  }
      },
      {
        level: 6,
        normal:  { health: 10, movement: 4, damage: 3  },
        elite:   { health: 13, movement: 5, damage: 4  }
      },
      {
        level: 7,
        normal:  { health: 13, movement: 4, damage: 3  },
        elite:   { health: 17, movement: 5, damage: 4  }
      }]
  },
  {
    "name": "Vermling Raider",
    "image": "enemies/vermling-raider.jpg",
    "levels": [
      {
        level: 0,
        normal:  { health: 4,  movement: 1, damage: 2 },
        elite:   { health: 8,  movement: 1, damage: 2 }
      },
      {
        level: 1,
        normal:  { health: 5,  movement: 1, damage: 2 },
        elite:   { health: 10,  movement: 1, damage: 2 }
      },
      {
        level: 2,
        normal:  { health: 9,  movement: 2, damage: 2 },
        elite:   { health: 14,  movement: 3, damage: 3  }
      },
      {
        level: 3,
        normal:  { health: 11,  movement: 3, damage: 2  },
        elite:   { health: 16, movement: 3, damage: 4  } 
      },
      {
        level: 4,
        normal:  { health: 12,  movement: 3, damage: 3 },
        elite:   { health: 19, movement: 4, damage: 4 }
      },
      {
        level: 5,
        normal:  { health: 15, movement: 3, damage: 3  },
        elite:   { health: 23, movement: 4, damage: 4  }
      },
      {
        level: 6,
        normal:  { health: 17, movement: 4, damage: 3  },
        elite:   { health: 27, movement: 4, damage: 5  }
      },
      {
        level: 7,
        normal:  { health: 19, movement: 4, damage: 4  },
        elite:   { health: 31, movement: 4, damage: 6  }
      }]
  },
  {
    "name": "Stone Golem",
    "image": "enemies/stone-golem.jpg",
    "levels": [{
      level: 0,
      normal:  { health: 10,  movement: 1, damage: 3 },
      elite:   { health: 10,  movement: 3, damage: 4, statuses: { Shield: 1 } }
    },{
      level: 1,
      normal:  { health: 10,  movement: 1, damage: 3, statuses: { Shield: 1 } },
      elite:   { health: 11,  movement: 2, damage: 4, statuses: { Shield: 2 } }
    },{
      level: 2,
      normal:  { health: 11,  movement: 1, damage: 4, statuses: { Shield: 1 } },
      elite:   { health: 13,  movement: 2, damage: 5, statuses: { Shield: 2 } }
    },{
      level: 3,
      normal:  { health: 11,  movement: 1, damage: 4, statuses: { Shield: 2 } },
      elite:   { health: 14,  movement: 2, damage: 5, statuses: { Shield: 3 } }
    },{
      level: 4,
      normal:  { health: 12,  movement: 2, damage: 4, statuses: { Shield: 2 } },
      elite:   { health: 16,  movement: 2, damage: 6, statuses: { Shield: 3 } }
    },{
      level: 5,
      normal:  { health: 13,  movement: 2, damage: 5, statuses: { Shield: 2 } },
      elite:   { health: 18,  movement: 3, damage: 6, statuses: { Shield: 3 } }
    },{
      level: 6,
      normal:  { health: 16,  movement: 2, damage: 5, statuses: { Shield: 2 } },
      elite:   { health: 20,  movement: 3, damage: 7, statuses: { Shield: 3 } }
    },{
      level: 7,
      normal:  { health: 16,  movement: 2, damage: 5, statuses: { Shield: 3 } },
      elite:   { health: 21,  movement: 3, damage: 7, statuses: { Shield: 4 } }
    }]
  },
  {
    "name": "Black Sludge",
    "image": "enemies/black-sludge.jpg",
    "levels": [{
      level: 0,
      normal:  { health: 4,  movement: 1, damage: 2 },
      elite:   { health: 8,  movement: 1, damage: 2 }
    },{
      level: 1,
      normal:  { health: 5,  movement: 1, damage: 2, statuses: { Shield: 1 } },
      elite:   { health: 9,  movement: 1, damage: 2, statuses: { Shield: 1 } }
    },{
      level: 2,
      normal:  { health: 7,  movement: 1, damage: 2, statuses: { Shield: 1 } },
      elite:   { health: 11,  movement: 1, damage: 3, statuses: { Shield: 1 } }
    },{
      level: 3,
      normal:  { health: 8,  movement: 1, damage: 3, statuses: { Shield: 1 } },
      elite:   { health: 11,  movement: 2, damage: 3, statuses: { Shield: 1 , Poison: 1} }
    },{
      level: 4,
      normal:  { health: 9,  movement: 2, damage: 3, statuses: { Shield: 1 } },
      elite:   { health: 13,  movement: 2, damage: 4, statuses: { Shield: 1 , Poison: 1} }
    },{
      level: 5,
      normal:  { health: 10,  movement: 2, damage: 3, statuses: { Shield: 1 , Poison: 1 } },
      elite:   { health: 15,  movement: 3, damage: 4, statuses: { Shield: 1 , Poison: 1} }
    },{
      level: 6,
      normal:  { health: 12,  movement: 2, damage: 4, statuses: { Shield: 1 , Poison: 1 } },
      elite:   { health: 16,  movement: 3, damage: 4, statuses: { Shield: 2 , Poison: 1} }
    },{
      level: 7,
      normal:  { health: 16,  movement: 2, damage: 4, statuses: { Shield: 1 , Poison: 1 } },
      elite:   { health: 18,  movement: 3, damage: 5, statuses: { Shield: 2 , Poison: 1} }
    }]
  },
  {
    "name": "Giant Viper",
    "image": "enemies/giant-viper.jpg",
    "levels": [{
      level: 0,
      normal:  { health: 2,  movement: 2, damage: 1, statuses: { Poison: 1 } },
      elite:   { health: 3,  movement: 2, damage: 2, statuses: { Poison: 1 } }
    },{
      level: 1,
      normal:  { health: 3,  movement: 2, damage: 1, statuses: { Poison: 1 } },
      elite:   { health: 5,  movement: 2, damage: 2, statuses: { Poison: 1 } }
    },{
      level: 2,
      normal:  { health: 4,  movement: 3, damage: 1, statuses: { Poison: 1 } },
      elite:   { health: 7,  movement: 3, damage: 2, statuses: { Poison: 1 } }
    },{
      level: 3,
      normal:  { health: 4,  movement: 3, damage: 2, statuses: { Poison: 1 } },
      elite:   { health: 8,  movement: 3, damage: 3, statuses: { Poison: 1 } }
    },{
      level: 4,
      normal:  { health: 6,  movement: 3, damage: 2, statuses: { Poison: 1 } },
      elite:   { health: 11,  movement: 3, damage: 3, statuses: { Poison: 1 } }
    },{
      level: 5,
      normal:  { health: 7,  movement: 3, damage: 3, statuses: { Poison: 1 } },
      elite:   { health: 13,  movement: 4, damage: 3, statuses: { Poison: 1 } }
    },{
      level: 6,
      normal:  { health: 8,  movement: 4, damage: 3, statuses: { Poison: 1 } },
      elite:   { health: 14,  movement: 4, damage: 4, statuses: { Poison: 1 } }
    },{
      level: 7,
      normal:  { health: 10,  movement: 4, damage: 3, statuses: { Poison: 1 } },
      elite:   { health: 18,  movement: 4, damage: 4, statuses: { Poison: 1 } }
    }]
  },
  {
    "name": "Blood Imp",
    "image": "enemies/blood-imp.jpg",
    "levels": [{
      level: 0,
      normal:  { health: 3,  movement: 2, damage: 1 },
      elite:   { health: 4,  movement: 2, damage: 2, statuses: { Muddle: 1 } }
    },{
      level: 1,
      normal:  { health: 4,  movement: 2, damage: 1, statuses: { Muddle: 1 } },
      elite:   { health: 6,  movement: 2, damage: 2, statuses: { Muddle: 1 } }
    },{
      level: 2,
      normal:  { health: 5,  movement: 3, damage: 1, statuses: { Muddle: 1 } },
      elite:   { health: 7,  movement: 3, damage: 2, statuses: { Muddle: 1 } }
    },{
      level: 3,
      normal:  { health: 5,  movement: 3, damage: 2, statuses: { Muddle: 1 } },
      elite:   { health: 10,  movement: 3, damage: 2, statuses: { Muddle: 1 } }
    },{
      level: 4,
      normal:  { health: 7,  movement: 3, damage: 2, statuses: { Muddle: 1 } },
      elite:   { health: 11,  movement: 3, damage: 3, statuses: { Muddle: 1 } }
    },{
      level: 5,
      normal:  { health: 8,  movement: 4, damage: 2, statuses: { Muddle: 1 } },
      elite:   { health: 13,  movement: 4, damage: 3, statuses: { Muddle: 1 } }
    },{
      level: 6,
      normal:  { health: 9,  movement: 4, damage: 3, statuses: { Muddle: 1 } },
      elite:   { health: 17,  movement: 4, damage: 3, statuses: { Muddle: 1 } }
    },{
      level: 7,
      normal:  { health: 12,  movement: 4, damage: 3, statuses: { Muddle: 1 } },
      elite:   { health: 21,  movement: 4, damage: 4, statuses: { Muddle: 1 } }
    }]
  },
  {
    "name": "Black Imp",
    "image": "enemies/black-imp.jpg",
    "levels": [{
      level: 0,
      normal:  { health: 3,  movement: 1, damage: 1 },
      elite:   { health: 4,  movement: 1, damage: 2, statuses: { Poison: 1 } }
    },{
      level: 1,
      normal:  { health: 4,  movement: 1, damage: 1, statuses: { Poison: 1 } },
      elite:   { health: 6,  movement: 1, damage: 2, statuses: { Poison: 1 } }
    },{
      level: 2,
      normal:  { health: 5,  movement: 1, damage: 1, statuses: { Poison: 1 } },
      elite:   { health: 8,  movement: 1, damage: 2, statuses: { Poison: 1 } }
    },{
      level: 3,
      normal:  { health: 5,  movement: 1, damage: 2, statuses: { Poison: 1 } },
      elite:   { health: 8,  movement: 1, damage: 3, statuses: { Poison: 1 }, extra: "Attackers gain Disadvantage" }
    },{
      level: 4,
      normal:  { health: 7,  movement: 1, damage: 2, statuses: { Poison: 1 } },
      elite:   { health: 11,  movement: 1, damage: 3, statuses: { Poison: 1 }, extra: "Attackers gain Disadvantage" }
    },{
      level: 5,
      normal:  { health: 9,  movement: 1, damage: 2, statuses: { Poison: 1 } },
      elite:   { health: 14,  movement: 1, damage: 3, statuses: { Poison: 1 }, extra: "Attackers gain Disadvantage" }
    },{
      level: 6,
      normal:  { health: 10,  movement: 1, damage: 3, statuses: { Poison: 1 } },
      elite:   { health: 15,  movement: 1, damage: 4, statuses: { Poison: 1 }, extra: "Attackers gain Disadvantage" }
    },{
      level: 7,
      normal:  { health: 13,  movement: 1, damage: 3, statuses: { Poison: 1 } },
      elite:   { health: 19,  movement: 1, damage: 4, statuses: { Poison: 1 }, extra: "Attackers gain Disadvantage" }
    }]
  },
  {
    "name": "Living Corpse",
    "image": "enemies/living-corpse.jpg",
    "levels": [{
      level: 0,
      normal:  { health: 5,  movement: 1, damage: 3 },
      elite:   { health: 10,  movement: 1, damage: 3 }
    },{
      level: 1,
      normal:  { health: 7,  movement: 1, damage: 3},
      elite:   { health: 11,  movement: 1, damage: 4 }
    },{
      level: 2,
      normal:  { health: 9,  movement: 1, damage: 3},
      elite:   { health: 14,  movement: 1, damage: 4 }
    },{
      level: 3,
      normal:  { health: 10,  movement: 1, damage: 4 },
      elite:   { health: 14,  movement: 2, damage: 5 }
    },{
      level: 4,
      normal:  { health: 11,  movement: 2, damage: 4 },
      elite:   { health: 16,  movement: 2, damage: 5, statuses: { Poison: 1 } }
    },{
      level: 5,
      normal:  { health: 13,  movement: 2, damage: 4 },
      elite:   { health: 18,  movement: 2, damage: 6, statuses: { Poison: 1 } }
    },{
      level: 6,
      normal:  { health: 14,  movement: 2, damage: 4, statuses: { Poison: 1 } },
      elite:   { health: 23,  movement: 2, damage: 6, statuses: { Poison: 1 } }
    },{
      level: 7,
      normal:  { health: 16,  movement: 2, damage: 5, statuses: { Poison: 1 } },
      elite:   { health: 29,  movement: 2, damage: 6, statuses: { Poison: 1 } }
    }]
  },
  {
    "name": "Living Spirit",
    "image": "enemies/living-spirit.jpg",
    "levels": [{
      level: 0,
      normal:  { health: 3,  movement: 2, damage: 2, statuses: { Shield: 1 } },
      elite:   { health: 5,  movement: 3, damage: 3, statuses: { Shield: 1 } }
    },{
      level: 1,
      normal:  { health: 4,  movement: 2, damage: 2, statuses: { Shield: 1 } },
      elite:   { health: 5,  movement: 3, damage: 3, statuses: { Shield: 2 } }
    },{
      level: 2,
      normal:  { health: 5,  movement: 3, damage: 2, statuses: { Shield: 1 } },
      elite:   { health: 7,  movement: 4, damage: 3, statuses: { Shield: 2 } }
    },{
      level: 3,
      normal:  { health: 6,  movement: 3, damage: 3, statuses: { Shield: 1 } },
      elite:   { health: 8,  movement: 4, damage: 4, statuses: { Shield: 2 } }
    },{
      level: 4,
      normal:  { health: 6,  movement: 3, damage: 3, statuses: { Shield: 2 } },
      elite:   { health: 8,  movement: 4, damage: 4, statuses: { Shield: 3 } }
    },{
      level: 5,
      normal:  { health: 8,  movement: 3, damage: 3, statuses: { Shield: 2 } },
      elite:   { health: 11,  movement: 4, damage: 4, statuses: { Shield: 3 } }
    },{
      level: 6,
      normal:  { health: 9,  movement: 3, damage: 4, statuses: { Shield: 2 } },
      elite:   { health: 13,  movement: 4, damage: 5, statuses: { Shield: 3 } }
    },{
      level: 7,
      normal:  { health: 12,  movement: 3, damage: 4, statuses: { Shield: 2 } },
      elite:   { health: 17,  movement: 4, damage: 5, statuses: { Shield: 3 } }
    }]
  },
  {
    "name": "Blood Monstrosity",
    "image": "enemies/blood-monstrosity.jpg",
    "levels": [{
      level: 0,
      normal:  { health: 7,  movement: 2, damage: 2, extra: "On death, all adjacent figures suffer 1 damage" },
      elite:   { health: 12,  movement: 2, damage: 3, extra: "On death, all adjacent figures suffer 1 damage" }
    },{
      level: 1,
      normal:  { health: 9,  movement: 2, damage: 2, extra: "On death, all adjacent figures suffer 2 damage" },
      elite:   { health: 12,  movement: 2, damage: 3, extra: "On death, all adjacent figures suffer 3 damage", statuses: { Shield: 1 } }
    },{
      level: 2,
      normal:  { health: 10,  movement: 2, damage: 3, extra: "On death, all adjacent figures suffer 2 damage" },
      elite:   { health: 15,  movement: 2, damage: 4, extra: "On death, all adjacent figures suffer 3 damage", statuses: { Shield: 1 } }
    },{
      level: 3,
      normal:  { health: 12,  movement: 3, damage: 3, extra: "On death, all adjacent figures suffer 3 damage" },
      elite:   { health: 18,  movement: 3, damage: 4, extra: "On death, all adjacent figures suffer 4 damage", statuses: { Shield: 1 } }
    },{
      level: 4,
      normal:  { health: 12,  movement: 3, damage: 3, extra: "On death, all adjacent figures suffer 3 damage", statuses: { Shield: 1 } },
      elite:   { health: 18,  movement: 3, damage: 4, extra: "On death, all adjacent figures suffer 4 damage", statuses: { Shield: 2 } }
    },{
      level: 5,
      normal:  { health: 13,  movement: 3, damage: 4, extra: "On death, all adjacent figures suffer 3 damage", statuses: { Shield: 1 } },
      elite:   { health: 20,  movement: 3, damage: 5, extra: "On death, all adjacent figures suffer 5 damage", statuses: { Shield: 2 } }
    },{
      level: 6,
      normal:  { health: 17,  movement: 3, damage: 4, extra: "On death, all adjacent figures suffer 3 damage", statuses: { Shield: 1 } },
      elite:   { health: 23,  movement: 3, damage: 6, extra: "On death, all adjacent figures suffer 5 damage", statuses: { Shield: 2 } }
    },{
      level: 7,
      normal:  { health: 20,  movement: 3, damage: 5, extra: "On death, all adjacent figures suffer 4 damage", statuses: { Shield: 1 } },
      elite:   { health: 23,  movement: 3, damage: 6, extra: "On death, all adjacent figures suffer 5 damage", statuses: { Shield: 3 } }
    }]
  },
  {
    "name": "Rat Monstrosity",
    "image": "enemies/rat-monstrosity.jpg",
    "levels": [{
      level: 0,
      normal:  { health: 4,  movement: 1, damage: 1, extra: "On death, all adjacent figures suffer 1 damage" },
      elite:   { health: 6,  movement: 1, damage: 2, extra: "On death, all adjacent figures suffer 1 damage" }
    },{
      level: 1,
      normal:  { health: 4,  movement: 1, damage: 2, extra: "On death, all adjacent figures suffer 1 damage" },
      elite:   { health: 7,  movement: 1, damage: 2, extra: "On death, all adjacent figures suffer 2 damage; Advantage" }
    },{
      level: 2,
      normal:  { health: 5,  movement: 2, damage: 2, extra: "On death, all adjacent figures suffer 1 damage" },
      elite:   { health: 8,  movement: 1, damage: 3, extra: "On death, all adjacent figures suffer 2 damage; Advantage" }
    },{
      level: 3,
      normal:  { health: 6,  movement: 2, damage: 3, extra: "On death, all adjacent figures suffer 2 damage" },
      elite:   { health: 10,  movement: 2, damage: 3, extra: "On death, all adjacent figures suffer 2 damage; Advantage" }
    },{
      level: 4,
      normal:  { health: 8,  movement: 2, damage: 3, extra: "On death, all adjacent figures suffer 2 damage" },
      elite:   { health: 12,  movement: 2, damage: 3, extra: "On death, all adjacent figures suffer 3 damage; Advantage" }
    },{
      level: 5,
      normal:  { health: 10,  movement: 3, damage: 3, extra: "On death, all adjacent figures suffer 2 damage" },
      elite:   { health: 13,  movement: 2, damage: 4, extra: "On death, all adjacent figures suffer 3 damage; Advantage" }
    },{
      level: 6,
      normal:  { health: 12,  movement: 3, damage: 3, extra: "On death, all adjacent figures suffer 3 damage" },
      elite:   { health: 14,  movement: 3, damage: 4, extra: "On death, all adjacent figures suffer 3 damage; Advantage" }
    },{
      level: 7,
      normal:  { health: 12,  movement: 3, damage: 4, extra: "On death, all adjacent figures suffer 3 damage" },
      elite:   { health: 16,  movement: 3, damage: 5, extra: "On death, all adjacent figures suffer 4 damage; Advantage" }
    },]
  }
];