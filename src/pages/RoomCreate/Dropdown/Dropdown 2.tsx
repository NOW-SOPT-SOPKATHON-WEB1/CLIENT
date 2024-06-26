import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import React from 'react';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const memberCnts = [4, 5, 6, 7, 8, 9, 10, 11, 12];

export const Dropdown = () => {
  const [memberCnt, setMemberCnt] = useState<number>(4);
  console.log({memberCnt})
  const handleChange = (event) => {
    setMemberCnt(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 335, backgroundColor: "#D6D6D6", border: "0px", borderRadius: "8px"}}>
      <InputLabel id="select-member-count">인원수</InputLabel>
        <Select
          labelId="select-member-count"
          id="select-member-count"
          value={memberCnt}
          onChange={handleChange}
          input={<OutlinedInput label="인원수" />}
          MenuProps={MenuProps}
        >
          {memberCnts.map((cnt) => (
            <MenuItem
              key={cnt}
              value={cnt}
            >
              {cnt}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}