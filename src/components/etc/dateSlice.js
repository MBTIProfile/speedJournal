import { createEntityAdapter, createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit'

export const JournalsAdapter = createEntityAdapter({
})

const getToday = () => {
    const today = new Date()
    const year = today.getFullYear()
    const month = today.getMonth() < 10 ? `0${today.getMonth()+1}` : today.getMonth()+1
    const date = today.getDate() < 10 ? "0" + today.getDate() : today.getDate()

    return year + "-" + month + "-" + date
}

const initialState = getToday()

const dateSlice = createSlice({
    name: 'date',
    initialState,
    reducers: {
        setDateState(state, action) {
            console.log(action.payload)
            const date = action.payload
            state = date
            return state
        },
        setToday(state, action) {
            state = getToday()
            return state
        }

    },
    extraReducers(builder) {
        // builder
        //     .addCase(fetchJournals.pending, (state, action) => {
        //         state.status = 'loading'
        //     })
        //     .addCase(fetchJournals.fulfilled, (state, action) => {
        //         state.status = 'succeeded'
        //         // Add any fetched journals to the array
        //         JournalsAdapter.upsertMany(state, action.payload)
        //     })
        //     .addCase(fetchJournals.rejected, (state, action) => {
        //         state.status = 'failed'
        //         state.error = action.error.message
        //     })
    }
})
export const { setDateState,setToday } = dateSlice.actions
export default dateSlice.reducer
