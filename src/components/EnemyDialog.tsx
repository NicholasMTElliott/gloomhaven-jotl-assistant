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
import Chip from "@mui/material/Chip";
export function EnemyDialog() {
  const {
    enemies,
    focus,
    setFocus,
    setEnemyStatus,
    setEnemyHealth,
    spawnEnemy,
    killEnemy,
    turn,
    advanceTurn,
    level
  } = useGameStore();

  if (focus === undefined || focus.idx === undefined) return null;
  const enemy = enemies[focus.key]?.instances[focus.idx];
  if (enemy === undefined) return null;
  const enemyType = enemyTypes.find(t => t.name === enemy.typeName);
  if (enemyType === undefined) return null;

  const nextEnemyIdx = enemies[focus.key].instances.findIndex((i, idx) => idx > focus.idx! && !i.exhausted);

  if (enemy.exhausted) {
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
    <Card style={{
      padding: 16,
      border: enemy.variant === 'elite' ? '1px solid yellow' : undefined
    }}>
      <Stack spacing={0}>
        {/* Content */}
        <Stack spacing={8} direction={'row'}>
          {/* Monster Stats */}
          <Stack spacing={1} alignItems={'center'} sx={{ paddingLeft: 4 }}>
            {/* Header */}
            <Stack direction={'row'} alignItems={'center'} spacing={1}>
              <h3 style={{ flexGrow: 1 }}>{focus.key} # {focus.idx + 1}</h3>{enemy.variant === 'elite' && <Chip
                label="Elite"
                variant="filled"
                size="small"
                sx={{ backgroundColor: 'yellow', '--color-text': 'black' }}
              />}
              <IconButton onClick={() => {
                killEnemy(focus.key, focus.idx!);
                setFocus(undefined)
              }}>
                <DeleteIcon sx={{ width: 32, height: 32 }} />
              </IconButton>
            </Stack>
            <Avatar src={enemyType.image} sx={{ width: 128, height: 128 }} />
            <h4 style={{ marginTop: 16 }}>Current Health</h4>
            <NumberPicker value={enemy.currentHealth} min={0}
              max={20}
              onChange={(value) => setEnemyHealth(focus.key, focus.idx!, value)} />
            <Stack direction={'row'} spacing={1} alignItems={'center'} style={{ paddingTop: 8 }}>
              <Avatar
                sx={{ width: 32, height: 32 }}
                src='/icons/health.png' />
              <label style={{ fontSize: 22 }}>{enemyType.levels[level][enemy.variant].health}</label>
              <Avatar
                sx={{ width: 32, height: 32 }}
                src='/icons/move.png' />
              <label style={{ fontSize: 22 }}>{enemyType.levels[level][enemy.variant].movement}</label>
              <Avatar
                sx={{ width: 32, height: 32 }}
                src='/icons/attack.png' />
              <label style={{ fontSize: 22 }}>{enemyType.levels[level][enemy.variant].damage}</label>
            </Stack>

            {enemyType.levels[level][enemy.variant].extra !== undefined &&
              <React.Fragment>
                <hr style={{ marginTop: 16, width: '100%' }} />
                <label>{enemyType.levels[level][enemy.variant].extra}</label>
              </React.Fragment>}

            {Object.values(enemyType.levels[level][enemy.variant].statuses ?? {}).some(s => s > 0) &&
              <React.Fragment>
                <hr style={{ marginBottom: 8, width: '100%' }} />
                {
                  Object.entries(enemyType.levels[level][enemy.variant].statuses!).map(([status, value]) => (
                    <Stack key={status} direction={'row'} alignItems={'center'} spacing={1}>
                      <Avatar
                        src={statuses.find(s => s.name === status)?.image}
                        sx={{ width: 32, height: 32 }}
                      /><label style={{ fontSize: 22 }}>{value}</label></Stack>))
                }
              </React.Fragment>
            }
          </Stack>
          {/* Statuses */}
          <Stack spacing={1}>
            {allStatuses.map((status) => (
              <Stack key={status.name} direction={'row'} spacing={1} alignItems={'center'}>
                <Avatar
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