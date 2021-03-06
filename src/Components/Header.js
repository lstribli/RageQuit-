import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
export default class Header extends Component {
  render() {
    return (
      <div className='Header'>
        <div className='twoButtons'>
          <Link
            to='/'>
            <button className="homeb">
              Home
          </button>
          </Link>
          <Link
            to='/rules'>
            <button className="rulesb">
              Rules
          </button>
          </Link>
          <Link
            to='/ModsPage'>
            <button className="modsb">
              Mods
          </button>
          </Link>
        </div>
        <img src='https://cdn.discordapp.com/attachments/701514992767205459/719363535313829909/simplerage.png' alt='artwork for RageQuit' />
        <div className='twoButtons'>
          <Link
            to='/discord'>
            <button className="discordb">
              Discord
          </button>
          </Link>
          <Link
            to='/base-Appreciation'>
            <button className="baseb">
              Base Appreciation
          </button>
          </Link>
          <Link
            to='/direct-connect'>
            <button className="connectb">
              Direct Connect
          </button>
          </Link>
        </div>
      </div>
    )
  }

}