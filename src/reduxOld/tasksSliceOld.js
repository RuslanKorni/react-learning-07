// import { createSlice } from '@reduxjs/toolkit';
// import {fetchTasks} from './operationsOld';

// const tasksInitialState = {
//   items: [],
//   isLoading: false,
//   error: null,
// };
// const tasksSlice = createSlice({
//   name: "tasks",
//   initialState: tasksInitialState,
//   // Додаємо обробку зовнішніх екшенів
//   //* Властивість reducers нам більше не потрібна, 
//   //* тому всю логіку обробки екшенів запиту переносимо до нових редюсерів.
//   extraReducers: builder => {
//     builder
//       .addCase(fetchTasks.pending, (state, action) => {
//         state.isLoading = true;
//       })
//       .addCase(fetchTasks.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.items = action.payload;
//       })
//       .addCase(fetchTasks.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       });
//   }
// });

// export const tasksReducer = tasksSlice.reducer;


//!Спосіб буз вікористання createAsyncThunk в HTTP-запиті
// const tasksSlice = createSlice({
//   name: 'tasks',
//   initialState: tasksInitialState,
//   reducers: {
//     fetchingInProgress(state) {
//       state.isLoading = true;
//     },
//     fetchingSuccess(state, action) {
      // state.isLoading = false;
      // state.error = null;
      // state.items = action.payload;
//     },
//     fetchingError(state, action) {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//   },
// });

// export const { fetchingInProgress, fetchingSuccess, fetchingError } =
//   tasksSlice.actions;
// export const tasksReducer = tasksSlice.reducer;
