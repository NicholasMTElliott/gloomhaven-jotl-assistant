import { StatusDefinition } from "../types"

export const statuses: StatusDefinition[] = [
    {
      "name": "Poison",
      "image": "icons/poison.png",
      "description": "Take +1 damage from all attacks.",
      "removalCondition": "on heal",
      "max": 1
    },
    {
      "name": "Wound",
      "image": "icons/wound.png",
      "description": "Take +1 damage at start of turn.",
      "removalCondition": "on heal",
      "max": 1
    },
    {
      "name": "Stun",
      "image": "icons/stun.png",
      "description": "Cannot perform actions or move.",
      "removalCondition": "end of turn",
      "max": 1
    },
    {
        "name":"Disarm",
        "image": "icons/disarm.png",
        "description": "Cannot attack.",
        "removalCondition": "end of turn",
        "max": 1
    },
    {
        "name":"Immobilize",
        "image": "icons/immobilize.png",
        "description": "Cannot perform move.",
        "removalCondition": "end of turn",
        "max": 1
    },
    {
        "name":"Strengthen",
        "image": "icons/strengthen.png",
        "description": "Advantage on attacks.",
        "removalCondition": "end of turn",
        "max": 6
    },
    {
        "name":"Muddle",
        "image": "icons/muddle.png",
        "description": "Disadvantage on attacks.",
        "removalCondition": "end of turn",
        "max": 6
    },
    {
        "name":"Shield",
        "image": "icons/shield.png",
        "description": "Reduce damage from attacks.",
        "removalCondition": "end of round",
        "max": 10
    }
  ];
  