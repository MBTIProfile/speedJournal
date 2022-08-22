import React, { useState } from "react";
import { useRecoilState } from "recoil"
import { filterState } from "../../state"
import {
  Card,
  CardContent,
  Avatar,
  Typography,
} from "@mui/material"
function UserItem({ user: { type, level, detail, index, color } }) {
  const [filter,setFilter] = useRecoilState(filterState);

  const handleCardClick = () => {
    if (index === '1') {
      console.log(filter)
      const flag = !filter[type]
      setFilter({
        ...filter,
        [type]:flag
      })
    }
  }
  return (
    <Card style={{ backgroundColor: color, margin: "2px" }} onClick={handleCardClick}>
      <CardContent sx={{ margin: "auto" }}>
        <Typography sx={{ textAlign: "center" }}>{detail}</Typography>
      </CardContent>
    </Card>
  );
}

export default UserItem;
