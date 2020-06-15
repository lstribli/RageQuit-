import React from 'react'
import './Direct-Connect.css'
export default class DirectConnect extends React.Component {

  render() {
    return (
      <div className="homepage">
        <h1>Connect directly to the Rust Server!</h1>

        <a className="directConnect" href="steam://connect/104.238.229.241:28236" target="none">
          <img src="https://cdn.discordapp.com/attachments/701514992767205459/719801404264546325/Rust-feature-image-op-768x432.jpg"
            alt="server screenshot">
          </img>
        </a>
        <p>
          <ul className="amenities">
            <li>You must have Steam installed on your local machine in order to open the server!</li>
            <li>Clicking this link will redirect you to a new window which opens your Steam client bootstrapper.</li>
          </ul>
        </p>
      </div>
    )
  }
}