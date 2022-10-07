import React from "react";

import time from "../../data/time.json"
import did from "../../data/category/did.json"
import food from "../../data/category/food.json"
import situation from "../../data/situation.json"
import emotion from "../../data/category/emotion.json"
import work from "../../data/category/work.json"


import CategoryGrid from "../../components/CategoryGrid/CategoryGrid";

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
  // const journalIndex = useRecoilValue(journalTagLIndexState)
  // const getJson = (journalIndex) => {
  //   if(journalIndex > timeLine.length - 1) {
  //     return didList[journalIndex - timeLine.length]
  //   } else {
  //     return timeLine[journalIndex]
  //   }
  // }
  return (
    <>
      <CategoryGrid />
    </>
  );
}

export default Main;
