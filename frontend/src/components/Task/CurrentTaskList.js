
import TaskList from "./TasksList";
export default function CurrentTaskList({tasks,onClickCheckBox,onDelete}){
    return (
        <TaskList
            tasks={tasks}
            onClickCheckBox={onClickCheckBox}
            isCompleted={false}
            listTitle='Tasks'
            onDelete={onDelete}
        />
    )
}