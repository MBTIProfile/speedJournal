import React from "react";
import Journal from "../../components/Journal/Journal"
import FilterCategoryGrid from "../../components/CategoryGrid/FilterCategoryGrid"
import { journalTagLIndexState } from "../../state";
import { useRecoilValue } from "recoil";

import time from "../../data/time.json"
import did from "../../data/category/did.json"
import food from "../../data/category/food.json"
import situation from "../../data/situation.json"
import emotion from "../../data/category/emotion.json"
import work from "../../data/category/work.json"

function Main() {
  const timeLine = [
    time,
    situation,
    did,
  ]
  const didList = [
    did,
    emotion,
    food,
    work
  ]
  const journalIndex = useRecoilValue(journalTagLIndexState)
  const getJson = (journalIndex) => {
    if(journalIndex > timeLine.length - 1) {
      return didList[journalIndex - timeLine.length]
    } else {
      return timeLine[journalIndex]
    }
  }
  return (
    <>
      <Journal></Journal>
      {/* <CategoryGrid /> */}
      <FilterCategoryGrid json={getJson(journalIndex)} />
      <button onClick={() => console.log(journalIndex)}>click</button>
    </>
  );
}

export default Main;
