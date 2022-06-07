import React from "react";
import {addTodo, useTodoState} from "./valtio-proxy";


export const ValtioDemo: React.FC = () => {
    return <div>
        <AddButton/>
        <Table/>
    </div>
}

const AddButton: React.FC = () => {
    return <div style={{border: '1px solid red'}}>
        <button onClick={addTodo}>Add todo</button>
    </div>
}

const Table: React.FC = () => {
    const todoState = useTodoState()
    return <ul>
        {todoState.todos.map((todo) => <li key={todo.name}>
            {todo.name} - {todo.description}
        </li>)}
    </ul>;
}
