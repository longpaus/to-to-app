import {
    TextField,
    Checkbox
} from '@mui/material';
import { useEffect, useState } from 'react'
import BpCheckbox from '../BPCheckBox';
export default function Task({ time, name, onClickCheckBox,isCompleted}) {
    const [backgroundColor, setBackgroundColor] = useState('#232323')
    const [borderStyle, setBorderStyle] = useState('none');
    const [currentTaskName,setCurrentTaskName] = useState(name)


    return (
        <div
            style={{
                marginTop: '5px',
                marginBottom: '5px',
                display: 'flex',
                border: borderStyle,
            }}
            id={time}
            onMouseOver={() => setBorderStyle('1px solid white')}
            onMouseLeave={() => setBorderStyle('none')}
            // onFocus={handleOnFocus}
            // onBlur={handleOnBlur}
        >
            <BpCheckbox
                onClick={() => onClickCheckBox()}
                checked={isCompleted}
            />
            <TextField
                placeholder='No title'
                size='small'
                InputProps={{
                    disableUnderline: true,
                }}
                value={currentTaskName}
                onChange={e => setCurrentTaskName(e.target.value)}
                sx={{
                    width: '100%',
                    height: '35px',
                    backgroundColor: backgroundColor,
                    input: { color: 'white' }
                }}
            />
        </div>
    )
}