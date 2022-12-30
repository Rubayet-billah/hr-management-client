import axios from 'axios';
const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

export const fetchEmployees = createAsyncThunk('employees/fetchEmployees', async () => {
  const res = await axios.get('https://hr-management-server.vercel.app/employees');
  return res.data;
});

const employeesSlice = createSlice({
  name: 'employees',
  initialState: {
    isLoading: false,
    employees: [],
    error: null,
  },

  extraReducers: (builder) => {
    builder.addCase(fetchEmployees.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchEmployees.fulfilled, (state, action) => {
      state.isLoading = false;
      state.employees = action.payload;
      state.error = null;
    });
    builder.addCase(fetchEmployees.rejected, (state, action) => {
      state.isLoading = false;
      state.post = ['b'];
      state.error = action.error.message;
    });
  },
});

export default employeesSlice.reducer;
