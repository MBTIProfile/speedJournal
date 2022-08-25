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

function App() {
  return (
    <RecoilRoot>
      <AppBar position='static'>
        <Toolbar>
          <IconButton>
            <GitHubIcon></GitHubIcon>
          </IconButton>
          <Typography>
            Test
          </Typography>
        </Toolbar>
      </AppBar>
      <div
        css={css`
        maxWidth: "1000px",
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
