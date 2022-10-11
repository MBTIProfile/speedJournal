import { createEntityAdapter, createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit'

export const JournalsAdapter = createEntityAdapter({
})

const initialState = JournalsAdapter.getInitialState({
    status: 'idle',
    journal: {time:"어떤시간", situation:"어떤것",did:"어떤결과"},
    currentIndex: 0,
    error: null,
})
        
const journalsSlice = createSlice({
    name: 'journals',
    initialState,
    reducers: {
        setCurrentJournal(state, action) {
            const [text, index]  = action.payload
            console.log(text, index)
            if(index === 0) {
                state.journal.time = text
            } else if(index === 1) {
                state.journal.situation = text
            }
            else {
                state.journal.did = text
            }
            console.log(state.journal)
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
console.log(journalsSlice)
export const { setCurrentJournal } = journalsSlice.actions
export default journalsSlice.reducer
