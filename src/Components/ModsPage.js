import React from 'react'
import Context from '../context/Context';
import './Mod.css'


export default class ModsPage extends React.Component {
  static contextType = Context

  render() {
    // console.log(this.context.mods)
    // console.log(this.context.mods.map(
    //   mod =>
    //     mod.id,
    // mod => mod.title,
    // mod => mod.description,
    // mod => mod.screenshot,
    // mod => mod.hyperlink
    // ))
    // console.log(this.context.mods.map(mod => mod.screenshot))
    return (
      <div className="mods">
        <h1>The Mods</h1>
        <h3>RageQuit! 2x+ has a considerable repository of Mods that make it what it is.</h3>
        <h3>Click on an Mod Image to be directed to that Mods' Homepage</h3>
        <ul>
          {this.context.mods.map(mod =>
            <li className="mod" key={mod.id}>
              <h3>{mod.title}</h3>
              <p>{mod.description}</p>
              <a href={mod.hyperlink} target="none"><img src={mod.screenshot} alt="mod screenshot"></img></a>
              <p>To run {mod.title} in-game: </p>
              <p className="command">{mod.command}</p>
            </li>
          )}
        </ul>
      </div>
    )
  }
}