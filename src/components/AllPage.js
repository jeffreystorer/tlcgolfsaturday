import React from "react"
import "../styles/App.css"
import AllTable from "./AllTable"
import { get, set } from "../functions/localStorage"
import fetchCourseData from "../functions/fetchCourseData"
import setSheetURL from "../functions/setSheetURL"
import setIsLoggedIn from "../functions/setIsLoggedIn"
import fetchPlayersAndGames from "../functions/fetchPlayersAndGames"

export default function AllPage() {
  if (!get("teesSelected")) {
    let defaultValue = [
      { label: "Club", value: "C" },
      { label: "Club/Medal", value: "C/M" },
      { label: "Medal", value: "M" },
    ]
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
  set("dataMode", "ghin")
  const [ratings, slopes, pars] = fetchCourseData()

  return (
    <>
      <AllTable ratings={ratings} slopes={slopes} pars={pars} />
    </>
  )
}
