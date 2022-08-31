import React from "react"
import { useRecoilState,useSetRecoilState } from "recoil"
import { css } from "@emotion/react"
import { filterState,currentCategoryState } from "../../state"
import {
  Card,
  CardContent,
  Typography,
} from "@mui/material"
function CategoryItem({ category: { type, detail, color, level }, category }) {
  const setFilter = useSetRecoilState(filterState)
  const [current, setCurrent] = useRecoilState(currentCategoryState);
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
