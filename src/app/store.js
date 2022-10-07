import { configureStore } from '@reduxjs/toolkit'
import categoriesReducer from '../components/CategoryGrid/categorySlice'
export default configureStore({
  reducer: {
    categories: categoriesReducer,
  },
})
