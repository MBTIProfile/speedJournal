import React from "react";
import {currentCategoryState} from "../../state";
import {useRecoilValue} from "recoil"
function Journal( ) {
  const current = useRecoilValue(currentCategoryState)
  return (
    <>
        <div>오늘 아침 느낀 기분은 [{current.detail}] 이다.</div>
    </>
  );
}

export default Journal;
