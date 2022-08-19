import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material"
import UserItem from "../UserItem/UserItem"
import userList from "../../data/emotion.json"
function UserGrid() {
    let users = userList
    const [currentUsers, setCurrentUsers] = useState([])
    useEffect(() => {
        if (!users) return
        users = setEmotionColor(users)
        const filter = filterUsers(users)
        setCurrentUsers(filter)
    }, [])
    const color = {
        anger: "C90000",
        sad: "5853ea",
        anxious: "f29661",
        hurt: "7c7a7a",
        embarrassed: "934689",
        happy: "ffd602",
        love: "ef96ab",
        wish: "bfd84e",
    }
    /*
    * 1레벨만 필터링함
    */
    const filterUsers = (users) => {
        const filterUsers = []
        for (const el of users) {
            if (el.level == "1") {
                filterUsers.push(el)
            }
        }
        return filterUsers
    }
    /**
     * 16진수 코드표를 받아서 조금 연하게 변경함
     */
    const setEmotionColor = (users) => {
        for (var i in users) {
            const el = users[i]
            let [r, g, b] = [color[el.type].substr(0, 2), color[el.type].substr(2, 2), color[el.type].substr(4, 2)]
            r = (parseInt(r, 16) + (10 * el.index)) > 255 ? "FF" : ("00" + (parseInt(r, 16) + (10 * el.index)).toString(16)).slice(-2)
            g = (parseInt(g, 16) + (10 * el.index)) > 255 ? "FF" : ("00" + (parseInt(g, 16) + (10 * el.index)).toString(16)).slice(-2)
            b = (parseInt(b, 16) + (10 * el.index)) > 255 ? "FF" : ("00" + (parseInt(b, 16) + (10 * el.index)).toString(16)).slice(-2)
            users[i].color = "#" + r + g + b
        }
        return users

    }
    const handleUserClick = (type, state) => {
        const viewUser = []
        for (const i in users) {
            if (users[i].type === type) {
                viewUser.push(users[i])
            }
        }
        if (state) {
            for (const i in currentUsers) {
                if (currentUsers[i].type === type) {
                    currentUsers.splice(i, 1, ...viewUser)
                    break;
                }
            }
        } else {
            for (const i in currentUsers) {
                if (currentUsers[i].type === type) {
                    currentUsers.splice(parseInt(i) + 1, 9)
                    break;
                }
            }
        }
        setCurrentUsers([...currentUsers])
    }
    return (
        <>
            <Grid
                container
                spacing={{ sm: 3, md: 3 }}
                columns={{ sm: 5, md: 5 }}
                style={{ padding: "3px" }}

            >
                {
                    currentUsers.map((user, index) => (
                        <Grid style={{ width: "33.333333%" }} item md={1} sm={1} key={index}>
                            <UserItem user={user} handleUserClick={handleUserClick} />
                        </Grid>
                    ))
                }

            </Grid>
        </>
    );
}

export default UserGrid;
