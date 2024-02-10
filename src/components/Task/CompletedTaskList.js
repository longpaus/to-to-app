import TaskList from "./TasksList";

export default function CompletedTaskList({ tasks, onClickCheckBox, onDelete }) {

    return (
        <TaskList
            tasks={tasks}
            onClickCheckBox={onClickCheckBox}
            isCompleted={true}
            listTitle='Completed'
            onDelete={onDelete}
        />
    )
}