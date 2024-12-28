// src/data/index.ts

import { statuses } from './statuses';
import characterData from './characters.json';
import {enemyTypes} from './enemyTypes';
import { CharacterDefinition } from '../types';

export const characters = characterData as CharacterDefinition[];
export { enemyTypes, statuses };
