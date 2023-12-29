import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export interface ICafe {
    name: string,
    image: string,
    phone: string,
    city: string,
    address: string,
    mail: string,
    password: string,
    role: string,
    menu: [],
    orders: []
}

export interface ICafeState {
    cafe: ICafe[]
}

const initialState: ICafeState = {
    cafe: [],
}

export const fetchCafes = createAsyncThunk(
    'fetch/cafes',
    async (_, thunkAPI) => {
        try {
            const data = await fetch('http://localhost:3100/cafe/')
            return data.json()
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

const cafeSlice = createSlice({
    name: 'cafe',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCafes.fulfilled, (state, action) => {
                state.cafe = action.payload
            })
    },
})

export default cafeSlice.reducer;