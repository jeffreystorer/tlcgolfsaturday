import React, { useState, useEffect } from "react"
import "../styles/App.css"
import GamesTableAll from "./GamesTableAll"
import GamesTableDropDowns from "./GamesTableDropDowns"
import getGamesAndSelectPlayersTableDisplayNumber from "../functions/getGamesAndSelectPlayersTableDisplayNumber"
import fetchGamesGHIN from "../functions/fetchGamesGHIN"
import { get } from "../functions/localStorage"
import { useRecoilValue, useRecoilState } from "recoil"
import * as state from "../state"

export default function GamesTable({ ratings, slopes, pars }) {
  const [loading, setLoading] = useState(true)
  //eslint-disable-next-line
  const [teesSelected, setTeesSelected] = useRecoilState(
    state.teesSelectedState
  )
  //eslint-disable-next-line
  const [ghinNumber, setGHINNumber] = useRecoilState(state.ghinNumberState)

  const course = useRecoilValue(state.courseState)
  const game = "Saturday"

  useEffect(() => {
    setTeesSelected(get("teesSelected"))
  }, [setTeesSelected])

  useEffect(() => {
    fetchGamesGHIN(setLoading)
  }, [])

  let displayNumber = getGamesAndSelectPlayersTableDisplayNumber(course)
  if (loading) return <p className="center-bold">Loading</p>

  switch (displayNumber) {
    case 1:
      return (
        <>
          <p className="center-bold">
            Click on the dropdown box below<br></br>to select a course.
          </p>
          <GamesTableDropDowns table="Games" />
        </>
      )
    case 2:
      return (
        <>
          <GamesTableAll
            ratings={ratings}
            slopes={slopes}
            pars={pars}
            game={game}
            course={course}
          />
        </>
      )
    default:
      return undefined
  }
}
