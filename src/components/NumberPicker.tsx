import Select from '@mui/material/Select';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';

import AddIcon from '@mui/icons-material/AddCircleOutlineTwoTone';
import RemoveIcon from '@mui/icons-material/RemoveCircleOutlineTwoTone';
import Stack from '@mui/material/Stack';

export function NumberPicker(props: { value: number, onChange: (value: number) => unknown, max?: number, min?: number }) {
  const {value, onChange} = props;
  const min = props.min ?? 0;
  const max = props.max ?? 100;

  return <Stack direction="row" spacing={0}>
      <IconButton disabled={value <= min} size='large' onClick={() => onChange(Math.max(min, value - 1))} >
        <RemoveIcon/>
      </IconButton>
      <Select
        value={value}
        label="Age"
        fullWidth
        sx={{minWidth: 72}}
        onChange={(e) => onChange(Number(e.target.value))}
      >
        {
          Array.from({ length: max-min+1 }, (_, i) => i + min).map((init) => (
            <MenuItem  key={init} value={init}>
              {init}
            </MenuItem >
          ))
        }
      </Select>
      <IconButton disabled={value >= max} size='large' onClick={() => onChange(Math.min(max, value + 1))}  >
        <AddIcon/>
      </IconButton>
  </Stack>;
}