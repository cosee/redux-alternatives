
export interface TodoState {
    todos: Todo[]
}

export interface Todo {
    name: string
    description: string
}


export function createRandomTodo() {
    return {
        name: "random todo " + Math.floor(Math.random() * 10000),
        description: "random todo " + Math.floor(Math.random() * 10000)
    };
}
