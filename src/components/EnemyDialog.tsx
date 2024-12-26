import Dialog from "@mui/material/Dialog";
import { useGameStore } from "../store/gameStore";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { NumberPicker } from "./NumberPicker";
import Avatar from "@mui/material/Avatar";
import { statuses as allStatuses } from '../data';
import DeleteIcon from '@mui/icons-material/DeleteOutlineTwoTone';

export function EnemyDialog() {
    const {
      enemies,
      focus,
      setFocus,
      setEnemyStatus,
      setEnemyHealth,
      spawnEnemy
    } = useGameStore();
  
    if (focus === undefined || focus.idx === undefined) return null;
    const enemy = enemies[focus.key]?.instances[focus.idx];
    if (enemy === undefined) return null;
  
    if (!enemy.currentHealth) {
      return <Dialog
        open={focus !== undefined}
        onClose={() => setFocus(undefined)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card style={{ padding: 16 }}>
          <Stack spacing={1}>
            <h3 style={{ flexGrow: 1 }}>{focus.key} # {focus.idx + 1}</h3>
            <Stack direction='row' spacing={1}>
              <Button
                variant='outlined'
                onClick={() => spawnEnemy(focus.key, 'normal', focus.idx!)}>
                Spawn Normal
              </Button>
              <Button
                variant='outlined'
                onClick={() => spawnEnemy(focus.key, 'elite', focus.idx!)}>
                Spawn Elite
              </Button>
            </Stack>
          </Stack>
        </Card>
      </Dialog>;
    }
  
    return <Dialog
      open={focus !== undefined}
      onClose={() => setFocus(undefined)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Card style={{ padding: 16 }}>
        <Stack spacing={1}>
          <Stack direction={'row'} alignItems={'center'}>
            <h3 style={{ flexGrow: 1 }}>{focus.key} # {focus.idx + 1}</h3>
            <IconButton onClick={() => {
              setEnemyHealth(focus.key, focus.idx!, 0);
              setFocus(undefined)
            }}>
              <DeleteIcon sx={{ width: 32, height: 32 }} />
            </IconButton>
          </Stack>
          <NumberPicker value={enemy.currentHealth} min={0}
            max={20}
            onChange={(value) => setEnemyHealth(focus.key, focus.idx!, value)} />
          {allStatuses.map((status) => (
            <Stack direction={'row'} spacing={1} alignItems={'center'}>
              <Avatar
                key={status.name}
                src={status.image}
                sx={{ width: 48, height: 48 }}
              />
              <NumberPicker
                value={enemy.statuses[status.name] ?? 0}
                min={0}
                max={status.max}
                onChange={(value) => setEnemyStatus(focus.key, focus.idx!, status.name, value)} />
              <label style={{
                color: enemy.statuses[status.name] ? 'white' : '#444',
              }}>{status.description}</label>
            </Stack>
          ))
          }
        </Stack>
      </Card>
    </Dialog>;
  }