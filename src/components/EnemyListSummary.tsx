import Card from "@mui/material/Card";
import { useGameStore } from "../store/gameStore";
import Stack from "@mui/material/Stack";
import { EnemySummary } from "./EnemySummary";
import { EnemyList } from "../types";


export function EnemyListSummary(props: { type: string, enemies: EnemyList }) {
    const { turn } = useGameStore();
    const { type, enemies: data } = props;
    return <Card
      variant={turn?.key === type ? 'elevation' : 'outlined'}
      style={{
        padding: 4,
        paddingTop: 0,
        width: '24%',
        border: turn?.key === type ? '2px solid var(--color-accent)' : 'transparent'
      }}><Stack direction={'column'} spacing={1}>
        <h4>({data.initiative}) {type}</h4>
        {
          data.instances.map((inst, i) => (
            <EnemySummary key={i} idx={i} inst={inst} />
          ))
        }
      </Stack></Card>;
  }