import React from "react"
import GamesTableDropDowns from "./GamesTableDropDowns"
import GamesTableHeader from "./GamesTableHeader"
import GamesTableBody from "./GamesTableBody"

import ButtonDownloadScreenShot from "./ButtonDownloadScreenshot"
import { get } from "../functions/localStorage"

export default function GamesTableAll({ ratings, slopes, pars, game, course }) {
  let today = new Date()
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]
  const months = [
    "Jan.",
    "Feb.",
    "Mar.",
    "Apr.",
    "May",
    "Jun.",
    "Jul.",
    "Aug.",
    "Sep.",
    "Oct.",
    "Nov.",
    "Dec.",
  ]
  let dayName = days[today.getDay()]
  let monthName = months[today.getMonth()]
  let date = dayName + ", " + monthName + " " + today.getDate()
  let courseName
  switch (course) {
    case "dc":
      courseName = "Deer Creek"
      break
    case "mg":
      courseName = "Magnolia"
      break
    case "mw":
      courseName = "Marshwood"
      break
    case "or":
      courseName = "Oakridge"
      break
    case "pa":
      courseName = "Palmetto"
      break
    case "tp":
      courseName = "Terrapin Point"
      break
    default:
      break
  }
  return (
    <>
      <GamesTableDropDowns />
      <br />
      <br />
      <table id="games-table" className="background-white">
        <div id="games-table-div" className="background-white">
          <thead>
            <tr className="center background-white">
              <th colSpan={get("teesSelected").length + 1}>
                {date} at {courseName}
              </th>
            </tr>
            <GamesTableHeader />
          </thead>
          <tbody>
            <GamesTableBody ratings={ratings} slopes={slopes} pars={pars} />
          </tbody>
        </div>
      </table>
      <br></br>
      <br></br>
      <div className="center">
        <ButtonDownloadScreenShot
          date={date}
          courseName={courseName}
          element="games-table-div"
        />
      </div>
    </>
  )
}
