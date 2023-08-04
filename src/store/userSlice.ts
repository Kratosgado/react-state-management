import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { User } from "../api/authenticate";

type State = {
   user: undefined | User;
   permissions: undefined | string[];
   loading: boolean
};
const initialState: State = {
   user: undefined,
   permissions: undefined,
   loading: false
}

export const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
      authenticeAction: (state) => {
         state.loading = true;
      },
      authenticatedAction: (state, action: PayloadAction<User | undefined>) => {
         state.user = action.payload;
         state.loading = false
      },
      authorizeAction: (state) => {
         state.loading = true
      },
      authorizedAction: (state, action: PayloadAction<string[]>) => {
         state.permissions = action.payload;
         state.loading = false
      },
   }
});

export const { authenticatedAction,
   authenticeAction,
   authorizeAction,
   authorizedAction
} = userSlice.actions;

export default userSlice.reducer;