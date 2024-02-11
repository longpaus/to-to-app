import {
    TextField,
    Checkbox,
    styled
} from '@mui/material';
import { useEffect, useState } from 'react'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import BpCheckbox from '../BPCheckBox';
export default function Task({ time, name, onClickCheckBox, isCompleted,onDelete}) {
    const [borderStyle, setBorderStyle] = useState('none');
    const [currentTaskName, setCurrentTaskName] = useState(name)
    const [isHovered, setIsHovered] = useState(false)

    function handleOnMouseOver() {
        setBorderStyle('1px solid white')
        setIsHovered(true)
    }

    function handleOnMouseLeave() {
        setBorderStyle('none')
        setIsHovered(false)
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
            onMouseOver={handleOnMouseOver}
            onMouseLeave={handleOnMouseLeave}
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
                    backgroundColor: '#232323',
                    input: { color: 'white' }
                }}
            />
            <DeleteButtonContainer
                onClick={() => onDelete()}>

                <DeleteOutlineOutlinedIcon
                    sx={{
                        color: 'grey',
                        display: isHovered ? 'block' : 'none'
                    }}
                />
            </DeleteButtonContainer>
        </div>
    )
}

const DeleteButtonContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
    cursor:'pointer',
})