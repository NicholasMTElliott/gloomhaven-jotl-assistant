import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { GameState, CharacterInstance, EnemyInstance, EnemyInstanceType } from '../types';
import { enemyTypes, statuses } from '../data';

// Define additional store actions
interface GameStore extends GameState {
    // Initialization
    startGame: (level: number, charNames: string[], enemyTypeNames: string[]) => void;
    startRound: (characterIntiatives: Record<string, number>, enemyInitiatives: Record<string, number>) => void;
    endRound: () => void;
    advanceTurn: () => void;
    // Actions
    spawnEnemy: (typeName: string, variant: EnemyInstanceType, instanceId: number) => void;
    killEnemy: (typeName: string, instanceId: number) => void;
    exhaustCharacter: (definitionName: string) => void;
    setCharacterStatus: (definitionName: string, statusName: string, value: number) => void;
    setEnemyHealth: (typeName: string, instanceId: number, value: number) => void;
    setEnemyStatus: (typeName: string, instanceId: number, statusName: string, value: number) => void;
    endGame: () => void;
    turnOrder: () => { initiative: number, key: string }[];
    setFocus: (key: string | undefined, idx?: number) => void;
}

export const useGameStore = create<GameStore>()(
    persist(
        (set, get) => ({
            // Initial default values
            level: 1,
            characters: [],
            enemies: {},
            round: 0,
            turn: undefined,
            focus: undefined,

            // Spawn an enemy of a given type with a specified health
            spawnEnemy: (typeName, variant, instanceId) => {
                const state = get();
                const health = enemyTypes.find(et => et.name === typeName)?.levels[state.level - 1][variant].health || 0;
                const newEnemy: EnemyInstance = {
                    typeName,
                    variant,
                    currentHealth: health,
                    statuses: {},
                };
                set({
                    enemies: {
                        ...state.enemies,
                        [typeName]: {
                            initiative: state.enemies[typeName].initiative,
                            instances: [...state.enemies[typeName].instances.map((e, idx) => idx === instanceId ? newEnemy : e)]
                        }
                    }
                });
            },

            // Kill or remove an enemy
            killEnemy: (typeName, instanceId) => {
                const state = get();
                const newEnemy: EnemyInstance = {
                    typeName,
                    variant: 'normal',
                    currentHealth: 0,
                    statuses: {},
                };
                set({
                    enemies: {
                        ...state.enemies,
                        [typeName]: {
                            initiative: state.enemies[typeName].initiative,
                            instances: [...state.enemies[typeName].instances.map((e, idx) => idx === instanceId ? newEnemy : e)]
                        }
                    }
                });
            },

            // Exhaust character
            exhaustCharacter: (definitionName) => {
                const state = get();
                const updatedChars = state.characters.map((c) =>
                    c.definitionName === definitionName
                        ? { ...c, exhausted: true }
                        : c
                );
                set({ characters: updatedChars });
            },

            // Increment character status
            setCharacterStatus: (definitionName, statusName, value) => {
                const state = get();
                const updatedChars = state.characters.map((c) =>
                    c.definitionName === definitionName
                        ? { ...c, statuses: { ...c.statuses, [statusName]: value } }
                        : c
                );
                set({ characters: updatedChars });
            },

            // Adjust health
            setEnemyHealth: (typeName, instanceId, value) => {
                const state = get();
                const updated = {
                    ...state.enemies,
                    [typeName]: {
                        initiative: state.enemies[typeName].initiative,
                        instances: state.enemies[typeName].instances.map((e, idx) =>
                            idx === instanceId ? { ...e, currentHealth: value } : e
                        )
                    }
                };
                set({ enemies: updated });
            },


            // Increment enemy status
            setEnemyStatus: (typeName, instanceId, statusName, value) => {
                const state = get();
                const updated = {
                    ...state.enemies,
                    [typeName]: {
                        initiative: state.enemies[typeName].initiative,
                        instances: state.enemies[typeName].instances.map((e, idx) =>
                            idx === instanceId ? { ...e, statuses: { ...e.statuses, [statusName]: value } } : e
                        )
                    }
                };
                set({ enemies: updated });
            },

            // Start the game at round 1
            startGame: (level, charNames, enemyTypeNames) => {
                const characters: CharacterInstance[] = charNames.map((c) => ({
                    initiative: 0,
                    definitionName: c,
                    statuses: {},
                    exhausted: false,
                }));

                const enemies = enemyTypeNames.reduce((prev, curr) => ({
                    ...prev,
                    // create a list of 10 enemies for each type automatically
                    [curr]: {
                        initiative: 0,
                        instances: Array.from({ length: 10 }, () => ({
                            typeName: curr,
                            variant: 'normal',
                            currentHealth: 0,
                            statuses: {}
                        } satisfies EnemyInstance))
                    }
                }), {} as Record<string, { initiative: number, instances: EnemyInstance[] }>);

                set({
                    level,
                    round: 0,
                    turn: undefined,
                    characters,
                    enemies
                });
            },

            // Start the round by setting initiative to the first in the turn order
            startRound: (characterIntiatives, enemyInitiatives) => {
                const state = get();

                // Increment the round number and set the turn to the first in the turn order
                // Assign all character and enemy initiatives based on the provided values
                // End the previous round by clearing statuses with 'end of round' from all entities
                set({
                    round: state.round + 1,
                    turn: state.turnOrder()[0],
                    characters: state.characters.map((c) => ({
                        ...c,
                        statuses: {
                            ...c.statuses,
                            ...statuses.filter(s => s.removalCondition === 'end of round')
                                .reduce((acc, s) => ({ ...acc, [s.name]: 0 }), {} as Record<string, number>)
                        },
                        initiative: characterIntiatives[c.definitionName]
                    })),
                    enemies: Object.keys(state.enemies).reduce((prev, typeName) => ({
                        ...prev,
                        [typeName]: {
                            initiative: enemyInitiatives[typeName],
                            instances: state.enemies[typeName].instances.map((e) => ({
                                ...e,
                                statuses: {
                                    ...e.statuses,
                                    ...statuses.filter(s => s.removalCondition === 'end of round')
                                        .reduce((acc, s) => ({ ...acc, [s.name]: 0 }), {} as Record<string, number>)
                                }
                            }))
                        }
                    }), {} as Record<string, { initiative: number, instances: EnemyInstance[] }>)
                });
            },
            endRound: () => {
                set({ turn: undefined });
            },
            setFocus: (key, idx) => {
                set({ focus: key ? { key, idx } : undefined });
            },
            // Advance the turn by clearing statuses with 'end of turn' from the current entity and setting
            // initiative to the next in the turn order.  If there is no next entity, set the turn to undefined
            advanceTurn: () => {
                const state = get();
                const turnOrder = state.turnOrder();
                const currentIndex = turnOrder.findIndex((t) => t.initiative === state.turn?.initiative && t.key === state.turn?.key);
                const nextIndex = currentIndex + 1;
                const nextTurn = nextIndex >= turnOrder.length ? undefined : turnOrder[nextIndex];

                if (state.characters.find((c) => c.definitionName === state.turn?.key)) {
                    console.error('Will remove: ' + statuses.filter(s => s.removalCondition === 'end of turn').map(s => s.name));
                    set({
                        turn: nextTurn,
                        characters: state.characters.map((c) => (c.definitionName === state.turn?.key
                            ? {
                                ...c,
                                statuses: {
                                    ...c.statuses,
                                    ...statuses.filter(s => s.removalCondition === 'end of turn')
                                        .reduce((acc, s) => ({ ...acc, [s.name]: 0 }), {} as Record<string, number>)
                                }
                            } : c)),
                    });
                }
                else {
                    console.error('Will remove: ' + statuses.filter(s => s.removalCondition === 'end of turn').map(s => s.name));
                    set({
                        turn: nextTurn,
                        enemies: Object.keys(state.enemies).reduce((prev, typeName) => ({
                            ...prev,
                            [typeName]: {
                                initiative: state.enemies[typeName].initiative,
                                instances: state.enemies[typeName].instances.map((e) => ({
                                    ...e,
                                    statuses: {
                                        ...e.statuses,
                                        ...statuses.filter(s => s.removalCondition === 'end of turn')
                                            .reduce((acc, s) => ({ ...acc, [s.name]: 0 }), {} as Record<string, number>)
                                    }
                                }))
                            }
                        }), {} as Record<string, { initiative: number, instances: EnemyInstance[] }>)
                    });
                }
            },

            // End game: reset everything
            endGame: () => {
                set({
                    level: 0,
                    characters: [],
                    enemies: {},
                    round: 0,
                });
            },
            turnOrder: () => {
                const state = get();
                const characters = state.characters.filter((c) => !c.exhausted).map((c) => ({ initiative: c.initiative, key: c.definitionName }));
                const enemies = Object.keys(state.enemies).filter((typeName) => state.enemies[typeName].instances.some(e => e.currentHealth > 0)).map((typeName) => ({ initiative: state.enemies[typeName].initiative, key: typeName }));
                // Return a sorted array of characters and enemy types by initiative and then by name
                const turns = [...characters, ...enemies].sort((a, b) => a.initiative - b.initiative || a.key.localeCompare(b.key));
                console.error(turns);
                return turns;
            },
        }),
        {
            name: 'gloomhaven-tracker-store', // name of item in storage
        }
    )
);
