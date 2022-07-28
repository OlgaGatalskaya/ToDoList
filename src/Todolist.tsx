import React, {useState} from "react";

type TodoListType = {
    title: string,
    body?: number,
    tasks: Array<ArrayPropsType>,
    removeTask: (taskID:number)=>void
    //filterTask: (filteredValue:string) => void
}

type ArrayPropsType = {
    id: number,
    title: string,
    isDone: boolean
}



export const Todolist = (props:TodoListType) => {

    let filteredTasks = props.tasks

    const[filter, setFilter] = useState('All')


    if (filter==='Active') {
        filteredTasks= props.tasks.filter(el => el.isDone)
    }
    if (filter==='Completed') {
        filteredTasks= props.tasks.filter(el => !el.isDone)
    }


    const filterTask = (filteredValue:string) => {
        setFilter(filteredValue)


    }

    return (
        <div>
            <h3>{props.title}</h3>
            <h4>{props.body}</h4>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {filteredTasks.map((task, index) => {
                    return (
                        <li key={index}>
                            <button onClick={()=>{props.removeTask(task.id)}}>x</button>
                            <input type={"checkbox"} checked={task.isDone}/>
                            <span>{task.title}</span>
                        </li>
                    )
                })}

            </ul>
            <div>
                <button  onClick={()=>(filterTask('All'))}>All</button>
                <button  onClick={()=>(filterTask('Active'))}>Active</button>
                <button  onClick={()=>(filterTask('Completed'))}>Completed</button>
            </div>
        </div>
    )
}