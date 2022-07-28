import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";
import {debuglog} from "util";

function App() {
    let [tasks, setTasks] = useState([
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false },
        { id: 4, title: "Angular", isDone: false }
    ])




    const removeTask = (taskID:number) => {
        //tasks=tasks.filter(el => el.id!==taskID)
        setTasks(tasks.filter(el => el.id!==taskID))
    }

    //let filteredTasks = tasks

    //const[filter, setFilter] = useState('All')


    //if (filter==='Active') {
        //filteredTasks= tasks.filter(el => el.isDone)
    //}
    //if (filter==='Completed') {
        //filteredTasks= tasks.filter(el => !el.isDone)
    //}

    //const filterTask = (filteredValue:string) => {
        //setFilter(filteredValue)

    //}

    return (
        <div className="App">
            <Todolist
                title='What to learn'
                tasks={tasks}
                removeTask={removeTask}
                //filterTask={filterTask}
            />

        </div>
    );
}

export default App;
