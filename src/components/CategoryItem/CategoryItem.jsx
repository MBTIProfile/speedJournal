import React from "react"
import { useRecoilState,useSetRecoilState } from "recoil"
import { css } from "@emotion/react"
import { filterState,currentCategoryState,journalTagListState,journalTagLIndexState } from "../../state"
import {
  Card,
  CardContent,
  Typography,
} from "@mui/material"
function CategoryItem({ category: { type, detail, color, level }, category }) {
  const setFilter = useSetRecoilState(filterState)
  const [current, setCurrent] = useRecoilState(currentCategoryState);
  const setJournalTagList = useSetRecoilState(journalTagListState)
  const setJournalTagLIndex = useSetRecoilState(journalTagLIndexState)
  const checkFlag = (current.type === category.type) ? true : false;
  const cardText = () => {
    if (detail === current.detail) {
      return (
        <Typography sx={{ textAlign: "center" }} variant="body1" component="p">
          {detail}
        </Typography>
      );
    } else if(type === current.type && level === '1') {
      return (
        <Typography sx={{ textAlign: "center" }} variant="body1" component="p">
          {current.detail}
        </Typography>
      );
    } else {
      return (
        <Typography sx={{ textAlign: "center" }} variant="body1" component="p">
          {detail}
        </Typography>
      );
    }
  }
  const handleCardDblClick = () => {
    setCurrent(category)
    console.log(category)
    setJournalTagList((prev) => {
      const newJournalTagList = [...prev]
      newJournalTagList.push(category.detail) 
      return newJournalTagList
    })
    setJournalTagLIndex((prev) => {
      console.log(category.detail)
      if(category.detail === '한 일은') {
        return prev+2
      } else if(category.detail === '느낀 감정은') {
        return prev+3
      } else if(category.detail === '먹은 음식은') {
        return prev+4
      } else if(category.detail === '일 한 내용은') {
        return prev+5
      }
      return prev + 1
    })
  }
  const handleCardShow = () => {
    type === current.type ? setFilter("") : setFilter(type)
    handleCardDblClick()
  }
  const checkCardCss = css `
    border: 3px solid black;
  `
  const cardCss = css`
    background-color: ${color};
    margin: 5px;
    ${checkFlag ? checkCardCss : ""}
  `
  
  
  return (
    <Card css={cardCss} onClick={handleCardShow} onDoubleClick={handleCardDblClick}>
      <CardContent css={css`height:20px`}>
        {cardText()}
      </CardContent>
    </Card>
  );
}

export default CategoryItem;
