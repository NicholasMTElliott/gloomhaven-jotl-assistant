import Dialog from "@mui/material/Dialog";
import { useGameStore } from "../store/gameStore";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { NumberPicker } from "./NumberPicker";
import Avatar from "@mui/material/Avatar";
import { statuses as allStatuses, statuses } from '../data';
import DeleteIcon from '@mui/icons-material/DeleteOutlineTwoTone';
import { enemyTypes } from "../data";
import React from "react";
export function EnemyDialog() {
  const {
    enemies,
    focus,
    setFocus,
    setEnemyStatus,
    setEnemyHealth,
    spawnEnemy,
    turn,
    advanceTurn,
    level
  } = useGameStore();

  if (focus === undefined || focus.idx === undefined) return null;
  const enemy = enemies[focus.key]?.instances[focus.idx];
  if (enemy === undefined) return null;
  const enemyType = enemyTypes.find(t => t.name === enemy.typeName);
  if (enemyType === undefined) return null;

  const nextEnemyIdx = enemies[focus.key].instances.findIndex((i, idx) => idx > focus.idx! && i.currentHealth > 0);

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
    fullWidth
    maxWidth={'md'}
  >
    <Card style={{ padding: 16 }}>
      <Stack spacing={0}>

        {/* Content */}
        <Stack spacing={8} direction={'row'}>
          {/* Monster Stats */}
          <Stack spacing={1} alignItems={'center'}>{/* Header */}
            <Stack direction={'row'} alignItems={'center'} spacing={1}>
              <h3 style={{ flexGrow: 1 }}>{focus.key} # {focus.idx + 1}</h3>
              <IconButton onClick={() => {
                setEnemyHealth(focus.key, focus.idx!, 0);
                setFocus(undefined)
              }}>
                <DeleteIcon sx={{ width: 32, height: 32 }} />
              </IconButton>
            </Stack>
            <Avatar src={enemyType.image} sx={{ width: 128, height: 128 }} />
            <h4>Health ({enemyType.levels[level][enemy.variant].health})</h4>
            <NumberPicker value={enemy.currentHealth} min={0}
              max={20}
              onChange={(value) => setEnemyHealth(focus.key, focus.idx!, value)} />
            <Stack direction={'row'} spacing={1}>
              <Stack flexGrow={1}>
                <h4>Movement</h4>
                <label>{enemyType.levels[level][enemy.variant].movement}</label>
              </Stack>
              <Stack flexGrow={1}>
                <h4>Attack</h4>
                <label>{enemyType.levels[level][enemy.variant].damage}</label>
              </Stack>
            </Stack>

            {enemyType.levels[level][enemy.variant].extra !== undefined &&
              <React.Fragment>
                <hr />
                <label>{enemyType.levels[level][enemy.variant].extra}</label>
              </React.Fragment>}

            {Object.values(enemyType.levels[level][enemy.variant].statuses ?? {}).some(s => s > 0) &&
              <React.Fragment>
                <hr />
                {
                  Object.entries(enemyType.levels[level][enemy.variant].statuses!).map(([status, value]) => (
                    <Stack direction={'row'} alignItems={'center'} spacing={4}>
                      <Avatar
                        key={status}
                        src={statuses.find(s => s.name === status)?.image}
                        sx={{ width: 48, height: 48 }}
                      /><h3>{value}</h3></Stack>))
                }
              </React.Fragment>
            }
          </Stack>
          {/* Statuses */}
          <Stack spacing={1}>
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
            {(turn?.key === enemy.typeName && nextEnemyIdx > focus.idx) && <Button variant='contained' onClick={() => setFocus(focus.key, nextEnemyIdx)}>Next Enemy</Button>}
            {(turn?.key === enemy.typeName && !(nextEnemyIdx > focus.idx)) && <Button variant='contained' onClick={() => advanceTurn()}>Next Turn</Button>}
          </Stack>
        </Stack>
      </Stack>
    </Card>
  </Dialog>;
}