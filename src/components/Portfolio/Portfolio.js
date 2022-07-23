import React, { useState } from 'react';
import Cabana from '../../assets/large/cabana.png'
import NoteTaker from '../../assets/large/notetaker.png'
import BookSearch from '../../assets/large/wiki.png'
import TechSpot from '../../assets/large/techhut.png'
import FullStack from '../../assets/large/mern.png'
import WorkDay from '../../assets/large/workday.png'

function Portfolio() {

  return (
    <section className="section">
      <div className="images is-fullwidth">
        <div className="columns">
          <div className="column is-half ">
            <h2 className="title has-text-centered"> Cabana Joes Client Website
              <a href="https://github.com/Anchoviess/Cabana-Joe-Hospitality-Products" target="_blank"><i class="fab fa-github icon is-large" href></i></a></h2>
            <a class="image" className="image is-2by1 hover-zoom" href="https://epw80.github.io/Cabana-Joe-Hospitality-Products/" target="_blank" rel="noreferrer">
              <img
                src={Cabana}
                alt="An html that demonstrates the first skills ive aquired in the bootcamp."
              />
            </a>
          </div>
          <div className="column is-half">
            <h2 className="title has-text-centered"> Note Taker
              <a href="https://github.com/Anchoviess/note-taker" target="_blank"><i class="fab fa-github icon is-large" href></i></a></h2>
            <a className="image is-2by1" href="https://afternoon-scrubland-02416.herokuapp.com/" target="_blank" rel="noreferrer">
              <img
                src={NoteTaker}
                alt="This is a simple application that can be used to write and save notes."
              />
            </a>
          </div>
        </div>
        <div className="columns">
          <div className="column is-half">
            <h2 className="title has-text-centered"> Book Search
              <a href="https://github.com/Anchoviess/Book-Search" target="_blank"><i class="fab fa-github icon is-large" href></i></a> </h2>
            <a className="image is-2by1" href="https://anchoviess.github.io/Book-Search/" target="_blank" rel="noreferrer">
              <img
                src={BookSearch}
                alt=" Our first front end project that contains two API's. "
              />
            </a>
          </div>
          <div className="column is-half">
            <h2 className="title has-text-centered"> MERN Stack
              <a href="https://github.com/Anchoviess/Cabana-Joe-Hospitality-Products" target="_blank"><i class="fab fa-github icon is-large" href></i></a> </h2>
            <a className="image is-2by1" href="https://client-side-joe.herokuapp.com/" target="_blank" rel="noreferrer">
              <img
                src={FullStack}
                alt="Our first fullstack website, which is also a MERN stack."
              />
            </a>
          </div>
        </div>
        <div className="columns">
          <div className="column is-half">
            <h2 class="title has-text-centered"> The Tech Hut
              <a href="https://github.com/Anchoviess/tech-blog-mvc" target="_blank"><i class="fab fa-github icon is-large" href></i></a></h2>
            <a className="image is-2by1" href="https://immense-beach-88368.herokuapp.com/" target="_blank" rel="noreferrer">
              <img
                src={TechSpot}
                alt="A sample tech blog site."
              />
            </a>
          </div>
          <div className="column is-half">
            <h2 class=" title has-text-centered "> Work Day Scheduler
              <a href="https://github.com/Anchoviess/work-day-scheduler" target="_blank"><i class="fab fa-github icon is-large" href></i></a> </h2>
            <a className="image is-2by1" href="https://anchoviess.github.io/work-day-scheduler/" target="_blank" rel="noreferrer">
              <img
                src={WorkDay}
                alt="A simple daily planner app for standard business hours."
              />
            </a>
          </div>
        </div>

      </div>
    </section>
  )

}

export default Portfolio;