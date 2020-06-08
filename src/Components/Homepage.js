import React from 'react';


export default class Homepage extends React.Component {
  render() {
    return (
      <div className="homepage">
        <h1>Welcome to RageQuit2X+</h1>
        <section className="description">
          <h3>Not only is this server 2x almost all loot and resources,
        it also has tons of quality of life improvement mods and a custom map!</h3>
          <ul className="amenities">
            <li>Explore a Military Submarine Base or dive down to infilitrate a Military
        Sub monument with puzzles.</li>
            <li> Head over to the harbor for a completely redone
        monument with 2 large Cargo ships docked in the bays!</li>
            <li>Beautiful bridges and
        scenery and plenty of wilderness to explore.</li>
            <li>Train system that runs across the map!</li>
            <li>FREE VIP quality skin shop with GUI</li>
            <li>Items spawn pre-skinned automatically.</li>
            <li>Outpost and Bandit Town teleports</li>
            <li>pets like wolves, chickens, boars, and stags that can follow you around
         and even be issued commands like attack a barrel, NPC, or even another player!</li>
            <li>Zlevels to go beyond 2x on resources.</li>
          </ul>
          <h3>Wipe is bi-weekly while Blueprint wipe is monthly!</h3>
        </section>
        <section className="map">
          <h1>The Map</h1>
          <div className="video">
            <iframe title="theMap" width="700" height="515" src="https://www.youtube.com/embed/3tBQ4DcqXUA"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
          </div>
        </section>
      </div >
    )
  }
}