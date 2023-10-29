import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzasStatus', async (params, thunkAPI) => {
  const { sortBy, order, category, search, currentPage } = params;
  const { data } = await axios.get(
    `https://64e34fb6bac46e480e7893bd.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
  );

// if (data.length === 0) {
//   return thunkAPI.rejectWithValue('Пиццы пусты')
// }
//   return thunkAPI.fulfillWithValue(data);
return data
});

const initialState = {
  items: [],
  status: 'loading' 
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
      builder
         .addCase(fetchPizzas.pending, (state) => {
            state.status = "loading"
            state.items = []
         })
         .addCase(fetchPizzas.fulfilled, (state, action) => {
           state.status = "success"
            state.items = action.payload
         })
         .addCase(fetchPizzas.rejected, (state) => {
            state.status = "error"
            state.items = []
         })
   }
});

export const selectPizzaData = (state) => state.pizza

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
