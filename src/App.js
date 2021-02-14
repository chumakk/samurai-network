import React from "react";
import "./App.css";
import Header from "./components/Header/Header.js";
import Nav from "./components/Nav/Nav.js";
import Profile from "./components/Profile/Profile.js";
import DialogsContainer from "./components/Dialogs/DialogsContainer.js";
import News from "./components/News/News.js";
import Music from "./components/Music/Music.js";
import Settings from "./components/Settings/Settings.js";
import { BrowserRouter, Route } from "react-router-dom";
// Решить проблему со стилизацией в файлах App.css, Dialogs.css
function App(props) {
  return (
    <div className="app-container">
      <Header />
      <Nav />
      <div className="app-content-wrapper">
        <Route path="/profile" render={() => <Profile store={props.store} />} />
        <Route
          path="/dialogs"
          render={() => <DialogsContainer store={props.store} />}
        />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />
      </div>
    </div>
  );
}

export default App;
