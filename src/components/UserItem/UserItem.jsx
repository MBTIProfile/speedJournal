import React, { useState } from "react";
import { 
  Card,
  CardContent,
  Avatar,
  Typography,
} from "@mui/material"
function UserItem( { user: {type, level, detail, index ,color},handleUserClick} ) {
  const [cardState, setCardSate] = useState(true)
  const handleCardClick = () => {
    console.log(index)
    if(index==="1"){
      handleUserClick(type,cardState,index)
      setCardSate(!cardState)  
    }
  }
  return (
    <Card style={{backgroundColor:color, margin:"2px"}} onClick={handleCardClick}>
      <CardContent sx={{margin:"auto"}}>
        <Typography sx={{textAlign:"center"}}>{detail}</Typography>
      </CardContent>
    </Card>
  );
}

export default UserItem;
