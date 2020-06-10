import React from 'react'
import './Footer.css'

export default class Footer extends React.Component {
  render() {
    return (
      <div>
        <section className="social">
          <div className="author">
            <p>Web design by: Logan Stribling</p>
            <p>Check out my portfolio Here ==></p>
            <a href="https://lstribli.github.io/Portfolio/index.html" alt="Author Icon" target="none">
              <div className="authorIcon"></div>
            </a>
          </div>
          {/* 
          <a href="" alt="">
            <div></div>
          </a>
          <a href="" alt="">
            <div></div>
          </a>
          <a href="" alt="">
            <div></div> */}
          {/* </a> */}
        </section>
      </div>
    )
  }
}