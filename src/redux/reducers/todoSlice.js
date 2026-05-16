import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: []
}

const todoList = createSlice({
    name: 'Todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
           state.todos =  state.todos.filter(todo => todo?.id !== action.payload) 
        }
    }
})

export const {addTodo, removeTodo} = todoList.actions
export default todoList.reducer