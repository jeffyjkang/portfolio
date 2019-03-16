import React from 'react'
import PropTypes from 'prop-types'

import ice from '../images/Ice.jpg'
import water from '../images/Water.jpg'
import rock from '../images/Rock.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      />
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Introduction</h2>
          <span className="image main">
            <img className="introImage" src={ice} alt="" />
          </span>
          <p>
            Full-Stack Web Developer and software engineer. Specializing in
            technical operations, management and customer service forged through
            10+ years in various fields of work.
          </p>
          <p>
            Exhibits an optimistic perspective, enthusiasm and eagerness to
            help. Advocates synergy with associates to prioritize collective
            accolades above personal achievements. Possesses a strong conviction
            for learning to develop and improve invariably.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">My Projects</h2>
          <span className="image main">
            <img src={water} alt="" />
          </span>
          <h5> Airfitness </h5>
          <p>
            <strong> Description: </strong> Airfitness allows instructors to
            create exercise programs with a flexible location. The instructor is
            capable of categorizing the exercise, such as yoga, weight lifting,
            crossfit, etc. App allows users to purchase punch-cards for the
            specified exercise, and can easily filter by location or type. I was
            the team lead and front-end architect.
            <br />
            <strong> Tech-Stack: </strong> HTML, Css, JQuery, React,
            Node.js/Postgress
            <br />
            <strong> # of people involved: </strong> 3
            <br />
            <strong> Link: </strong>{' '}
            <a target="blank" href="https://af.netlify.com/">
              AirFitness
            </a>
          </p>
          <h5> Artfolio </h5>
          <p>
            <strong> Description: </strong> Portfolio app for an artist to
            display his collection of photos. Allows a users to login and
            comment on posts provided by the artist. Took on the role of team
            lead for the project. My position required me to review and test the
            group's code, troubleshoot, provide feedback and help group members
            when they were stuck on problems.
            <br />
            <strong> Tech-stack: </strong> HTML, Less/Css, React,
            Node.js/Postgress, Continuous Integration
            <br />
            <strong> # of people involved: </strong> 4
            <br />
            <strong> Link: </strong>{' '}
            <a target="blank" href="https://artfolio-landing.netlify.com/">
              ArtFolio
            </a>
          </p>
          <h5>Flytelog</h5>
          <p>
            <strong> Description: </strong> Pilot log book application that
            allows a pilot to use an online resource to log flight hours instead
            of the traditional pen and paper format. Connects with various APIs
            and tools that allows a user to store images, track flight routes
            with maps, update instructor relationships, and purchase
            memberships. I was heavily involved in designing the front-end and
            back-end, as well as hooking up our app with the various APIs.
            <br />
            <strong> Tech-stack: </strong> React, Node, SQL, Material-UI. APIs:
            Firebase-auth, Firebase-storage, Stripe for billing
            <br />
            <strong> # of people involved: </strong> 5
            <br />
            <strong> Link: </strong>{' '}
            <a target="blank" href="https://lab9-flightlogs.firebaseapp.com/">
              FlyteLog
            </a>
          </p>
          <h5>JeffsNotes</h5>
          <p>
            <strong> Description: </strong>A note taking application that allows
            users to create multiple notes. Capable of listing the various
            notes, or a single note. Updating and deletion of notes is possible
            as well as a search functionality to filter notes by name. User can
            also register or login to keep track of their previous notes.
            <br />
            <strong> Tech-stack: </strong> React, Node.js/SQL
            <br />
            <strong> # of people: </strong> 1
            <br />
            <strong> Link: </strong>{' '}
            <a
              target="blank"
              href="https://suspicious-hugle-5f1b77.netlify.com/"
            >
              JeffsNotes
            </a>
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About Me</h2>
          <span className="image main">
            <img src={rock} alt="" />
          </span>
          <p>
            I consider myself to be immensely fortunate to have found something
            I am sincerely passionate about. I also realize there are many
            people who do not share my excitement and attitude about their field
            of study. Therefore I pledge to never idle and take for granted the
            opportunities that are given to me. After being involved in a few
            different divisions of employment, including management, logistics,
            hardware technician, sales and purchasing, I found software
            engineering and computer science. For me, a flood gate was opened
            and I quickly became enthralled in the world of discovering new tech
            and creating software. I can honestly and wholeheartedly say I have
            never been as disciplined and focused about software tech compared
            to anything else in my life. I plan to continue learning
            indefinitely and have created schedules to adhere to this. This
            includes research of new tech, algorithms, data structures,
            revision, review and creating projects.
          </p>
          <p>
            Growing up I was always curious about finding truths and I am still
            the type of person to be constantly google-ing or researching about
            anything and everything. I have always wanted to be able to make an
            impact on a global scale and I feel the path I am on now will allow
            for this. Another feature that I find immensely rewarding is the
            intellectual stimulation that comes along with learning about new
            technologies, libraries and frameworks.
          </p>
          <p>
            I am elated to have found and continue to be a part of Lambda School
            which was the vehicle that allowed me to push my knowledge and help
            develop me into a full-stack web engineer. I am passionate about
            every aspect, from designing to front-end and back-end. I now have
            so many tools at my disposable but I feel the greatest tool that
            they provided me was the ability to self-learn and the confidence to
            be able to learn anything no matter how intimidating it may be at
            first.{' '}
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4" />
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              {/* <a href="#" className="icon fa-file-text-o">
                <span className="label">Resume</span>
              </a> */}
              <button className="icon fa-file-text-o">
                <span className="label">Resume</span>
              </button>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/jeffrey-kang-4937b117a/"
                className="icon fa-linkedin"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/jeffyjkang"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>Email: Jeffyjkang@gmail.com</li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
