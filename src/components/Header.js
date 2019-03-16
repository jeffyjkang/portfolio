import React from 'react'
import PropTypes from 'prop-types'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
// import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fab)
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-laptop" />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Jeffrey Kang</h1>
        <p>
          Software Engineer
          <br />
          Full-Stack Web Developer
        </p>
        <div>
          <div className="icons first-row">
            <FontAwesomeIcon size="2x" icon={['fab', 'git']} />
            <FontAwesomeIcon size="2x" icon={['fab', 'html5']} />
            <FontAwesomeIcon size="2x" icon={['fab', 'css3']} />
            <FontAwesomeIcon size="2x" icon={['fab', 'less']} />
          </div>
          <div className="icons second-row">
            <FontAwesomeIcon size="2x" icon={['fab', 'js']} />
            <FontAwesomeIcon size="2x" icon={['fab', 'react']} />
            <FontAwesomeIcon size="2x" icon={['fab', 'node-js']} />
            <FontAwesomeIcon size="2x" icon={['fab', 'python']} />
          </div>
        </div>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Intro
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
