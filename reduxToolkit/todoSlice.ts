// todosSlice.ts (example)
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "./store";

export const fetchTodos = createAsyncThunk("todos/fetch", async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=5"
  );
  return (await res.json()) as Array<{
    id: number;
    title: string;
    completed: boolean;
  }>;
});

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
    status: "idle" as "idle" | "loading" | "failed",
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = "idle";
        state.items = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? null;
      });
  },
});

export default todosSlice.reducer;
