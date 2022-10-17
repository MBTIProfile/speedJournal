import React from "react";

import CategoryGrid from "../../components/CategoryGrid/CategoryGrid";
import JournalList from "../../components/Journal/JournalList";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
function Main() {
  return (
    <>
      <JournalList />
      <CategoryGrid />
      {/* button center */}
      <Box sx={{width:"100%", textAlign:"center"}}>
        <Button sx={{ width: "33.33333%" }} align="center" variant="contained" color="primary">
          Submit
        </Button>
      </Box>

    </>
  );
}

export default Main;
