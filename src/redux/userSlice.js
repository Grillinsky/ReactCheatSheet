import { createSlice } from "@reduxjs/toolkit";
const usersSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    agregarUsuario(state, action) {
      state.push(action.payload);
      //   return [...state, action.payload];
    },
    incrementarContador(state, action) {
      state++;
    },
  },
});

/* 
{
//opcioonal  name: "users",
    actions:{
        agregarUsuario -----> {type: agregarUsuario}
    },
    reducer
}
 */
const { actions, reducer } = usersSlice;
export const { agregarUsuario } = actions;
export default reducer;
