import React from "react"
import { Grid } from "@mui/material"
import { filterMultiCategoryListState } from "../../multiState"
import CategoryItem from "../CategoryItem/CategoryItem"
import {useRecoilState } from "recoil"
function CategoryGrid({json}) {
    const [categoryList] = useRecoilState(filterMultiCategoryListState([0,json]))
    console.log(json)

    return (
        <>
            <Grid
                container
                spacing={{ sm: 3, md: 3 }}
                columns={{ sm: 5, md: 5 }}
                style={{ padding: "3px" }}

            >
                {
                    categoryList.map((category, index) => (
                        <Grid style={{ width: "33.333333%" }} item md={1} sm={1} key={index}>
                            <CategoryItem category={category} />
                        </Grid>
                    ))
                }

            </Grid>
        </>
    );
}

export default CategoryGrid;
