import React from "react"
import { css } from "@emotion/react"
import {
    Card,
    CardContent,
    Typography,
    Button,
    TextField,
} from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { setEditFlag, selectFoldCategories, addCategoryItem } from "../CategoryGrid/categorySlice"
import { setCurrentJournal } from "../Journal/journalSlice"


function AddItem() {
    const editFlag = useSelector((state) => state.categories.editFlag)
    const addCategoryInput = useSelector((state) => state.categories.addCategoryInput)
    const dispatch = useDispatch()
    const category = useSelector((state) => state.categories)
    const currentIndex = useSelector((state) => state.categories.currentIndex)
    const selectAllCategories = useSelector((state) => selectFoldCategories(state))

    const handleCardClick = () => {
        let flag = !editFlag
        if (!flag) {
            // mobile confirm message
            console.log(addCategoryInput)
            let lastCategory = selectAllCategories[selectAllCategories.length - 1]
            let newCategory = {
                "_id": lastCategory._id + 1,
                "category": lastCategory.category,
                "type": parseInt(lastCategory.type) + 1,
                "level": lastCategory.level,
                "detail": addCategoryInput,
                "index": lastCategory.index,
                "id": lastCategory.id + 1,
                "color": lastCategory.color,
                "isFold": true
            }
            dispatch(addCategoryItem(newCategory))
        }
        dispatch(setEditFlag(flag))

    }
    let checkFlag = false
    const checkCardCss = css`
    border: 3px solid black;
  `
    const cardCss = css`
    margin: 3px;
    background-color: royalblue;
    ${checkFlag ? checkCardCss : "border: 2px solid black;"}
  `

    return (
        <Button css={cardCss} onClick={handleCardClick} variant="contained">
            <Typography sx={{ textAlign: "center", whiteSpace: "nowrap", }} variant="body1" component="p">
                {editFlag ? "저장" : "카테고리 추가"}
            </Typography>
        </Button>
    );
}

export default AddItem;
