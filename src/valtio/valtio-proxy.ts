import {proxy, snapshot, subscribe, useSnapshot} from "valtio";
import {createRandomTodo, TodoState} from "../model/todo";


export const todosState = proxy<TodoState>({
    todos: [
        {
            name: 'First todo',
            description: 'A description'
        }
    ]
})

export function addTodo() {
    todosState.todos.push(createRandomTodo())
}



export function useTodoState() {
    return useSnapshot(todosState)
}


subscribe(todosState, () => {
    console.log(snapshot(todosState))
})
