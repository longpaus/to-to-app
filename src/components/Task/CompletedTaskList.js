import TaskList from "./TasksList";

export default function CompletedTaskList({ tasks, onClickCheckBox }) {

    return (
        <TaskList
            tasks={tasks}
            onClickCheckBox={onClickCheckBox}
            isCompleted={true}
            listTitle='Completed tasks'
        />
    )
}