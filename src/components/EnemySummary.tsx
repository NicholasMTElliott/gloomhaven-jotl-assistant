import Card from "@mui/material/Card";
import { useGameStore } from "../store/gameStore";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import { statuses as allStatuses } from '../data';
import { EnemyInstance, StatusNames } from "../types";
import Chip from "@mui/material/Chip";

export function EnemySummary(props: { idx: number, inst: EnemyInstance }) {
  const { setFocus } = useGameStore();
  const { idx, inst } = props;
  if (inst.exhausted) {
    return <Card
      onClick={() => setFocus(inst.typeName, idx)}
      variant='outlined' style={{
        padding: 2,
        minHeight: 40
      }}>
      <Stack direction={'row'} spacing={0}>
        <h5>{idx + 1}:</h5>
      </Stack>
    </Card>
  }

  return <Card
    variant='outlined'
    onClick={() => setFocus(inst.typeName, idx)}
    style={{
      padding: 2,
      minHeight: 40,
      border: inst.variant === 'elite' ? '1px solid yellow' : undefined
    }}>
    <Stack direction={'row'} alignItems={'center'} spacing={1} flexWrap={'wrap'}>
      <h5>{idx+1}: </h5>
      <Avatar
        sx={{ width: 24, height: 24 }}
        src='/icons/health.png' />
      {inst.currentHealth}
      {
        Object.keys(inst.statuses)
          .map(s => s as StatusNames)
          .filter(status => inst.statuses[status])
          .map((status) => (
            <Avatar
              key={status}
              src={allStatuses.find(s => s.name === status)?.image}
              sx={{ width: 24, height: 24 }}
            >{inst.statuses[status]}</Avatar>
          ))
      }
      {inst.variant === 'elite' && <Chip
        label="Elite"
        variant="filled"
        size="small"
        sx={{ backgroundColor: 'yellow', '--color-text': 'black' }}
      />}
    </Stack>
  </Card>;
}