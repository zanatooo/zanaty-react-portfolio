import React, { useState } from 'react';
import Cabana from '../../assets/large/budget-tracker.png'
import NoteTaker from '../../assets/large/notetaker.png'
import BookSearch from '../../assets/large/wiki.png'
import TechSpot from '../../assets/large/Tech-Blog.png'
import FullStack from '../../assets/large/book-search.png'
import WorkDay from '../../assets/large/workday.png'

function Portfolio() {

  return (
    <section className="section">
      <div className="images is-fullwidth">
        <div className="columns">
          <div className="column is-half ">
            <h2 className="title has-text-centered"> Cabana Joes Client Website
              <a href="https://github.com/zanatooo/zanaty-weather-dashboard" target="_blank"><i class="fab fa-github icon is-large" href></i></a></h2>
            <a class="image" className="image is-2by1 hover-zoom" href="https://zanatooo.github.io/zanaty-weather-dashboard/" target="_blank" rel="noreferrer">
              <img
                src={Cabana}
                alt="An html that demonstrates the first skills ive aquired in the bootcamp."
              />
            </a>
          </div>
          <div className="column is-half">
            <h2 className="title has-text-centered"> Note Taker
              <a href="https://github.com/zanatooo/zanaty-note-taker" target="_blank"><i class="fab fa-github icon is-large" href></i></a></h2>
            <a className="image is-2by1" href="https://stormy-peak-75772.herokuapp.com/" target="_blank" rel="noreferrer">
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
              <a href="https://github.com/zanatooo/Zanaty-BookSearch" target="_blank"><i class="fab fa-github icon is-large" href></i></a> </h2>
            <a className="image is-2by1" href="https://zanatooo.github.io/BookSearch/" target="_blank" rel="noreferrer">
              <img
                src={BookSearch}
                alt=" Our first front end project that contains two API's. "
              />
            </a>
          </div>
          <div className="column is-half">
            <h2 className="title has-text-centered"> MERN Stack
              <a href="https://github.com/zanatooo/zanaty-book-search-mern" target="_blank"><i class="fab fa-github icon is-large" href></i></a> </h2>
            <a className="image is-2by1" href="https://afternoon-scrubland-02416.herokuapp.com/" target="_blank" rel="noreferrer">
              <img
                src={FullStack}
                alt="Our first fullstack/MERN stack."
              />
            </a>
          </div>
        </div>
        <div className="columns">
          <div className="column is-half">
            <h2 class="title has-text-centered"> The Tech Blog
              <a href="https://github.com/zanatooo/zanaty-Tech-Blog" target="_blank"><i class="fab fa-github icon is-large" href></i></a></h2>
            <a className="image is-2by1" href="https://zanaty-techblog.herokuapp.com/" target="_blank" rel="noreferrer">
              <img
                src={TechSpot}
                alt="A sample tech blog site."
              />
            </a>
          </div>
          <div className="column is-half">
            <h2 class=" title has-text-centered "> Work Day Scheduler
              <a href="https://github.com/zanatooo/zanaty-work-day-scheduler" target="_blank"><i class="fab fa-github icon is-large" href></i></a> </h2>
            <a className="image is-2by1" href="https://zanatooo.github.io/zanaty-work-day-scheduler/" target="_blank" rel="noreferrer">
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