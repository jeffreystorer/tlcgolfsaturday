import React, { useState, useEffect } from "react"
import "../styles/App.css"
import AllTableAll from "./AllTableAll"
import fetchGamesGHIN from "../functions/fetchGamesGHIN"
import { get } from "../functions/localStorage"
import { useRecoilState } from "recoil"
import * as state from "../state"

export default function AllTable({ ratings, slopes, pars }) {
  const [loading, setLoading] = useState(true)
  //eslint-disable-next-line
  const [teesSelected, setTeesSelected] = useRecoilState(
    state.teesSelectedState
  )
  //eslint-disable-next-line
  const [ghinNumber, setGHINNumber] = useRecoilState(state.ghinNumberState)

  useEffect(() => {
    setTeesSelected(get("teesSelected"))
  }, [setTeesSelected])

  useEffect(() => {
    fetchGamesGHIN(setLoading)
  }, [])

  if (loading) return <p className="center-bold">Loading</p>

  return (
    <>
      <AllTableAll
        ratings={ratings}
        slopes={slopes}
        pars={pars}
        game={"Saturday"}
      />
    </>
  )
}
