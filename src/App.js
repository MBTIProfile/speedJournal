import logo from './logo.svg';
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"
import GitHubIcon from "@mui/icons-material/GitHub"
import { Navigate, Route, Routes } from "react-router-dom"
import './App.css';

import Main from "./page/Main/Main"
import User from "./page/User/User"

function App() {
  return (
    <>
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
      <div style={{
          maxWidth: "1000px",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",        
      }}>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/user/:username" element={<User />}></Route>
          <Route path="*" element={<Navigate to="/" />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
