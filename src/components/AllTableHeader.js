import React from "react"
import { useRecoilValue } from "recoil"
import { teesSelectedState } from "../state"

export default function AllTableHeader() {
  const teesSelected = useRecoilValue(teesSelectedState)
  let teesSelectedArray = teesSelected.map((a) => a.value)
  let teeCount = teesSelectedArray.length
  let courses = ["DC", "MG", "MW", "OR", "PA", "TP"]

  return (
    <>
      <tr className="">
        <th scope="col" className="individual-left-header-cell"></th>
        {courses.map((course) => {
          return (
            <th className="" colspan={teeCount} scope="colgroup">
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
