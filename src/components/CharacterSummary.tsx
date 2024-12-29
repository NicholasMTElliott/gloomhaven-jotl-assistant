import Card from "@mui/material/Card";
import { useGameStore } from "../store/gameStore";
import { CharacterInstance, StatusNames } from "../types";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import { statuses as allStatuses } from '../data';

export function CharacterSummary(props: { char: CharacterInstance }) {
    const { char } = props;
    const { turn, setFocus } = useGameStore();
    return (
      <Card
        onClick={() => setFocus(char.definitionName)}
        key={char.definitionName}
        variant={turn?.key === char.definitionName ? 'elevation' : 'outlined'}
        style={{
          minHeight: 70,
          padding: 4,
          paddingTop: 0,
          width: '24%',
          border: turn?.key === char.definitionName ? '2px solid var(--color-accent)' : 'transparent'
        }}>
        <Stack direction={'column'} spacing={0}>
          <h4 style={{ color: char.exhausted ? '#444' : 'white' }}>({char.initiative}) {char.definitionName}</h4>
          {char.exhausted && <label>Exhausted</label>}
          {!char.exhausted &&
            <Stack direction={'row'} spacing={1} flexWrap={'wrap'}>
              {
                Object.keys(char.statuses)
                  .map(s => s as StatusNames)
                  .filter(status => char.statuses[status])
                  .map((status) => (
                    <Avatar
                      key={status}
                      src={allStatuses.find(s => s.name === status)?.image}
                      sx={{ width: 24, height: 24 }}
                    >{char.statuses[status]}</Avatar>
                  ))
              }
            </Stack>
          }
        </Stack>
      </Card>
    );
  }