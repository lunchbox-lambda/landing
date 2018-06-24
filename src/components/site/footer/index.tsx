import './style.scss'
import * as React from 'react'

const logoWhite = require('assets/cdn/logo_white.svg')

interface Props { }

export class Footer extends React.PureComponent<Props> {

  constructor(props: Props) {
    super(props)
  }

  render() {
    return (
      <footer id="footer" className="sm-padding bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-md-12">

              <div className="footer-logo">
                <a href="/"><img src={ logoWhite } /></a>
              </div>

              <ul className="footer-follow">
                <li>
                  <a href="https://github.com/lunchbox-lambda" target="_blank">
                    <i className="fa fa-github"></i>
                  </a>
                </li>
              </ul>

              <div className="footer-copyright">
                <p className="white-text">
                  Copyright © 2018. All Rights Reserved. Designed
                  by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                </p>
              </div>

            </div>

          </div>
        </div>
      </footer>
    )
  }

}
