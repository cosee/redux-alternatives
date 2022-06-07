import {atom} from "recoil";
import {TodoState} from "../model/todo";


export const todosAtom = atom<TodoState>({
    key: 'todos',
    default: {
        todos: [{
            name: 'First todo',
            description: 'A description'
        }]
    },
    effects: [
        ({onSet}) => {
            onSet(newState => console.log(newState))
        }
    ]
});


/*
 * Created by Facebook people
 *
 * Uses React.Context internally (not accessible outside React)
 * More apis (atomFamilies, selectors)
 *
 * Effects possible
 * - async api
 * - difficult with testing
 *
 */
