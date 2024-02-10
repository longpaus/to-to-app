import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

// Inspired by blueprintjs
export default function BpCheckbox(props) {
    return (
        <Checkbox
            sx={{
                '&:hover': {
                    bgcolor: 'transparent',
                },
            }}
            disableRipple
            color="default"
            checkedIcon={<CheckBoxIcon sx={{
                color: '#373737'
            }} />}
            icon={<CheckBoxOutlineBlankIcon sx={{
                color: '#797979',
            }} />}
            {...props}
        />
    );
}
