import React from "react";
import {useTodoStore} from "./store";

export const ZustandDemo: React.FC = () => {
    return <div>
        <AddButton/>
        <Table/>
    </div>
}

const AddButton: React.FC = () => {
    const state = useTodoStore()
    return <div style={{border: '1px solid red'}}>
        <button onClick={() => state.addTodo()}>Add todo</button>
    </div>
}

const Table: React.FC = () => {
    const state = useTodoStore()
    return <ul>
        {state.state.todos.map((todo) => <li key={todo.name}>
            {todo.name} - {todo.description}
        </li>)}
    </ul>;
}
