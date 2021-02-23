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
import AllPage from "./AllPage"
import GamesPage from "./GamesPage"
//import SelectTeesPage from "./SelectTeesPage"

export default function App() {
  return (
    <RecoilRoot>
      <Router>
        <Header />
        <br />
        <nav>
          <NavLink
            exact
            to="/allcourses"
            className="navitem"
            activeStyle={{ color: "#3378ac", fontWeight: "bold" }}
          >
            All Courses
          </NavLink>
          <NavLink
            exact
            to="/"
            className="navitem"
            activeStyle={{ color: "#3378ac", fontWeight: "bold" }}
          >
            One Course
          </NavLink>

          {/*           <NavLink
            exact
            to="/selecttees"
            className="navitem-last"
            activeStyle={{ color: "#3378ac", fontWeight: "bold" }}
          >
            Select Tees
          </NavLink> */}
        </nav>
        <Switch>
          {/*          <Route path="/selecttees">
            <SelectTees />
          </Route> */}
          <Route path="/allcourses">
            <AllCourses />
          </Route>
          <Route path="/">
            <OneCourse />
          </Route>
        </Switch>
      </Router>
    </RecoilRoot>
  )
}

function AllCourses() {
  return (
    <>
      <br></br>
      <AllPage />
    </>
  )
}

function OneCourse() {
  return (
    <>
      <br></br>
      <GamesPage />
    </>
  )
}

/* function SelectTees() {
  return (
    <>
      <br></br>
      <SelectTeesPage />
    </>
  )
} */
