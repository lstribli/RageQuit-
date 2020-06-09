import React from 'react';
import { Link } from 'react-router-dom'

export default class Discord extends React.Component {
  render() {
    return (
      <div className="rules">
        <h1>Join our Discord</h1>
        <section className="description">
          <h3>Open up your Discord App with this link:</h3>
          <div className="talk">
            <a
              href="https://discord.gg/x9dKyZr" target="blank"
            >
            </a>
          </div>
        </section>
      </div>
    )
  }
}