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
          <div className="description-wrapper">
            <div className="inspiration-list">
              <div>
                <i className="fa fa-lg fa-leaf"></i>
                Grow your own food and harvest all around the year
              </div>
              <div>
                <i className="fa fa-lg fa-leaf"></i>
                Furnish your apartement with a unique modern design
              </div>
              <div>
                <i className="fa fa-lg fa-leaf"></i>
                Make a fun weekend DIY project with your kids
              </div>
              <div>
                <i className="fa fa-lg fa-leaf"></i>
                Grow your own food and harvest all around the year
              </div>
              <div>
                <i className="fa fa-lg fa-leaf"></i>
                Furnish your apartement with a unique modern design
              </div>
              <div>
                <i className="fa fa-lg fa-leaf"></i>
                Make a fun weekend DIY project with your kids
              </div>
            </div>
            <div className="instruction-list">
              { [0, 1, 2].map(n =>
                <div key={ n } className="paragraph">
                  <div className="bullet-part">
                    <div className="bullet"></div>
                    <div className="lines">
                      <div className="line"></div>
                      <div className="line"></div>
                      <div className="line"></div>
                    </div>
                  </div>
                  <div className="lines">
                    <div className="line" style={ { marginLeft: '0px' } }></div>
                  </div>
                </div>
              ) }
            </div>
          </div>
        </div>
      </div>
    </Element>
  }

}
