// src/data/index.ts

import statusData from './statuses.json';
import characterData from './characters.json';
import enemyData from './enemyTypes.json';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CharacterDefinition, EnemyTypeDefinition, StatusDefinition } from '../types';

export const statuses = statusData as StatusDefinition[];
export const characters = characterData as CharacterDefinition[];
export const enemyTypes = enemyData as  EnemyTypeDefinition[];
