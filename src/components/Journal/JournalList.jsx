import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentCategoriesIndex, fetchCategories } from "../CategoryGrid/categorySlice";
import Journal from "./Journal";
function JournalList() {
  const journalList = useSelector((state) => state.journals.journalList);

  return (
    <>
      {journalList.map((journal, index) => {
        return <Journal index={index} journal={journal} />;
      })}
    </>
  );
}

export default JournalList;
