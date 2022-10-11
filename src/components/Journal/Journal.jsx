import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentIndex, fetchCategories } from "../CategoryGrid/categorySlice";
function Journal() {
  const journal = useSelector((state) => state.journals.journal);
  const dispatch = useDispatch();
  const currentCategory = useSelector(state => state.categories.currentCategory)


  const onClickHandle = (e) => {
    console.log(e.target)
    console.log(currentCategory)
    if (e.target.id === "time") {
      dispatch(setCurrentIndex(0))
    } else if(e.target.id === "situation") {
      dispatch(setCurrentIndex(1))
    } else if(e.target.id === "did") {
      if(journal.situation === "한 일은") {
        dispatch(setCurrentIndex(2))
      } else if(journal.situation === "느낀 감정은") {
        dispatch(setCurrentIndex(3))
      } else if(journal.situation === "먹은 음식은") {
        dispatch(setCurrentIndex(4))
      } else if(journal.situation === "일 한 내용은") {
        dispatch(setCurrentIndex(5))
      }
    }
    dispatch(fetchCategories());

  }

  return (
    <>
      <div>어제 <span id="time" onClick={onClickHandle}>[{journal.time!="" ? journal.time + "에" : ""}]</span> <span id="situation" onClick={onClickHandle}>[{journal.situation ? journal.situation + "" : "    "}]</span> <span id="did" onClick={onClickHandle}>[{journal.did ? journal.did + "이다." : "    "}]</span></div>
      <button onClick={onClickHandle}>test</button>
    </>
  );
}

export default Journal;
