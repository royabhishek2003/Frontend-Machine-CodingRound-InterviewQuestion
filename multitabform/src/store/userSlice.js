import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  age: "",
  interest: ""
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.age = action.payload.age;
      state.interest= action.payload.interest
    },
  }
});

export const { setUser, setName, setAge } = userSlice.actions;

export default userSlice.reducer;