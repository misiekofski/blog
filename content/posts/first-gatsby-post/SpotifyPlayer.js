/* eslint react/no-unknown-property: 0 */
/* eslint react/prefer-stateless-function: 0 */

/**
 * Spotify player iframe widget
 *
 * @author Alexander Wallin <office@alexanderwallin.com>
 * @see https://developer.spotify.com/technologies/widgets/spotify-play-button/
 */

import * as React from "react"

// Size presets, defined by Spotify
const sizePresets = {
  large: {
    width: 300,
    height: 380,
  },
  compact: {
    width: 300,
    height: 80,
  },
}

function SpotifyPlayer({ artist, theme }) {
  return (
    <iframe
      title="Spotify"
      className="SpotifyPlayer"
      src={`https://open.spotify.com/embed/artist/${artist}?theme=${theme}`}
      width="100%"
      height="380"
      allowfullscreen=""
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
      frameBorder="0"
      allowtransparency="true"
    />
  )
}

export default SpotifyPlayer
