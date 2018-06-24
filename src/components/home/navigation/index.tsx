import './style.scss'
import * as React from 'react'
import { Link } from 'react-scroll'

const logoBlack = require('assets/cdn/logo_black.svg')
const logoWhite = require('assets/cdn/logo_white.svg')

interface Props { }

interface State {
  fixed: boolean
  open: boolean
}

const items = [
  { title: 'Home', scrollTo: 'home' },
  { title: 'Seeds', scrollTo: 'seeds' },
  { title: 'Models', scrollTo: 'models' },
  { title: 'Design', scrollTo: 'design' },
  { title: 'Download', scrollTo: 'download' }
]

export class Navigation extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)

    this.state = {
      fixed: false,
      open: false
    }

    this.toggleNav = this.toggleNav.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll(event) {
    const { fixed } = this.state
    const shouldFixed = event.pageY > 1

    if (fixed !== shouldFixed)
      this.setState({ fixed: shouldFixed })
  }

  toggleNav() {
    let { open } = this.state
    open = !open
    this.setState({ open })
  }

  render() {
    return (
      <nav id="nav" className={
        `navbar nav-transparent
        ${this.state.fixed ? 'fixed-nav' : ''}
        ${this.state.open ? 'open' : ''}`
      }>
        <div className="container">

          <div className="navbar-header">

            <div className="navbar-brand">
              <a href="/">
                <img className="logo" src={ logoBlack } />
                <img className="logo-alt" src={ logoWhite } />
              </a>
            </div>

            <div className="nav-collapse" onClick={ this.toggleNav }>
              <span></span>
            </div>

          </div>

          <ul className="main-nav nav navbar-nav navbar-right">
            {
              items.map(item =>
                <li key={ item.title }>
                  <Link activeClass="active" to={ item.scrollTo } spy={ true } smooth={ true } duration={ 600 } >
                    { item.title }
                  </Link>
                </li>
              )
            }
          </ul>

        </div>
      </nav>
    )
  }
}
