import React from "react"
import { RecoilRoot } from "recoil"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom"
import "../styles/App.css"
import Header from "./Header"
import GamesPage from "./GamesPage"
import SelectTeesPage from "./SelectTeesPage"

export default function App() {
  return (
    <RecoilRoot>
      <Router>
        <Header />
        <br />
        <nav>
          <NavLink
            exact
            to="/"
            className="navitem"
            activeStyle={{ color: "#3378ac", fontWeight: "bold" }}
          >
            Handicaps
          </NavLink>

          <NavLink
            exact
            to="/selecttees"
            className="navitem-last"
            activeStyle={{ color: "#3378ac", fontWeight: "bold" }}
          >
            Select Tees
          </NavLink>
        </nav>
        <Switch>
          <Route path="/selecttees">
            <SelectTees />
          </Route>
          <Route path="/">
            <Handicaps />
          </Route>
        </Switch>
      </Router>
    </RecoilRoot>
  )
}

function Handicaps() {
  return (
    <>
      <br></br>
      <GamesPage />
    </>
  )
}

function SelectTees() {
  return (
    <>
      <br></br>
      <SelectTeesPage />
    </>
  )
}
