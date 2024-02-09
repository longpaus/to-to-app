import {
    TextField,
    Checkbox
} from '@mui/material';
import { useEffect, useState } from 'react'
import BpCheckbox from './components/BPCheckBox';
export default function Task({ time, name, onClickCheckBox }) {
    const [backgroundColor, setBackgroundColor] = useState('#232323')
    const [borderStyle, setBorderStyle] = useState('none');
    const [currentTaskName,setCurrentTaskName] = useState(name)
    function handleOnFocus() {
        setBorderStyle('1px solid blue');
    }

    function handleOnBlur() {
        setBorderStyle('none');
    }

    function handleOnChange(){
        if(currentTaskName === ''){
            setCurrentTaskName()
        }
    }
    return (
        <div
            style={{
                marginTop: '5px',
                marginBottom: '5px',
                display: 'flex',
                border: borderStyle,
            }}
            id={time}
            onMouseOver={() => setBackgroundColor('#2e2e2e')}
            onMouseLeave={() => setBackgroundColor('#232323')}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
        >
            <BpCheckbox
                onClick={() => onClickCheckBox()}
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