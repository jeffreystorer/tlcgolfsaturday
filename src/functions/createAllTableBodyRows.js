import { tees } from "../data"
import { get } from "./localStorage"
import setRatingSlopePar from "./setRatingSlopePar"

export default function createAllTableBodyRows(
  teesSelected,
  ratings,
  slopes,
  pars
) {
  const players = get("players")
  console.log("😊😊 players--all", players)

  //declare some variables
  var rows = []
  let strHcpIndex
  let hcpIndex
  let gender

  //next, we build an array of tees
  let teesSelectedArray = buildTeeArray()

  //filter players, then add them
  function addRow(item, index) {
    if (item[9] === "Yes" || item[9] === "YES" || item[9] === "yes") {
      doAdd(item, index)
    }
  }

  //construct the row
  function compute(aPlayer, index) {
    strHcpIndex = aPlayer[3]
    hcpIndex = parseFloat(strHcpIndex)
    let lastName = aPlayer[1]
    gender = aPlayer[4]
    let player = lastName + " (" + strHcpIndex + ")"
    let rowReturn = [player]
    let i
    let courseNumber
    for (courseNumber = 0; courseNumber < 6; courseNumber++) {
      for (i = 0; i < teesSelectedArray.length; i++) {
        //here is where we compute the course handicap of the golfer for each of the selected tees
        let teeNumber = tees.indexOf(teesSelectedArray[i])
        const [rating, slope, par] = setRatingSlopePar(
          ratings,
          slopes,
          pars,
          courseNumber,
          teeNumber,
          gender
        )
        rowReturn.push(doMath(rating, slope, par))
      }
    }
    return rowReturn
  }

  //compute the course handicap
  function doMath(rating, slope, par) {
    if (rating === 0) {
      return "-"
    } else {
      if (strHcpIndex === "guest") {
        return 0
      } else {
        return Math.round(hcpIndex * (slope / 113) + (rating - par))
      }
    }
  }

  //build array of tees
  function buildTeeArray() {
    let teesSelectedArray = teesSelected.map((a) => a.value)
    return teesSelectedArray
  }

  //add a row for each player
  function doAdd(item, index) {
    let aPlayer = item
    var newRow = compute(aPlayer, index)
    rows.push(newRow)
  }

  players.forEach(addRow)
  return rows
}
