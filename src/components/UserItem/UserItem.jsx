import React from "react";
import { 
  Card,
  CardContent,
  Avatar,
  Typography,
} from "@mui/material"
function UserItem( { user: {type, level, detail, color}}) {
  return (
    <Card style={{backgroundColor:color, margin:"2px"}} >
      <CardContent>
        <Typography sx={{textAlign:"center"}}>{detail}</Typography>
      </CardContent>
    </Card>
  );
}

export default UserItem;
