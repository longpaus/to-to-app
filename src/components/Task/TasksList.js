import {
    List,
    ListItemButton,
    ListItemText,
    Collapse,
    styled
} from '@mui/material'

import {
    ExpandLess,
    ExpandMore
} from '@mui/icons-material'
import {
    useState,
} from 'react'
import Task from "./Task"
export default function TaskList({ tasks, onClickCheckBox, isCompleted, listTitle,onDelete }) {
    const [open, setOpen] = useState(true)
    return tasks.length > 0 && (
        <List style={{ marginTop: '20px', width: '100%' }}>

            <ListItemButton
                sx={{
                    color: 'white',
                    height: '20px',
                    padding: 0,
                }}
                onClick={() => setOpen(!open)}
            >
                {open ? <ExpandLess /> : <ExpandMore />}
                <ListItemText >
                    {listTitle}<NumberOfTasks>{open ? '' : ' ' + tasks.length}</NumberOfTasks>
                </ListItemText>
            </ListItemButton>

            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {tasks.map(task => (
                        <Task
                            key={task.time}
                            id={task.time}
                            name={task.name}
                            onClickCheckBox={() => onClickCheckBox(task.time)}
                            isCompleted={isCompleted}
                            onDelete={() => onDelete(task.time)}
                        />

                    ))}
                </List>
            </Collapse>

        </List>
    )
}

const NumberOfTasks = styled('span')({
    color:'#505050'
})