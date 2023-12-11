import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("user")
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
});

export const getUserAccount = createAsyncThunk("user/account", async () => {
  const request = await axios.post(
    `http://localhost:3001/api/v1/user/profile/`
  );
  return request.data.body
});

export const profilupdate = createAsyncThunk(
  "user/update",
  async (UpdateUser) => {
    const response = await axios.put(
      `http://localhost:3001/api/v1/user/profile/`,
      UpdateUser
    );

    return response.data.body
  }
)

const userAccountSlice = createSlice({
  name: "UserAccount",
  initialState: {
    loading: false,
    userAccount: null,
    error: null,
  },
  reducers: {
    removeUserData: (state) => {
      state.userAccount = null
    },
    updateUserData: (state, action) => {
      state.userAccount = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserAccount.pending, (state) => {
        state.loading = true
      })
      .addCase(getUserAccount.fulfilled, (state, action) => {
        state.loading = false;
        state.userAccount = action.payload
      })

      .addCase(getUserAccount.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
      .addCase(profilupdate.pending, (state) => {
          state.loading = true
      })

      .addCase (profilupdate.fulfilled, (state, action) => {
          state.loading = false
          state.userAccount = action.payload
      })
      .addCase (profilupdate.rejected, (state, action) => {
          state.loading = false
          state.error = action.error.message
          console.error("Error updating profile :", action.error)
      })
  }
})

export const { removeUserData } = userAccountSlice.actions
export default userAccountSlice.reducer
