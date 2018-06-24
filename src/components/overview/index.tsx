import './style.scss'
import * as React from 'react'
import { Element } from 'react-scroll'
import { Component } from 'components/common'

interface Props { }

interface State { }

export class Overview extends Component<Props, State> {

  constructor(props: Props) {
    super(props)
  }

  render() {
    return <Element name="overview" className="section md-padding">
      <div className="container">
        <div className="row">

          <ul style={ { listStyleType: 'disc' } }>
            <li>Grow your own food and harvest all around the year</li>
            <li>Furnish your apartement with a unique modern design</li>
            <li>Make a fun weekend DIY project with your kids</li>
            <li>Grow your own food and harvest all around the year</li>
            <li>Furnish your apartement with a unique modern design</li>
            <li>Make a fun weekend DIY project with your kids</li>
          </ul>

        </div>
      </div>
    </Element>
  }

}
