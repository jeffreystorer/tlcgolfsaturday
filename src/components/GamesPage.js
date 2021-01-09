import React from "react"
import "../styles/App.css"
import GamesTable from "./GamesTable"
import { get, set } from "../functions/localStorage"
import fetchCourseData from "../functions/fetchCourseData"
import setSheetURL from "../functions/setSheetURL"
import setIsLoggedIn from "../functions/setIsLoggedIn"
import fetchPlayersAndGames from "../functions/fetchPlayersAndGames"

export default function GamesPage() {
  if (!get("teesSelected")) {
    let defaultValue = ["C", "C/M", "M"]
    set("teesSelected", defaultValue)
  }
  let ghinNumber, lastName
  ghinNumber = "585871"
  lastName = "Storer"
  set("ghinNumber", ghinNumber)
  set("lastName", lastName)
  setIsLoggedIn(ghinNumber, lastName)
  setSheetURL(ghinNumber)
  if (get("isLoggedIn") === "true") {
    fetchPlayersAndGames(ghinNumber)
  }
  set("datamode", "roster")
  const [ratings, slopes, pars] = fetchCourseData()

  return (
    <>
      <GamesTable ratings={ratings} slopes={slopes} pars={pars} />
    </>
  )
}
