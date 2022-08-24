import { Grid } from "@mui/material"
import CategoryItem from "../CategoryItem/CategoryItem"
import { filterCategoryListState } from "../../state"
import {useRecoilValue} from "recoil"
function CategoryGrid() {
    let categories = useRecoilValue(filterCategoryListState)

    return (
        <>
            <Grid
                container
                spacing={{ sm: 3, md: 3 }}
                columns={{ sm: 5, md: 5 }}
                style={{ padding: "3px" }}

            >
                {
                    categories.map((category, index) => (
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
