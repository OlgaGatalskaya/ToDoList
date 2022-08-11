import React, {ChangeEvent, useState} from "react";
import {FilterValuesType} from "./App";
import {Button} from "./components/Button";


type TodoListType = {
    title: string,
    body?: number,
    tasks: Array<ArrayPropsType>,
    removeTask: (taskID: string) => void
    filterTask: (filteredValue: FilterValuesType) => void,
    addTask: (title: string) => void

}

type ArrayPropsType = {
    id: string,
    title: string,
    isDone: boolean
}


export const Todolist = (props: TodoListType) => {

    // Для input
    const [title, setTitle] = useState('')

    const addTaskHandler = () => {
        props.addTask(title)
        setTitle('')
    }

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onKeyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            props.addTask(title)
            setTitle('')
        }
    }


    const filterHandler = (filteredValue: FilterValuesType) => {
        props.filterTask(filteredValue)
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <h4>{props.body}</h4>
            <div>
                <input
                    value={title}
                    onChange={onChangeHandler}
                    onKeyDown={onKeyPressHandler}
                />
                
                <Button callBack={()=>{addTaskHandler()}} nickName={'+'}/>
            </div>
            <ul>
                {props.tasks.map((task, index) => {
                    const removeTaskHandler = () => {
                        props.removeTask(task.id)
                    }
                    return (
                        <li key={index}>
                            <Button callBack={() => {
                                removeTaskHandler()
                            }} nickName={'x'}/>
                            <input type={"checkbox"} checked={task.isDone}/>
                            <span>{task.title}</span>
                        </li>
                    )
                })}

            </ul>
            <div>
                <Button callBack={() => {
                    filterHandler('all')
                }} nickName={'All'}/>
                <Button callBack={() => {
                    filterHandler('active')
                }} nickName={'Active'}/>
                <Button callBack={() => {
                    filterHandler('completed')
                }} nickName={'Completed'}/>

            </div>
        </div>
    )
}