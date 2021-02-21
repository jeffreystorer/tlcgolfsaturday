import React from "react"
import AllTableHeader from "./AllTableHeader"
import AllTableBody from "./AllTableBody"

import ButtonDownloadScreenShot from "./ButtonDownloadScreenshot"
import { get } from "../functions/localStorage"

export default function AllTableAll({ ratings, slopes, pars, game }) {
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
  return (
    <>
      <table id="games-table" className="background-white">
        <div id="all-table-div" className="background-white">
          <thead>
            <tr className="center background-white">
              <th colSpan={get("teesSelected").length + 1}>{date}</th>
            </tr>
            <AllTableHeader />
          </thead>
          <tbody>
            <AllTableBody ratings={ratings} slopes={slopes} pars={pars} />
          </tbody>
        </div>
      </table>
      <br></br>
      <br></br>
      <div className="center">
        <ButtonDownloadScreenShot
          date={date}
          courseName={"All Courses"}
          element="all-table-div"
        />
      </div>
    </>
  )
}
