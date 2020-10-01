import React, { useState } from "react";
import MainPage from "./Components/mainPage";
import "./App.css";
import { SpellProvider } from "./Components/GetDatabase";
import Header from "./Components/header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SpellFinder from "./Components/SpellFinder";
import Banner from "./Components/Banner";
import CharacterFinder from "./Components/Characters";
import { CharacterProvider } from "./Components/GetCharacters";

function App() {
  const [banner, setBanner] = useState("");

  const changeBanner = (ban) => {
    setBanner(ban);
  };

  return (
    <Router>
      <SpellProvider>
        <div className="App">
          <Header />

          <div className="container">
            <div style={{ display: "flex", margin: "7px" }}>
              <Banner style={{ float: "left" }} banner={banner} />
              <Route
                exact
                path="/houses"
                render={(props) => <MainPage changeBanner={changeBanner} />}
              />
              <Route path="/spell-finder" render={(props) => <SpellFinder />} />
              <CharacterProvider>
                <Route
                  path="/characters"
                  render={(props) => <CharacterFinder />}
                />
              </CharacterProvider>
              <Banner style={{ float: "right" }} banner={banner} />
            </div>
          </div>
        </div>
      </SpellProvider>
    </Router>
  );
}

export default App;
