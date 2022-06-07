import create from "zustand";
import {createRandomTodo, TodoState} from "../model/todo";

interface State {
    state: TodoState,
    addTodo(): void
}

export const useTodoStore = create<State>(set => ({
    state: {
        todos: [
            {
                name: 'First todo',
                description: 'A description'
            }
        ]
    },
    addTodo: () => set(state => ({
        state: {
            todos: [...state.state.todos, createRandomTodo()]
        }
    }))
}))


useTodoStore.subscribe((state, previousState) => console.log(state.state))
