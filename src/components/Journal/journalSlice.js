import { createEntityAdapter, createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit'

export const JournalsAdapter = createEntityAdapter({
})

const initialState = JournalsAdapter.getInitialState({
    status: 'idle',
    journal: {time:"어떤시간", situation:"어떤것",did:"어떤결과"},
    currentIndex: 0,    //저널리스트의 현재 인덱스(리스트의 인덱스)
    journalList: [{time:"어떤시간", situation:"어떤것",did:"어떤결과"}, ],
    error: null,
})
        
const journalsSlice = createSlice({
    name: 'journals',
    initialState,
    reducers: {
        updateJournalList: (state, action) => {
            state.journalList[state.currentIndex] = action.payload  
        },
        addJournal(state, action) { 
            if(action.payload){
                state.journalList[state.currentIndex] = action.payload
            }
            state.journal = {time:"어떤시간", situation:"어떤것",did:"어떤결과"}
            state.journalList.push({time:"어떤시간", situation:"어떤것",did:"어떤결과"})

            state.currentIndex = state.journalList.length - 1
            // state.journalList.push({time:"어떤시간", situation:"어떤것",did:"어떤결과"})
        },
        setCurrentJournalIndex(state, action) {
            state.currentIndex = action.payload
            state.journal = state.journalList[state.currentIndex]
        },
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
export const { setCurrentJournal, addJournal, setCurrentJournalIndex, updateJournalList } = journalsSlice.actions
export default journalsSlice.reducer
