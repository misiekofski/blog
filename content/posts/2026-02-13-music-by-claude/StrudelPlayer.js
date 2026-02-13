/**
 * Strudel player iframe widget
 *
 * @see https://strudel.cc
 */

import * as React from "react"

function StrudelPlayer({ url = "", width = "100%", height = "600px" }) {
  const strudelUrl = url ? `https://strudel.cc/#${url}` : "https://strudel.cc"
  
  return (
    <iframe
      title="Strudel"
      className="StrudelPlayer"
      src={strudelUrl}
      width={width}
      height={height}
      allow="midi"
      frameBorder="0"
      style={{ border: "none", borderRadius: "4px" }}
    />
  )
}

export default StrudelPlayer
