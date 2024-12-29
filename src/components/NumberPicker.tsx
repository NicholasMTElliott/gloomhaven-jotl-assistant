import Select, { SelectChangeEvent } from '@mui/material/Select';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';

import AddIcon from '@mui/icons-material/AddCircleOutlineTwoTone';
import RemoveIcon from '@mui/icons-material/RemoveCircleOutlineTwoTone';
import Stack from '@mui/material/Stack';
import { useCallback } from 'react';

export function NumberPicker(props: { value: number, onChange: (value: number) => unknown, max?: number, min?: number }) {
  const {value, onChange} = props;
  const min = props.min ?? 0;
  const max = props.max ?? 100;

  const decrement = useCallback(() => onChange(Math.max(min, value - 1)), [value, min, onChange]);
  const increment = useCallback(() => onChange(Math.min(max, value + 1)), [value, max, onChange]);
  const setFromDropdown = useCallback((e: SelectChangeEvent<number>) => onChange(Number(e.target.value)), [onChange]);
  
  return <Stack direction="row" spacing={0}>
      <IconButton disabled={value <= min} size='large' onClick={decrement} >
        <RemoveIcon/>
      </IconButton>
      <Select
        value={value}
        label="Age"
        fullWidth
        sx={{minWidth: 72}}
        onChange={setFromDropdown}
      >
        {
          Array.from({ length: max-min+1 }, (_, i) => i + min).map((init) => (
            <MenuItem key={init} value={init}>
              {init}
            </MenuItem >
          ))
        }
      </Select>
      <IconButton disabled={value >= max} size='large' onClick={increment} >
        <AddIcon/>
      </IconButton>
  </Stack>;
}