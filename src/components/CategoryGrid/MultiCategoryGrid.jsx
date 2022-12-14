import React from "react"
import { Grid } from "@mui/material"
import { multiCategoryList } from "../../multiState"
import {useRecoilState } from "recoil"
function CategoryGrid({json}) {
    const [categoryList] = useRecoilState(multiCategoryList([0,json]))
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
                        </Grid>
                    ))
                }

            </Grid>
        </>
    );
}

export default CategoryGrid;
