import React from "react"
import { Grid } from "@mui/material"
import CategoryItem from "../CategoryItem/CategoryItem"
import { useDispatch, useSelector } from "react-redux";
import { selectAllCategories, fetchCategories, selectFoldCategories } from "./categorySlice";

function CategoryGrid() {
    const dispatch = useDispatch();
    const status = useSelector((state) => state.categories.status)
    const categories = useSelector((state) => selectFoldCategories(state))

    let content = <div>Loading...</div>;
    if (status === 'idle') {
        dispatch(fetchCategories());
    }
    if (status === 'succeeded') {
        content = categories.map((category, index) => {
            return (
                <Grid style={{ width: "33.333333%" }} item md={1} sm={1} key={index}>
                    <CategoryItem category={category} />
                </Grid>
            )
        })
    }

return (
    <>
        <Grid
            container
            spacing={{ sm: 3, md: 3 }}
            columns={{ sm: 5, md: 5 }}
            style={{ padding: "3px" }}

        >
            {content}

        </Grid>
    </>
);
}

export default CategoryGrid;
