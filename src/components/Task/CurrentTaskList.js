
import TaskList from "./TasksList";
export default function CurrentTaskList({tasks,onClickCheckBox}){
    return (
        <TaskList
            tasks={tasks}
            onClickCheckBox={onClickCheckBox}
            isCompleted={false}
            listTitle='Current tasks'
        />
    )
}