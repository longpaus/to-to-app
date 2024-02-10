import {
    TextField,
} from '@mui/material'
import { useState } from 'react'

import Task from './components/Task/Task'
import TaskList from './components/Task/TasksList'
import CurrentTaskList from './components/Task/CurrentTaskList'
import CompletedTaskList from './components/Task/CompletedTaskList'

export default function Home() {
    const [tasks, setTasks] = useState([])
    const [completedTasks, setCompletedTasks] = useState([])
    const [newTaskValue, setNewTaskValue] = useState('')

    function onCompletedHandler(id) {
        const target = tasks.find(task => task.time === id)
        const newTasks = tasks.filter(task => task.time !== id)
        setTasks(newTasks)
        setCompletedTasks([target, ...completedTasks])
    }

    function onUnCompleteHandler(id) {
        const target = completedTasks.find(task => task.time === id)
        const newTasks = [...tasks, target].sort((a, b) => a.time - b.time).reverse()
        setTasks(newTasks)
        const newCompletedTasks = completedTasks.filter(task => task.time !== id)
        setCompletedTasks(newCompletedTasks)
    }
    function keyDownHandler(e) {

        if (e.key === 'Enter') {
            const currentTime = Date.now();
            const newTask = { name: e.target.value, time: currentTime };
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
                autoFocus
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
            <CurrentTaskList tasks={tasks} onClickCheckBox={onCompletedHandler} />
            <CompletedTaskList tasks={completedTasks} onClickCheckBox={onUnCompleteHandler} />

        </div>
    )
}