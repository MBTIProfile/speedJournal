import React from "react"
import { css } from "@emotion/react"
import {
  Card,
  CardContent,
  Typography,
} from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { foldCategory, setCurrentCategory } from "../CategoryGrid/categorySlice"
function CategoryItem({ category }) {
  const dispatch = useDispatch()
  const currentCategory = useSelector((state) => state.categories.currentCategory)



  const setJournalTagLIndex = ((prev) => {
    console.log(category.detail)
    if (category.detail === '한 일은') {
      return prev + 2
    } else if (category.detail === '느낀 감정은') {
      return prev + 3
    } else if (category.detail === '먹은 음식은') {
      return prev + 4
    } else if (category.detail === '일 한 내용은') {
      return prev + 5
    }
    return prev + 1
  })

  const handleCardClick = () => {
    console.log(category)
    dispatch(foldCategory({ type: category.type, isFold: category.isFold }))
    dispatch(setCurrentCategory(category))
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
    background-color: ${color};
    margin: 5px;
    ${checkFlag ? checkCardCss : ""}
  `

  return (
    <Card css={cardCss} onClick={handleCardClick}>
      <CardContent css={css`height:20px`}>
        <Typography sx={{ textAlign: "center" }} variant="body1" component="p">
          {CardText}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CategoryItem;
