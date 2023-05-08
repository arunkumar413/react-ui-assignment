import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    email: "",
    userName: '',
    mobile: "",
    roleKey: '',
    password: ""
  },
  reducers: {
    setName: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.name = action.payload
    },
    setEmail: (state, action) => {
      state.email = action.payload
    },

    setUserName: (state, action) => {

      state.userName = action.payload

    },
    setMobile: (state, action) => {
      state.mobile = action.payload
    },
    setRoleKey: (state, action) => {
      state.roleKey = action.payload
    },
    setPassword: (state, action) => {
      state.password = action.payload
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { setName, setEmail, incrementByAmount } = userSlice.actions

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount))
  }, 1000)
}

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`

export default userSlice.reducer


