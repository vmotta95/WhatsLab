import React, { useState } from "react";
import {
  Header,
  Main,
  MainContent,
  Footer,
  UserDiv,
  FriendDiv,
  
} from "./appStyle";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

function App() {
  const [inputUser, setInputUser] = useState("");
  const [inputText, setInputText] = useState("");
  const [appMsgs, setAppMsgs] = useState([{}]);

  const clear = () => {
    setInputText("");
    setInputText("");
  };

  //eventos
  const handleInputUser = (event) => {
    setInputUser(event.target.value);
  };
  const handleInputText = (event) => {
    setInputText(event.target.value);
  };

  //adicionar msg
  const addMsg = () => {
    const newMsg = { user: inputUser, text: inputText };

    const newFeedMsg = [...appMsgs, newMsg];

    setAppMsgs(newFeedMsg);

    clear();
  };

  //Msg impressa saira aqui
  const arrayAppMsgs = appMsgs.map((elemento) => {
    if (elemento.user === "") {
      return (
        <UserDiv>
          <p>{elemento.text}</p>
        </UserDiv>
      );
    } else {
      return (
        <FriendDiv>
          <p>
            <b>{elemento.user}</b>
          </p>
          <p>{elemento.text}</p>
        </FriendDiv>
      );
    }
  });

  return (
    <div>
      <Header>
        <img
          alt=""
          src="https://yt3.ggpht.com/ytc/AKedOLSH-PUg_wTvKW7xAKL4PsXFV85N9Ys341g0WSVd=s900-c-k-c0x00ffffff-no-rj"
        ></img>
        WhatsLab
      </Header>
      <Main>
        <MainContent>
          {arrayAppMsgs}
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="filled-basic"
              label="Name"
              variant="filled"
              value={inputUser}
              onChange={handleInputUser}
              multiline
            />
            <TextField
              id="filled-basic"
              label="Message"
              variant="filled"
              value={inputText}
              onChange={handleInputText}
              multiline
            />
          </Box>
          <Button variant="contained" onClick={addMsg}>
            Enviar
          </Button>
        </MainContent>
      </Main>
      <Footer>Victor Motta 2022.</Footer>
    </div>
  );
}

export default App;
