// src/pages/StartRoundPage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGameStore } from '../store/gameStore';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid2';
import { NumberPicker } from '../components/NumberPicker';

export function RoundPage() {
  const navigate = useNavigate();
  const { characters, enemies, round, turn, endGame, startRound} = useGameStore();

  // For each character, store initiative
  const [charInitiatives, setCharInitiatives] = useState<{
    [charName: string]: number;
  }>(() =>
    characters.reduce((acc, c) => {
      acc[c.definitionName] = 50; // default
      return acc;
    }, {} as Record<string, number>)
  );

  // For each enemy type, we only store one initiative value (since each enemy type shares initiative)
  // We'll identify them by their "typeName" references in the store or (any you might track)
  const uniqueEnemyTypeNames = Object.keys(enemies);
  const [enemyTypeInitiatives, setEnemyTypeInitiatives] = useState<{
    [enemyTypeName: string]: number;
  }>(() =>
    uniqueEnemyTypeNames.reduce((acc, e) => {
      acc[e] = 50; // default
      return acc;
    }, {} as Record<string, number>)
  );

  const handleSetCharInitiative = (charName: string, value: number) => {
    setCharInitiatives((prev) => ({ ...prev, [charName]: value }));
  };

  const handleSetEnemyTypeInitiative = (typeName: string, value: number) => {
    setEnemyTypeInitiatives((prev) => ({ ...prev, [typeName]: value }));
  };

  const handleStartRound = () => {
    startRound(charInitiatives, enemyTypeInitiatives);
    navigate('/turn');
  };

  const handleEndGame = () => {
    endGame();
    navigate('/');
  };

  if(turn === undefined) 
  {
    // Return the setup round page
    return (
      <div style={{height: '100%', display: 'flex', flexDirection: 'column', alignItems:'stretch'}}>
        <h2>Set Up Round {round+1}</h2>
        <Stack style={{overflow: 'auto', padding: 'var(--spacing-xs)'}} spacing={0}>
          <Grid container spacing={0}>
            <Grid size={12}>
                <h3>Characters</h3>
            </Grid>
            {characters.filter((c) => !c.exhausted).map((c) => (
              <React.Fragment key={c.definitionName}>
                <Grid size={6}>
                <span>{c.definitionName}</span>
                </Grid>
                <Grid size={6}>
                  <NumberPicker value={charInitiatives[c.definitionName]} onChange={(value) => handleSetCharInitiative(c.definitionName, value)} />
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
          <Grid container spacing={0}>
            <Grid size={12}>
              <h3>Enemy Types</h3>
            </Grid>
            {uniqueEnemyTypeNames.map((typeName) => (
              <React.Fragment key={typeName}>
                <Grid size={6}>
                  <span>{typeName}</span>
                </Grid>
                <Grid size={6}>
                  <NumberPicker value={enemyTypeInitiatives[typeName]} onChange={(value) => handleSetEnemyTypeInitiative(typeName, value)} />
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Stack>
        <div style={{ flexGrow: 1 }} />
        <Stack direction={'row'} spacing={2}>
          <Button variant='contained' onClick={handleStartRound}>Start Round {round + 1}</Button>
          <Button variant='contained' onClick={handleEndGame}>End Game</Button>
        </Stack>
      </div>
    );
  }
}
