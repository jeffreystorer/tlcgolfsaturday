import React from "react"
import { useRecoilValue } from "recoil"
import { teesSelectedState } from "../state"

export default function AllTableHeader() {
  const teesSelected = useRecoilValue(teesSelectedState)
  let teesSelectedArray = teesSelected.map((a) => a.value)
  let teeCount = teesSelectedArray.length
  let courses = ["DC", "MG", "MW", "OR", "PA", "TP"]
  console.log("😊😊 teesSelected", teesSelected)
  console.log("😊😊 teesSelectedArray", teesSelectedArray)
  console.log("😊😊 teeCount", teeCount)

  return (
    <>
      <tr className="individual-header-row">
        <th scope="col" className="individual-left-header-cell">
          Player
        </th>
        {courses.map((course) => {
          return (
            <th
              className="individual-other-header-cell"
              colspan={teeCount}
              scope="colgroup"
            >
              {course}
            </th>
          )
        })}
      </tr>
      <tr className="individual-header-row">
        <th scope="col" className="individual-left-header-cell"></th>
        {teesSelectedArray.map((tee) => {
          return (
            <th className="individual-other-header-cell" scope="col">
              {tee}
            </th>
          )
        })}
        {teesSelectedArray.map((tee) => {
          return (
            <th className="individual-other-header-cell" scope="col">
              {tee}
            </th>
          )
        })}
        {teesSelectedArray.map((tee) => {
          return (
            <th className="individual-other-header-cell" scope="col">
              {tee}
            </th>
          )
        })}
        {teesSelectedArray.map((tee) => {
          return (
            <th className="individual-other-header-cell" scope="col">
              {tee}
            </th>
          )
        })}
        {teesSelectedArray.map((tee) => {
          return (
            <th className="individual-other-header-cell" scope="col">
              {tee}
            </th>
          )
        })}
        {teesSelectedArray.map((tee) => {
          return (
            <th className="individual-other-header-cell" scope="col">
              {tee}
            </th>
          )
        })}
      </tr>
    </>
  )
}
