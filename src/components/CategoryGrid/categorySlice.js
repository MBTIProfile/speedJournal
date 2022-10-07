import { createEntityAdapter, createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit'
const setCategory = (categories) => {
  const colorArr = [
    "FF0000",
    "6464CD",
    "9c27b0",
    "13C7A3",
    "D2691E",
    "FFB400",
    "FF1493",
    "3DFF92",
    "2196f3",
    "3f51b5",
    "4caf50",
    "03a9f4",
    "faeb3b",
    "fbc107",
    "fc5722",
    "795548",
    "607d8b"
  ]

  const color = {}
  let cnt = 0
  categories.forEach((el) => {
    if (!color.hasOwnProperty(el.type)) {
      color[el.type] = colorArr[cnt++]
    }
  })
  if (categories[0].hasOwnProperty("color") === false) {
    for (var i in categories) {
      const el = categories[i]
      let [r, g, b] = [color[el.type].substr(0, 2), color[el.type].substr(2, 2), color[el.type].substr(4, 2)]
      r = (parseInt(r, 16) + (10 * el.index)) > 255 ? "FF" : ("00" + (parseInt(r, 16) + (10 * el.index)).toString(16)).slice(-2)
      g = (parseInt(g, 16) + (10 * el.index)) > 255 ? "FF" : ("00" + (parseInt(g, 16) + (10 * el.index)).toString(16)).slice(-2)
      b = (parseInt(b, 16) + (10 * el.index)) > 255 ? "FF" : ("00" + (parseInt(b, 16) + (10 * el.index)).toString(16)).slice(-2)
      categories[i].color = "#" + r + g + b
      categories[i].isFold = el.level === "1"
    }
  }
  categories.filter((el) => el.level === 1)
  return categories

}


const categoriesAdapter = createEntityAdapter({
})

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async (_, { getState }) => {
    console.log("fetchCategories")
    const response = await fetch(
      `/data/category/emotion.json`
    ).then((data) => data.json())
    console.log(response)
    response.map(e => e.ids = e.detail)
    response.map(e => e.id = e.detail)
    return setCategory(response)
  }
)
const initialState = categoriesAdapter.getInitialState({
  status: 'idle',
  currentCategory: null,
  error: null,
})
const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    foldCategory(state, action) {
      Object.values(state.entities).forEach((el) => {
        if(el.level !== "1" && el.type === action.payload.type){
          el.isFold = !el.isFold
        }
      })
    },
    setCurrentCategory(state, action) {
      state.currentCategory = action.payload
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCategories.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = 'succeeded'
        // Add any fetched categorys to the array
        categoriesAdapter.upsertMany(state, action.payload)
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})
export const { foldCategory, setCurrentCategory } = categoriesSlice.actions

// export const { 
//   selectAll: selectAllCategories, selectById:selectCategoryById 
// } = categoriesAdapter.getSelectors(state => state.categories)
export default categoriesSlice.reducer
// export const selectCategoriesByUser = createSelector(
//   [selectAllCategories, (state, userId) => userId],
//   (categories, userId) => categories.filter((category) => category.user === userId)
// )
export const {
  selectAll: selectAllCategories,
  selectById: selectCategoryById,
  selectIds: selectCategoryIds,
} = categoriesAdapter.getSelectors((state) => state.categories)

export const selectFoldCategories = createSelector(
  [selectAllCategories, (state) => state],
  (categories, type) => categories.filter((category) => category.isFold)
)