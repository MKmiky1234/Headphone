import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    value: 0,
    abc: 'xyz',
    token: '',
    mk:'yellow'
}


export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        changeValue: (state, action) => {
            state.abc = action.payload
        },
        saveToken: (state, action) => {
            state.token = action.payload
        },
        clearToken: (state, action) => {
            state.token = ''
        
        },
        changecolor:(state,action) =>{
            state.mk =action.payload
        }

    },
})

// Action creators are generated for each case reducer function
export const { changeValue,saveToken,clearToken,changecolor } = counterSlice.actions

export default counterSlice.reducer