import * as courseData from "../data"

export default function getGameAndSelectPlayersTableDisplayNumber(course) {
  let displayNumber
  if (courseData.courses.includes(course)) {
    displayNumber = 2
  } else {
    displayNumber = 1
  }
  return displayNumber
}
