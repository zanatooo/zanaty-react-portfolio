import React from 'react';
import ProfilePic from '../../assets/large/me.png'
import Image from 'react-bootstrap/Image'

function About() {
  return (
    <section className="my-5" class="hero ">
      <h1 id="about" class="about"></h1> 
     
      <div style={{ display: 'flex', flexWrap: 'wrap-reverse', justifyContent: 'center', alignItems: 'center', }}>
        
        <div class="card2 is-align-content-center mt-3">
          <div class="card-content" style={{ display: 'flex', flexWrap: 'wrap-reverse', justifyContent: 'center', alignItems: 'center', }}>
            
          <figure class="image is-128x128 ">
            <Image class="profilepic " src={ProfilePic} alt="profile picture" roundedCircle></Image>
          </figure>
            <div class="content" style={{ display: 'flex',  justifyContent: 'center', alignItems: 'right', }}>
              Greetings. <br></br>
              My name is Mohammed Elzanaty. I am currently enrolled in an intensive program dedicated to Web Development at the University of California Los Angeles.
              I currently teach math, robotics,coding and coach soccer. I had completed an intensive program at UCLA, dedicated to Cybersecurity, which is equivalent
              to two to three years of work experience.

              Analytical, diligent Cybersecurity Engineer with leadership skills and a passion for cybersecurity. Lifelonglearner, experienced collaborator, and innovator.
              Ability to leverage background in Mathematics Education, critical thinking, and analytical skills to identify system vulnerabilities and mitigate risks toprevent
              future security breaches. Following this section are examples of my work in the UCLA Intensive Coding Program so far.
            </div>
          </div>
        </div>
      </div>



    </section>


  );
}

export default About;