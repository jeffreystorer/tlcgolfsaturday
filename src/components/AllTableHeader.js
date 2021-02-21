import React from "react"
import { useRecoilValue } from "recoil"
import { teesSelectedState } from "../state"

export default function AllTableHeader() {
  const teesSelected = useRecoilValue(teesSelectedState)
  let cols = createGamesAndLineupTableHeaderRow(teesSelected)
  const getHeader = () => {
    var keys = cols
    return keys.map((key, index) => {
      return (
        <th className="game-header-cell" key={index} scope="col">
          {key}
        </th>
      )
    })
  }

  return (
    <>
      <tr className="individual-header-row">
        <th scope="col" className="individual-left-header-cell">
          ""
        </th>
        <th
          className="individual-other-header-cell"
          colspan="3"
          scope="colgroup"
        >
          DC
        </th>
        <th
          className="individual-other-header-cell"
          colspan="3"
          scope="colgroup"
        >
          MG
        </th>
        <th
          className="individual-other-header-cell"
          colspan="3"
          scope="colgroup"
        >
          MW
        </th>
        <th
          className="individual-other-header-cell"
          colspan="3"
          scope="colgroup"
        >
          OR
        </th>
        <th
          className="individual-other-header-cell"
          colspan="3"
          scope="colgroup"
        >
          PA
        </th>
        <th
          className="individual-other-header-cell"
          colspan="3"
          scope="colgroup"
        >
          TP
        </th>
      </tr>
      <tr></tr>
    </>
  )
}
