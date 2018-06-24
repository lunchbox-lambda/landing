import './style.scss'
import * as React from 'react'
import { Element } from 'react-scroll'
import Slider from 'react-slick'
import { Component } from 'components/common'
import { Navigation } from './navigation'

const images = {
  a11111111: require('assets/cdn/33d30546-a559-4fc6-b527-b556556d52e0.jpg'),
  b22222222: require('assets/cdn/a65736a6-d65c-474d-a541-2e22dd3d48e6.jpg'),
  c333333333: require('assets/cdn/f7ecc8d3-9fae-43ea-bea1-7b085cb600be.jpg'),
  d444444444: require('assets/cdn/81b6f67f-c8b4-4f02-8266-1c8261d6341f.jpg'),
  e555555555: require('assets/cdn/7c565f9a-63e5-44ad-8928-86a147a4097d.jpg'),
  f666666666666: require('assets/cdn/05a54a47-267c-485c-aa47-ed50c51052d2.jpg')
}

const items = [
  {
    id: 'a11111111',
    description: '11111111'
  },
  {
    id: 'b22222222',
    description: '22222222'
  },
  {
    id: 'c333333333',
    description: '333333333'
  },
  {
    id: 'd444444444',
    description: '444444444'
  },
  {
    id: 'e555555555',
    description: '555555555'
  },
  {
    id: 'f666666666666',
    description: '666666666666'
  }
]

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

  renderItem = (item: any) => {
    return <div key={ item.id }>
      <div className={ `slider-item` }>
        <div
          className="image"
          style={ { backgroundImage: `url(${images[item.id]})` } }
        >
        </div>
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
                    <ul className="white-text">
                      <li>Grow your own food and harvest all around the year</li>
                      <li>Furnish your apartement with a unique modern design</li>
                      <li>Make a fun weekend DIY project with your kids</li>
                    </ul>
                  </div>
                  <button className="white-btn">Get Started!</button>
                  <button className="main-btn">Learn more</button>
                </div>
              </div>

              <div className="col-md-6">

                <div>

                  <div className="silder-slave">
                    <Slider
                      ref={ sliderSlave => this.sliderSlave = sliderSlave }
                      slidesToShow={ 1 }
                      slidesToScroll={ 1 }
                      dots={ false }
                      arrows={ false }
                      fade={ true }
                    >
                      { items.map(item => this.renderItem(item)) }
                    </Slider>
                  </div>

                  <div className="silder-master">
                    <Slider
                      asNavFor={ this.state.sliderSlave }
                      slidesToShow={ 3 }
                      slidesToScroll={ 1 }
                      dots={ true }
                      arrows={ true }
                      centerMode={ true }
                      infinite={ true }
                      autoplay={ true }
                    >
                      { items.map(item => this.renderItem(item)) }
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
