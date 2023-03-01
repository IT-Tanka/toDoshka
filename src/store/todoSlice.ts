import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Todo = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
};

type TodosState = {
  list: Todo[];
};

const initialState: TodosState = {
  list: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<Array<string>>) {
      console.log("Payloadaction : ", action);
      state.list.push({
        id: (state.list.length + 1).toString(),
        title: action.payload[0],
        description: action.payload[1],
        completed: false,
      });
    },
  },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
