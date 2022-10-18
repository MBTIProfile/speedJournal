import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentCategoriesIndex, fetchCategories } from "../CategoryGrid/categorySlice";
import Journal from "./Journal";
import { css } from "@emotion/react";
function JournalList() {
  const journalList = useSelector((state) => state.journals.journalList);

  const JournalCss = css`
    margin: 15px;
  `;


  return (
    <div css={JournalCss}>
      {journalList.map((journal, index) => {
        return <Journal key={index} index={index} journal={journal} />;
      })}
    </div>
  );
}

export default JournalList;
