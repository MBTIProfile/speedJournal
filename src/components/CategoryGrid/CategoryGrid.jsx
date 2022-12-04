import React from "react"
import { Grid } from "@mui/material"
import { TextField } from "@mui/material"
import CategoryItem from "../CategoryItem/CategoryItem"
import AddItem from "../CategoryItem/AddItem"
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, selectFoldCategories, setAddCategoryInput } from "./categorySlice";

function CategoryGrid() {
    const dispatch = useDispatch();
    const categoryEditFlag = useSelector((state) => state.categories.editFlag);
    const status = useSelector((state) => state.categories.status)
    const categories = useSelector((state) => selectFoldCategories(state))
    const addCategoryInput = useSelector((state) => state.categories.addCategoryInput)

    let content = <div>lodding</div>;
    if (status === 'idle') {
        dispatch(fetchCategories());
    }
    if (status === 'succeeded') {
        content = categories.map((category, index) => {
            return (
                <Grid key={index}>
                    <CategoryItem key={index+1} category={category} />
                </Grid>
            )
        })
        content.push(
            <Grid >
                <AddItem />
            </Grid>
        )
    }
    const handleCategoryChange = (e) => {
        const { value } = e.target;
        dispatch(setAddCategoryInput({ value }));    
    }


return (
    <>
        <Grid
            container
            spacing={{ sm: 3, md: 3 }}
            columns={{ sm: 5, md: 5 }}
            style={{ padding: "3px",margin:"3px" }}
        >
            {content}
        </Grid>
        {
            categoryEditFlag ? (
                <TextField
                    id="outlined-basic"
                    label="카테고리 입력"
                    variant="outlined"
                    value={addCategoryInput}
                    onChange={handleCategoryChange}
                    sx={{ width: "50%", marginBottom: "10px", marginTop: "10px" }}
              />
            ):(
                <></>
            )
    
        }
    </>
);
}

export default CategoryGrid;
