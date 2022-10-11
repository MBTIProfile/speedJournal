import { configureStore } from '@reduxjs/toolkit'
import categoriesReducer from '../components/CategoryGrid/categorySlice'
import journalsReducer from '../components/Journal/journalSlice'
export default configureStore({
  reducer: {
    categories: categoriesReducer,
    journals: journalsReducer,
  },
})
