import './style.scss'
import * as React from 'react'
import { Element, scroller } from 'react-scroll'
import Slider from 'react-slick'
import { Component } from 'components/common'
import { Navigation } from './navigation'

const images = {
  screenshot_dashboard: require('assets/cdn/screenshot_dashboard.png'),
  screenshot_architecture: require('assets/cdn/screenshot_architecture.png'),
  screenshot_control_room: require('assets/cdn/screenshot_control_room.png'),
  screenshot_nodered: require('assets/cdn/screenshot_nodered.png')
}

const items = require('assets/gallery.json') as GalleryItem[]

interface GalleryItem {
  id: string
  description: string
}

interface Props { }

interface State {
  sliderSlave: Slider
}

export class Home extends Component<Props, State> {

  private sliderSlave: Slider

  constructor(props: Props) {
    super(props)

    this.state = {
      sliderSlave: null
    }
  }

  componentDidMount() {
    this.setState({
      sliderSlave: this.sliderSlave
    })
  }

  renderItem = (item: any, master: boolean) => {
    return <div key={ item.id }>
      <div className={ `slider-item` }>
        <img src={ images[item.id] }></img>
        { master ? null :
          <div className="slide-description">
            { item.description }
          </div>
        }
      </div>
    </div>
  }

  render() {
    return <header id="home">
      <Element name="home" >

        <div className="bg-img">
          <div className="overlay"></div>
        </div>

        <Navigation />

        <div className="home-wrapper">
          <div className="container">
            <div className="row">

              <div className="col-md-6">
                <div className="home-content">
                  <h1 className="white-text">Lunchbox Lambda</h1>
                  <div className="list-wrapper">
                    <span className="white-text">
                      A framework of DIY hardware, software and electronics
                      projects to promote the idea of growing plants for food,
                      indoors, in a software controlled environment.
                    </span>
                  </div>
                  <button className="white-btn" onClick={ () =>
                    window.open('https://github.com/lunchbox-lambda', '_blank')
                  }>
                    Check me on <i className="fa fa-lg fa-github"></i>
                  </button>
                  <button className="main-btn" onClick={ () =>
                    scroller.scrollTo('overview', { duration: 600, smooth: true })
                  }>Get Started!</button>
                </div>
              </div>

              <div className="col-md-6">
                <div className="sildeshow-holder">

                  <div className="silder-slave">
                    <Slider
                      ref={ sliderSlave => this.sliderSlave = sliderSlave }
                      slidesToShow={ 1 }
                      slidesToScroll={ 1 }
                      dots={ false }
                      arrows={ false }
                      fade={ true }
                      adaptiveHeight={ false }
                    >
                      { items.map(item => this.renderItem(item, false)) }
                    </Slider>
                  </div>

                  <div className="silder-master">
                    <Slider
                      asNavFor={ this.state.sliderSlave }
                      slidesToShow={ 4 }
                      slidesToScroll={ 1 }
                      dots={ true }
                      arrows={ true }
                      centerMode={ false }
                      infinite={ true }
                      autoplay={ true }
                      autoplaySpeed={ 5000 }
                      focusOnSelect={ true }
                    >
                      { items.map(item => this.renderItem(item, true)) }
                    </Slider>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

      </Element>
    </header>

  }

}
