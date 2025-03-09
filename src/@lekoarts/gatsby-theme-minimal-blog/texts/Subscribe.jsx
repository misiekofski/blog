import React from 'react'

export default class Subscribe extends React.Component {
  constructor() {
    super()
    this.state = { name: '', email: '', result: null }
  }

  render() {
    return (
      <React.Fragment>
        <div className="subscribe">
          <h3 className="subscribeInfo">
            I promise: no ads, no commercial content, your data stays solely with me.
            <br />
            Quality content (in text format) directly to your mail inbox.
          </h3>
        </div>
      </React.Fragment>
    )
  }
}
