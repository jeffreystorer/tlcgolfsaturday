import React from "react"
import createGamesTableBodyRows from "../functions/createGamesTableBodyRows.js"
import { useRecoilValue } from "recoil"
import * as state from "../state"

const GamesTableBody = ({ ratings, slopes, pars }) => {
  const course = useRecoilValue(state.courseState)
  const teesSelected = useRecoilValue(state.teesSelectedState)

  let rows = createGamesTableBodyRows(
    course,
    teesSelected,
    ratings,
    slopes,
    pars
  )
  let rowsTD = []
  let colCount = rows[0].length

  function generateRows() {
    let oddRow = false
    for (var i = 0; i < rows.length; i++) {
      oddRow = !oddRow
      rowsTD[i] = (
        <tr key={i} className={`${oddRow ? "" : "tr--shaded"}`}>
          <td className="game-left-row-cell">{rows[i][0]}</td>
          {generateCols(i, oddRow)}
        </tr>
      )
    }
    return rowsTD
  }

  function generateCols(i, oddRow) {
    let tds = []
    let oddCol = false
    for (var j = 1; j < colCount; j++) {
      oddCol = !oddCol
      tds[j] = (
        <td
          className={`game-other-row-cell ${oddRow & oddCol ? "" : ""}`}
          key={j}
        >
          {rows[i][j]}
        </td>
      )
    }
    return tds
  }

  return <>{generateRows()}</>
}

export default GamesTableBody
