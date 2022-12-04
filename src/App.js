import logo from './logo.svg';
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"
import GitHubIcon from "@mui/icons-material/GitHub"
import { Navigate, Route, Routes } from "react-router-dom"
import { css } from '@emotion/react'
import './App.css';
import Main from "./page/Main/Main"
import User from "./page/User/User"
import Button from '@mui/material/Button';
import { initializeFirebase, onGoogleClick, signOutGoogle } from "./app/googleAuth"
import { useEffect, useState } from "react"
import { TextField, Box } from '@mui/material';
import { useSelector, useDispatch } from "react-redux"
import { setDateState, setToday } from "./components/etc/dateSlice"
import { fetchJournals } from './components/Journal/journalSlice';

function App() {
  const [user, setUser] = useState(false)
  const date = useSelector(state => state.date)
  const dispatch = useDispatch()


  useEffect(() => {
    initializeFirebase(setUser)
    if (sessionStorage.getItem("auth")) {
      setUser(true)
    }
  }, [])

  useEffect(() => {
    if (user) {
      dispatch(fetchJournals())
    }
  }, [dispatch,user])

  const setDate = (value) => {
    console.log(value)
    dispatch(setDateState(value))
    dispatch(fetchJournals());
  }
  
  const onButtonClickHandler = async () => {
    if (user) {
      await signOutGoogle(setUser)
    } else {
      await onGoogleClick(setUser)
    }
  }


  return (
    <div className="App">
      <AppBar position='static'>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
            SJ
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <TextField
            id="date"
            type="date"
            size="small"
            onChange={(e) => setDate(e.target.value)}
            value={date}
            sx={{
              "& .MuiInputBase-root": {
                color: 'white'
              }
            }}
          />
          <Box sx={{ flexGrow: 7 }} />
          <Button variant="contained" onClick={onButtonClickHandler} sx={{ flexGrow: 1 }}>
            {user ? "Sign Out" : "Sign In"}
          </Button>
        </Toolbar>
      </AppBar>
      <div
        css={css`
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",        
        `}
      >
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/user/:username" element={<User />}></Route>
          <Route path="*" element={<Navigate to="/" />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
