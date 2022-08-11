import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";
import {v1} from "uuid";


export type FilterValuesType = 'all' | 'completed' | 'active'

function App() {
    let [tasks, setTasks] = useState([
        { id: v1(), title: "HTML&CSS", isDone: true },
        { id: v1(), title: "JS", isDone: true },
        { id: v1(), title: "ReactJS", isDone: false },
        { id: v1(), title: "Angular", isDone: false },

    ])

    const[filter, setFilter] = useState<FilterValuesType>('all')


    const removeTask = (taskID:string) => {
        //tasks=tasks.filter(el => el.id!==taskID)
        setTasks(tasks.filter(el => el.id!==taskID))
    }

    let filteredTasks = tasks;

    if (filter==='active') {
        filteredTasks = filteredTasks.filter(el => el.isDone === false)
    }
    if (filter==='completed') {
        filteredTasks = filteredTasks.filter(el => el.isDone === true)
    }

    const filterTask = (filteredValue: FilterValuesType) => {
        setFilter(filteredValue)

    }

    const addTask = (title:string) => {
        const newTask = { id: v1(), title, isDone: false };
        setTasks([newTask, ...tasks]);

    }

    return (
        <div className="App">
            <Todolist
                title='What to learn'
                tasks={filteredTasks}
                removeTask={removeTask}
                filterTask={filterTask}
                addTask={addTask}
            />

        </div>
    );
}

export default App;
