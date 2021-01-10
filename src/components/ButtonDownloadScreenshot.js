import React from "react"
import domtoimage from "dom-to-image"

const ButtonDownLoadScreenshot = ({ date, courseName, element }) => {
  function handleClick() {
    let fileName = date + " at " + courseName
    domtoimage
      .toJpeg(document.getElementById(element), { quality: 0.95 })
      .then(function (dataUrl) {
        var link = document.createElement("a")
        link.download = fileName + ".jpeg"
        link.href = dataUrl
        link.click()
      })
  }
  return (
    <button className="center" onClick={handleClick}>
      Download Screenshot
    </button>
  )
}
export default ButtonDownLoadScreenshot
