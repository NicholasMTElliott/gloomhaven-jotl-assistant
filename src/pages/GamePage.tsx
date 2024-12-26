// src/pages/StartGamePage.tsx

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGameStore } from '../store/gameStore';
import { characters, enemyTypes } from '../data';
import { NumberPicker } from '../components/NumberPicker';
import Stack from '@mui/material/Stack';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export function GamePage() {
  const [selectedLevel, setSelectedLevel] = useState(1);
  const [selectedCharacters, setSelectedCharacters] = useState<string[]>([]);
  const [selectedEnemyTypes, setSelectedEnemyTypes] = useState<string[]>([]);
  const navigate = useNavigate();

  const startGame = useGameStore((state) => state.startGame);

  function toggleCharacter(name: string) {
    setSelectedCharacters((prev) =>
      prev.includes(name) ? prev.filter((x) => x !== name) : [...prev, name]
    );
  }

  function toggleEnemyType(name: string) {
    setSelectedEnemyTypes((prev) =>
      prev.includes(name) ? prev.filter((x) => x !== name) : [...prev, name]
    );
  }

  const handleStartGame = () => {
    // Validate selection counts
    if (selectedCharacters.length < 1 || selectedCharacters.length > 4) {
      alert('Please select between 1 and 4 characters.');
      return;
    }
    if (selectedEnemyTypes.length < 1 || selectedEnemyTypes.length > 6) {
      alert('Please select between 1 and 6 enemy types.');
      return;
    }

    startGame(selectedLevel, selectedCharacters, selectedEnemyTypes);

    // Navigate to round setup
    navigate('/round');
  };

  return (
    <div style={{height: '100%', display: 'flex', flexDirection: 'column', alignItems:'stretch'}}>
      <h1>Start Game</h1>
      <Stack style={{overflow: 'auto', padding: 'var(--spacing-xs)'}} spacing={0}>
        <div>
          <label htmlFor="level-select">Select Game Level:</label>
          <NumberPicker value={selectedLevel} onChange={setSelectedLevel} min={1} max={10} />
        </div>

        <h2>Characters</h2>
        <FormGroup>
          {characters.map((c) => (
            <FormControlLabel key={c.name} control={<Checkbox 
              checked={selectedCharacters.includes(c.name)}
              onChange={() => toggleCharacter(c.name)} />} label={c.name} />
          ))}
        </FormGroup>

        <h2>Enemy Types</h2>
        <FormGroup>
          {enemyTypes.map((e) => (
            <FormControlLabel key={e.name} control={<Checkbox 
              checked={selectedEnemyTypes.includes(e.name)}
              onChange={() => toggleEnemyType(e.name)} />} label={e.name} />
          ))}
        </FormGroup>
      </Stack>
      <div style={{ flexGrow: 1 }} />
      <button onClick={handleStartGame}>Start Game</button>
    </div>
  );
}
