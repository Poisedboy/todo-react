import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todoList: []
};

export const todoListSlice = createSlice({
    name: 'todoList',
    initialState,
    reducers: {
        saveTodo: (state, action) => {
            state.todoList.push(action.payload);
        },
        deleteTodo: (state, action) => {
            state.todoList = state.todoList.filter(todo => todo.id !== action.payload);
        },
        sortByA: (state, action) => {
            state.todoList = state.todoList.sort(function (a, b) {
                if (a.title < b.title) {
                  return -1;
                }
                if (a.title > b.title) {
                  return 1;
                }
                return 0;
              });
        }
    }
});

export const { saveTodo, deleteTodo, sortByA, coincidence } = todoListSlice.actions;
export default todoListSlice.reducer;
