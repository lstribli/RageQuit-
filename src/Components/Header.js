import React, { Component } from 'react'
import { Link, Router } from 'react-router-dom'
import './Header.css'
export default class Header extends Component {
  render() {
    return (
      <div className='Header'>
        <div className='twoButtons'>
          <Link
            to='/'>
            <button>
              Home
          </button>
          </Link>
          <Link
            to='/rules'>
            <button>
              Rules
          </button>
          </Link>
        </div>
        <img src='https://cdn.discordapp.com/attachments/701514992767205459/719363535313829909/simplerage.png' alt='artwork for RageQuit' />
        <div className='twoButtons'>
          <Link
            to='/discord'>
            <button>
              Discord
          </button>
          </Link>
          <Link
            to='/baseAppreciation'>
            <button>
              Base Appreciation
          </button>
          </Link>
        </div>
      </div>
    )
  }

}