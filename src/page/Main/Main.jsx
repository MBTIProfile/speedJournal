import React from "react";

import CategoryGrid from "../../components/CategoryGrid/CategoryGrid";
import JournalList from "../../components/Journal/JournalList";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import { updateJournalList } from "../../components/Journal/journalSlice";
function Main() {
  const date = useSelector((store) => store.date);
  const journalList = useSelector((store) => store.journals.journalList);
  const journal = useSelector((store) => store.journals.journal);
  const onSubmitHandler = async (e) => {
    const journalData = {
      date: date,
      journalList: journalList,
      uid: JSON.parse(sessionStorage.getItem("auth")).uid,
    }
    await (await fetch('http://dombtido.iptime.org:7091/saveJournal/', {
      method: "POST",
      body: JSON.stringify({ data: journalData }),
      headers: {
        'Content-Type': 'application/json'
      }
    })).json()

  }

  return (
    <>
      <JournalList />
      <CategoryGrid />
      {/* button center */}
      <Box sx={{ width: "100%", textAlign: "center" }}>
        {sessionStorage.getItem("auth") ?
          <Button onClick={onSubmitHandler} sx={{ width: "33.33333%" }} align="center" variant="contained" color="primary">
            Submit
          </Button>
          :
          <Button disabled sx={{ width: "33.33333%" }} align="center" variant="contained" color="primary">
            Sign in to submit
          </Button>}

      </Box>

    </>
  );
}

export default Main;
