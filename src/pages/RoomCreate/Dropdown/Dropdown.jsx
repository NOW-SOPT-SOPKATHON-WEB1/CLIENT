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
  const [memberCnt, setMemberCnt] = useState(4);
  console.log({ memberCnt });
  const handleChange = (event) => {
    setMemberCnt(event.target.value);
  };

  return (
    <div>
      <FormControl
        sx={{
          m: 1,
          width: '33.5rem',
          height: '5.3rem',
          margin: 0,
          backgroundColor: 'white',
          borderRadius: '10px',
          border: '1px solid #F5F6F9',
          borderRadius: '8px',
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'transparent',
            },
            '&:hover fieldset': {
              borderColor: 'transparent',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'transparent',
            },
          },
        }}
      >
        <Select
          labelId='select-member-count'
          id='select-member-count'
          value={memberCnt}
          onChange={handleChange}
          MenuProps={MenuProps}
          sx={{
            fontSize: ' 18px',
            fontWeight: 500,
            lineHeight: '150%',
            letterSpacing: '-0.18px',
          }}
        >
          {memberCnts.map((cnt) => (
            <MenuItem key={cnt} value={cnt}>
              {cnt}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
