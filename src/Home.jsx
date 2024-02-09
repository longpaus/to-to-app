import {
    TextField,
} from '@mui/material'
import { useState } from 'react'

import Task from './Task'

export default function Home() {
    const [tasks, setTasks] = useState([])
    const [completedTasks,setCompletedTasks] = useState([])
    const [newTaskValue,setNewTaskValue] = useState('')

    function onCompletedHandler(id){
        const target = tasks.find(task => task.time === id)
        const newTasks = tasks.filter(task => task.time !== id)
        setTasks(newTasks)
        setCompletedTasks([target,...completedTasks])
    }

    function onUnCompleteHandler(id){
        const target = completedTasks.find(task => task.time === id)
        const newTasks = [...tasks,target].sort((a,b) => a.time - b.time).reverse()
        setTasks(newTasks)
        const newCompletedTasks = completedTasks.filter(task => task.time !== id)
        setCompletedTasks(newCompletedTasks)
    }
    function keyDownHandler(e) {

        if (e.key === 'Enter') {
            const currentTime = Date.now();
            const newTask = { name: e.target.value, time: currentTime};
            setTasks([newTask, ...tasks]);
            setNewTaskValue('')
        }
    }
    return (
        <div style=
            {{
                width: '415px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
            }}>
            <TextField
                size='small'
                label='New task'
                variant="outlined"
                value={newTaskValue}
                onKeyDown={e => keyDownHandler(e)}
                onChange={e => setNewTaskValue(e.target.value)}
                sx={{
                    width: '100%',
                    backgroundColor: '#2a2a2a',
                    height: '35px',
                    mt: '50px',
                    alignSelf: 'center',
                    input: { color: 'white' }
                }}
                InputLabelProps={{
                    style: {
                        color: '#505050',
                    }
                }}
            >
            </TextField>
            <div style={{ marginTop: '20px' }}>

                {tasks.map(task => (
                    <Task
                        key={task.time}
                        id={task.time}
                        name={task.name}
                        onClickCheckBox={() => onCompletedHandler(task.time)}
                    />
                ))}
            </div>

            <div style={{marginTop:'20px'}}>
                {completedTasks.length > 0 &&  (

                    completedTasks.map(task => (
                    <Task
                        key={task.time}
                        id={task.time}
                        name={task.name}
                        onClickCheckBox={() => onUnCompleteHandler(task.time)}
                    />
                )))}
            </div>

        </div>
    )
}