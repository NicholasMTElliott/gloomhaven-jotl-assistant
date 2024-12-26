// src/pages/TurnPage.tsx
import { useGameStore } from '../store/gameStore';
import { useNavigate } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { EnemyDialog } from '../components/EnemyDialog';
import { CharacterDialog } from '../components/CharacterDialog';
import { CharacterSummary } from '../components/CharacterSummary';
import { EnemyListSummary } from '../components/EnemyListSummary';

export function TurnPage() {
  const navigate = useNavigate();
  const {
    characters,
    enemies,
    advanceTurn,
    endGame,
    endRound,
    round,
    focus,
    turn } = useGameStore();

  const handleAdvanceTurn = () => {
    advanceTurn();
  };

  const handleEndRound = () => {
    endRound();
    navigate('/round');
  };

  const handleEndGame = () => {
    endGame();
    navigate('/');
  };

  const isEndOfRound = turn === undefined;
  return (
    <div style={{ overflow: 'auto', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
      <h2>Round {round}</h2>
      <h3>Characters</h3>
      <Stack direction={'row'} spacing={2}>
        {
          characters.map((char) => (
            <CharacterSummary key={char.definitionName} char={char} />
          ))
        }
      </Stack>
      <h3>Enemies</h3>
      <Stack direction={'row'} spacing={2}>
        {
          Object.entries(enemies)
            .map(([enemy, data]) => <EnemyListSummary key={enemy} type={enemy} enemies={data} />)
        }
      </Stack>

      <div style={{ flexGrow: 1, minHeight: 8 }} />
      <Stack direction={'row'} spacing={2}>
        {!isEndOfRound && <Button fullWidth variant='contained' onClick={handleAdvanceTurn}>Next Turn</Button>}
        <Button fullWidth variant='contained' onClick={handleEndRound}>Next Round</Button>
        <Button fullWidth variant='contained' onClick={handleEndGame}>End Game</Button>
      </Stack>
      {(focus && focus.idx === undefined) && <CharacterDialog />}
      {(focus && focus.idx !== undefined) && <EnemyDialog />}
    </div>
  );
}
