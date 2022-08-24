import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material"
import UserItem from "../UserItem/UserItem"
import userList from "../../data/emotion.json"
import { filterEmotionListState } from "../../state"
import {useRecoilValue} from "recoil"
function UserGrid() {
    let users = useRecoilValue(filterEmotionListState)
    console.log(users)

    return (
        <>
            <Grid
                container
                spacing={{ sm: 3, md: 3 }}
                columns={{ sm: 5, md: 5 }}
                style={{ padding: "3px" }}

            >
                {
                    users.map((user, index) => (
                        <Grid style={{ width: "33.333333%" }} item md={1} sm={1} key={index}>
                            <UserItem user={user} />
                        </Grid>
                    ))
                }

            </Grid>
        </>
    );
}

export default UserGrid;
