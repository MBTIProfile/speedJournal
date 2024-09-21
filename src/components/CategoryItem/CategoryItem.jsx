import React from "react"
import { css } from "@emotion/react"
import {
  Button,
  Typography,
} from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { foldCategory, setCurrentCategory, setCurrentCategoriesIndex, fetchCategories } from "../CategoryGrid/categorySlice"
import { setCurrentJournal } from "../Journal/journalSlice"


function CategoryItem({ category }) {
  const dispatch = useDispatch()
  const currentCategory = useSelector((state) => state.categories.currentCategory)
  const currentIndex = useSelector((state) => state.categories.currentIndex)

  const handleCardClick = () => {
    console.log(category)

    console.log("send click_categories")
    window.gtag('event', 'click_categories', {
    });

    dispatch(foldCategory({ type: category.type, isFold: category.isFold }))
    dispatch(setCurrentCategory(category))
    dispatch(setCurrentJournal([category.detail, currentIndex]))
    console.log(currentIndex)
    if (currentIndex === 0) {
      dispatch(setCurrentCategoriesIndex(currentIndex + 1))
      dispatch(fetchCategories())
    } else if (currentIndex === 1) {
      const index = category.detail === "한 일은" ? 2 : category.detail === "느낀 감정은" ? 3 : category.detail === "먹은 음식은" ? 4 : category.detail === "일 한 내용은" ? 5 : 0
      dispatch(setCurrentCategoriesIndex(index))
      dispatch(fetchCategories())
    }
  }

  let checkFlag = false
  let CardText = category.detail
  if (currentCategory && currentCategory.type === category.type) {
    checkFlag = true
    if (currentCategory.level === '2') {
      CardText = currentCategory.detail
    }
  }
  const color = category.color
  const checkCardCss = css`
    border: 3px solid black;
  `
  const cardCss = css`
    margin: 3px;
    ${checkFlag ? checkCardCss : "border: 1px solid black;"}
  `

  return (
    <Button css={cardCss} onClick={handleCardClick}>
      <Typography sx={{ textAlign: "center", whiteSpace: "nowrap", }} variant="body1" component="p">
        {CardText}
      </Typography>
    </Button>
  );
}

export default CategoryItem;
