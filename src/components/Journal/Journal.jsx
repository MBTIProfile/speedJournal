import React from "react";
import {currentCategoryState, journalTagListState} from "../../state";
import {useRecoilValue} from "recoil"
function Journal( ) {
  const JournalTagList = useRecoilValue(journalTagListState)
  return (
    <>
        <div>오늘 [{JournalTagList[0]}] [{JournalTagList[1]}] [{JournalTagList[2]}] 이다.</div>
    </>
  );
}

export default Journal;
