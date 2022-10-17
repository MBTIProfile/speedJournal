import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentCategoriesIndex, fetchCategories } from "../CategoryGrid/categorySlice";
import { addJournal, setCurrentJournalIndex, updateJournalList } from "./journalSlice";
import { css } from "@emotion/react";
import { Box, Button } from "@mui/material"

function Journal(props) {
  const journal = useSelector((state) => state.journals.journal);
  const journalList = useSelector((state) => state.journals.journalList);
  const dispatch = useDispatch();
  const currentCategory = useSelector(state => state.categories.currentCategory)
  const currentCategoriesIndex = useSelector(state => state.categories.currentIndex)
  const currentJournalIndex = useSelector(state => state.journals.currentIndex)


  console.log(props, currentJournalIndex)


  const onClickHandle = (e) => {
    console.log(e.target.id)
    console.log(currentCategory)
    if (e.target.id === "time") {
      dispatch(setCurrentCategoriesIndex(0))
    } else if (e.target.id === "situation") {
      dispatch(setCurrentCategoriesIndex(1))
    } else if (e.target.id === "did") {
      if (journal.situation === "한 일은") {
        dispatch(setCurrentCategoriesIndex(2))
      } else if (journal.situation === "느낀 감정은") {
        dispatch(setCurrentCategoriesIndex(3))
      } else if (journal.situation === "먹은 음식은") {
        dispatch(setCurrentCategoriesIndex(4))
      } else if (journal.situation === "일 한 내용은") {
        dispatch(setCurrentCategoriesIndex(5))
      }
    }
    dispatch(fetchCategories());
  }
  const addJournalHandle = () => {
    //현재 입력중인 리스트를 저널리스트에 저장
    //새로운 저널리스트를 생성
    dispatch(addJournal(journal))
    dispatch(setCurrentCategoriesIndex(0))
    dispatch(fetchCategories());
  }
  const updateJournalHandle = (e) => {
    //클릭 시 현재 저널을 add하고, 저널을 해당 위치의 저널로 바꾼다.
    dispatch(updateJournalList(journal))
    dispatch(setCurrentJournalIndex(props.index))
    dispatch(setCurrentCategoriesIndex(0))
    dispatch(fetchCategories());
  }


  const requiredSpan = css`
    color: red;

  `
  const currentJournalCss = css`
    border: 1px solid gray;
    padding: 1px;
    display: flex;
  `



  return (
    <>
      {props.index === currentJournalIndex ?
        <div css={currentJournalCss}>
          <Box sx={{flexGrow:1}}>
          어제<b>
          <span css={currentCategoriesIndex === 0 ? requiredSpan : ""} id="time" onClick={onClickHandle}>
            [{journal.time != "" ? journal.time + "에" : ""}]
          </span>

          <span css={currentCategoriesIndex === 1 ? requiredSpan : ""} id="situation" onClick={onClickHandle}>
            [{journal.situation ? journal.situation + "" : "    "}]
          </span>

          <span css={currentCategoriesIndex >= 2 ? requiredSpan : ""} id="did" onClick={onClickHandle}>
            [{journal.did ? journal.did + "이다." : "    "}]
          </span>&nbsp;</b>
          </Box>
          <Button size="small" variant="contained" style={{backgroundColor: "gray"}} onClick={addJournalHandle}>√</Button></div> :

        <div onClick={updateJournalHandle}>어제 <span id="time" >{journalList[props.index].time != "" ? journalList[props.index].time + "에" : ""}</span>&nbsp;
          <span id="situation" >{journalList[props.index].situation ? journalList[props.index].situation + "" : "    "}</span>&nbsp;
          <span id="did" >{journalList[props.index].did ? journalList[props.index].did + "이다." : "    "}</span>&nbsp;
        </div>
      }
    </>
  );
}

export default Journal;
