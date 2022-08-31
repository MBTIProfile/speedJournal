import React from "react";
import Journal from "../../components/Journal/Journal"
import CategoryGrid from "../../components/CategoryGrid/CategoryGrid"
import FilterCategoryGrid from "../../components/CategoryGrid/FilterCategoryGrid"
import did from "../../data/category/did.json"
import food from "../../data/category/food.json"
function Main() {
  return (
    <>
      <Journal></Journal>
      <CategoryGrid />
      <FilterCategoryGrid json={food} />
      <FilterCategoryGrid json={did} />
    </>
  );
}

export default Main;
