import React from 'react'
import PropTypes from 'prop-types'

import ice from '../images/Ice.jpg'
import water from '../images/Water.jpg'
import rock from '../images/Rock.jpg'
import profile from '../images/Profile.jpg'

import Carousel from './Carousel'

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
            I am a full-stack web developer with a background in management,
            interpersonal relations and trade operations. Through my
            experiences, I have learned the importance of being reliable and
            timely. I enjoy working with teams and sharing ideas through
            collaboration. I find that leading by example and not through giving
            orders is often the best way to accomplish tasks. I think being
            articulate when communicating is critical, but listening effectively
            is just as important. I strive to think flexibly, be persistent, and
            always remain curious.
          </p>
          <p>
            My skills include:
            <br />
            Git control, html, css, css preprocessors, javacript, react, redux,
            node.js, express, sql, postgress, python, C
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
          <h5>Conway's Game Of Life</h5>
          <p>
            <strong>Description: </strong> Simple zero-player game app based on
            the cellular automaton devised by mathematician John Horton Conway.
            After setting up initial parameters, app follows the rules of the
            game which are the following: 1. Any live cell with less than two
            live neighbors dies. 2. Any live cell with two or three neighbors
            lives. 3. Any live cell with more than three neighbors dies. Any
            dead cell with exactly three neighbors becomes a live cell. This
            process continues repeatedly to create furthur generations.
            <br />
            <strong> Tech-stack:</strong> React, Css
            <br />
            <strong> # of people involved: </strong> 1
            <br />
            <strong> Link: </strong>{' '}
            <a target="blank" href="https://conwaysgol.netlify.com/">
              Conway's Game of Life
            </a>
            <br />
            <strong> Repository: </strong>{' '}
            <a
              target="blank"
              href="https://github.com/jeffyjkang/conwaysgameoflife"
            >
              Github/ConwaysGameOfLife
            </a>
          </p>
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
            <br />
            <strong>Repository: </strong>{' '}
            <a target="blank" href="https://github.com/airfitness">
              Github/AirFitness
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
            <br />
            <strong>Repository: </strong>{' '}
            <a target="blank" href="https://github.com/artfoliobuild">
              Github/ArtFolio
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
            <br />
            <strong> Repository: </strong>{' '}
            <a
              target="blank"
              href="https://github.com/Lambda-School-Labs/labs9-flight-log"
            >
              Github/FlyteLog
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
            <a target="blank" href="https://jeffsnotes.netlify.com/">
              JeffsNotes
            </a>
            <br />
            <strong> Repository: </strong>{' '}
            <a
              target="blank"
              href="https://github.com/jeffyjkang/back-end-project-week"
            >
              Github/JeffsNotes/backend
            </a>
            <br />
            <strong> Repository: </strong>{' '}
            <a
              target="blank"
              href="https://github.com/jeffyjkang/front-end-project-week"
            >
              Github/JeffsNotes/frontend
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
            I am sincerely passionate about. After being involved in a few
            different divisions of employment I found software engineering and
            computer science. I plan to continue learning indefinitely about
            this vast and dynamic filed of study. I have always wanted to be
            able to make an impact on a global scale and I feel the path I am on
            now will allow for this.
          </p>

          <p>
            I am grateful to have found and continue to be a part of Lambda
            School which was the vehicle that allowed me to push my knowledge
            and help develop me into a full-stack web engineer. I am passionate
            about every aspect, from designing to front-end and back-end.
          </p>
          <Carousel />
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
          <img className="picture" src={profile} alt="personal" />
          <h5>
            Take a look at my resume, connect with me via LinkedIn or github
            <br /> Or contact me via my email below:
          </h5>
          <ul className="icons">
            <li>
              <a
                target="blank"
                href="https://resume.creddle.io/resume/3upx41jl06s"
                className="icon fa-file-text-o"
              >
                <span className="label">Resume</span>
              </a>
            </li>
            <li>
              <a
                target="blank"
                href="https://www.linkedin.com/in/jeffrey-y-kang/"
                className="icon fa-linkedin"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                target="blank"
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
