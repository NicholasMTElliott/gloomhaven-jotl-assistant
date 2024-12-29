import Dialog from "@mui/material/Dialog";
import { useGameStore } from "../store/gameStore";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import { NumberPicker } from "./NumberPicker";
import Avatar from "@mui/material/Avatar";
import { statuses as allStatuses } from '../data';
import DeleteIcon from '@mui/icons-material/DeleteOutlineTwoTone';
import Button from "@mui/material/Button";

export function CharacterDialog() {
    const {
      characters,
      focus,
      setFocus,
      exhaustCharacter,
      setCharacterStatus,
      turn,
      advanceTurn
    } = useGameStore();
  
    if (focus === undefined) return null;
    const char = characters.find(c => c.definitionName === focus.key);
    if (char === undefined) return null;
  
    return <Dialog
      open={focus !== undefined}
      onClose={() => setFocus(undefined)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Card style={{ padding: 16 }}>
        <Stack spacing={1}>
          <Stack direction={'row'} alignItems={'center'}>
            <h3 style={{ flexGrow: 1 }}>{focus.key}</h3>
            <IconButton onClick={() => {
              exhaustCharacter(focus.key);
              setFocus(undefined)
            }}>
              <DeleteIcon sx={{ width: 32, height: 32 }} />
            </IconButton>
          </Stack>
          {
            allStatuses.map((status) => (
              <Stack key={status.name} direction={'row'} spacing={1} alignItems={'center'}>
                <Avatar
                  src={status.image}
                  sx={{ width: 48, height: 48 }}
                />
                <NumberPicker
                  value={char.statuses[status.name] ?? 0}
                  min={0}
                  max={status.max}
                  onChange={(value) => setCharacterStatus(focus.key, status.name, value)} />
                <label style={{
                  color: char.statuses[status.name] ? 'white' : '#444',
                }}>{status.description}</label>
              </Stack>
            ))
          }
          {turn?.key === char.definitionName && <Button variant='contained' onClick={() => advanceTurn()}>Next Turn</Button>}
        </Stack>
      </Card>
    </Dialog>;
  }
  
  