// src/types.ts

export type RemovalCondition = 'end of turn' | 'end of round' | 'on heal' | 'other';

export interface StatusDefinition {
  name: string;
  image: string;
  description: string;
  removalCondition: RemovalCondition;
  max: number;
}

export interface CharacterDefinition {
  name: string;
  image: string;
}

export interface EnemyLevelStats {
  health: number;
  movement: number;
  damage: number;
  
  // Optionals
  ability1?: string;
  ability2?: string;
  statuses?: Record<string, number>; // status name -> count
}

export interface EnemyLevel {
  normal: EnemyLevelStats;
  elite: EnemyLevelStats;
}

export interface EnemyTypeDefinition {
  name: string;
  image: string;
  levels: EnemyLevel[];
}

// -------------------------
// Game State Definitions
// -------------------------

export type EnemyInstanceType = 'normal' | 'elite';

export interface EnemyInstance {
  typeName: string;   // reference to the EnemyTypeDefinition name
  variant: EnemyInstanceType;
  currentHealth: number;
  statuses: Record<string, number>; // status name -> count
}

export interface CharacterInstance {
  definitionName: string;
  statuses: Record<string, number>; // status name -> count
  exhausted: boolean;
  initiative: number;
}
export interface EnemyList {
  initiative: number,
  instances: EnemyInstance[]
}

export interface GameState {
  level: number;
  characters: CharacterInstance[];
  enemies: Record<string, EnemyList>;
  round: number;
  turn: {
    initiative: number;
    key: string;
  } | undefined;
  focus: {
    key: string;
    idx?: number;
  } | undefined;
}
