import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface MenuState {
  menuState: boolean,
}

export const menuSlice = createSlice({
  name: 'menu ',
  initialState: {
    menuState: false,
  },
  reducers: {
    handleMenu: (state: MenuState, action: PayloadAction<boolean>) => {
      console.log(action.payload)
      state.menuState = !state.menuState
    },
  },
})

// Action creators are generated for each case reducer function
export const { handleMenu } = menuSlice.actions
export default menuSlice.reducer 