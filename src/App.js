import logo from './logo.svg';
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"
import GitHubIcon from "@mui/icons-material/GitHub"
import { Navigate, Route, Routes } from "react-router-dom"
import { css } from '@emotion/react'
import './App.css';
import {
  RecoilRoot,
} from 'recoil';
import Main from "./page/Main/Main"
import User from "./page/User/User"
import Button from '@mui/material/Button';
import { initializeFirebase, onGoogleClick, signOutGoogle } from "./app/googleAuth"
import { useEffect, useState } from "react"
import { TextField, Box } from '@mui/material';

function App() {
  const [user, setUser] = useState(false)

  useEffect(() => {
    initializeFirebase(setUser)
    if (sessionStorage.getItem("auth")) {
      setUser(true)
    }
  }, [])
  const onButtonClickHandler = async () => {
    if (user) {
      await signOutGoogle(setUser)
    } else {
      await onGoogleClick(setUser)
    }
  }


  return (
    <RecoilRoot>
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
            defaultValue="2017-05-24"
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
    </RecoilRoot >
  );
}

export default App;
