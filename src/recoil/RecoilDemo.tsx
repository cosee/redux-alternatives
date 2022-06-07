import {RecoilRoot, useRecoilState, useRecoilValue} from "recoil";
import React from "react";
import {todosAtom} from "./demo-atom";
import {createRandomTodo} from "../model/todo";


export const RecoilDemo: React.FC = () => {
    return <RecoilRoot>
        <AddButton/>
        <Table/>
    </RecoilRoot>
}



const AddButton: React.FC = () => {
    const [todoState, setTodoState] = useRecoilState(todosAtom)

    function addTodo() {
        setTodoState({
            todos: [
                ...todoState.todos,
                createRandomTodo()
            ]
        });
    }

    return <div style={{border: '1px solid red'}}>
        <button onClick={addTodo}>Add todo</button>
    </div>
}

const Table: React.FC = () => {
    const todoState = useRecoilValue(todosAtom)
    return <ul>
        {todoState.todos.map((todo) => <li key={todo.name}>
            {todo.name} - {todo.description}
        </li>)}
    </ul>;
}
