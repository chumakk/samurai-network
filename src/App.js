import React from "react";
import "./App.css";
import Header from "./components/Header/Header.js";
import Nav from "./components/Nav/Nav.js";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer.js";
import News from "./components/News/News.js";
import Music from "./components/Music/Music.js";
import UsersContainer from "./components/Users/UsersContainer";
import Settings from "./components/Settings/Settings.js";
import { Route } from "react-router-dom";
// Решить проблему со стилизацией в файлах App.css, Dialogs.css
function App() {
  return (
    <div className="app-container">
      <Header />
      <Nav />
      <div className="app-content-wrapper">
        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
        <Route
          path="/dialogs"
          render={() => <DialogsContainer/>}
        />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/users" component={UsersContainer} />
        <Route path="/settings" component={Settings} />
      </div>
    </div>
  );
}

export default App;
