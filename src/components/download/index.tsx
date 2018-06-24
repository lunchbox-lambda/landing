import './style.scss'
import app from 'lib/app'
import * as React from 'react'
import { Element } from 'react-scroll'
import { Component } from 'components/common'

interface Props { }

interface State { }

export class Download extends Component<Props, State> {

  constructor(props: Props) {
    super(props)
  }

  componentDidMount() {
    this.handleSubscriptions([
      // app.store.getState()
      //   .subscribe(store => console.log(store))
    ])
  }

  render() {
    return <Element name="download" className="section md-padding">
      <div className="container">
        <div className="row">

          <div className="section-header text-center">
            <h2 className="title">Download</h2>
          </div>

        </div>
      </div>
    </Element>
  }

}
