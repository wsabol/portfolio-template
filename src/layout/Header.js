import React from 'react'
import { smoothScroll } from '../App'

export default props =>
  <section className="hero is-fullheight" id="home">
    <div className="hero-body animated fadeIn">
      <div className="container has-text-white">
        {props.greeting}
        <h1 className="title is-1 has-text-white">{props.title}</h1>
        <h2 className="subtitle is-3 has-text-white">{props.subtitle}</h2>
        <a onClick={smoothScroll} className="button is-link is-rounded button-special" href="#about" >
          See More
        </a>
      </div>
    </div>
    <div className="hero-image animated fadeIn has-background-primary">
    </div>
  </section>
