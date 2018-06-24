import './style.scss'
import app from 'lib/app'
import * as React from 'react'
import { Element } from 'react-scroll'
import Slider from 'react-slick'
import { Component } from 'components/common'
import { actions } from 'lib/redux'

const images = {
  radish: require('assets/cdn/33d30546-a559-4fc6-b527-b556556d52e0.jpg'),
  arugula: require('assets/cdn/a65736a6-d65c-474d-a541-2e22dd3d48e6.jpg'),
  chives: require('assets/cdn/f7ecc8d3-9fae-43ea-bea1-7b085cb600be.jpg'),
  red_cabbage: require('assets/cdn/81b6f67f-c8b4-4f02-8266-1c8261d6341f.jpg'),
  beets: require('assets/cdn/7c565f9a-63e5-44ad-8928-86a147a4097d.jpg'),
  mustard_greens: require('assets/cdn/05a54a47-267c-485c-aa47-ed50c51052d2.jpg')
}

const seeds = require('assets/seeds.json') as Seed[]

interface Seed {
  id: string
  name: string
  description: string
  available: boolean
}

interface Props { }

interface State {
  selectedId: string
}

export class Seeds extends Component<Props, State> {

  constructor(props: Props) {
    super(props)

    this.state = {
      selectedId: null
    }
  }

  componentDidMount() {
    this.handleSubscriptions([
      app.store.getSelectedSeed()
        .subscribe(value => this.setState(
          { selectedId: value }
        ))
    ])
  }

  onItemClick = (item: Seed) => {
    if (!item.available) return
    app.store.dispatch(
      actions.setSelectedSeed(item.id)
    )
  }

  renderItem = (item: Seed) => {
    const selected = this.state.selectedId === item.id

    return <div key={ item.id } onClick={ event => this.onItemClick(item) }>
      <div className={ `slider-item ${selected ? 'selected' : ''}` }>
        <div
          className="image"
          style={ { backgroundImage: `url(${images[item.id]})` } }
        >
          {
            item.available ? null :
              <div className="coming-soon">
                <div></div>
              </div>
          }
        </div>
        <div className="info">
          { item.name }
        </div>
      </div>
    </div>
  }

  render() {
    return <Element name="seeds" className="section md-padding">
      <div className="container">
        <div className="row">

          <div className="section-header text-center">
            <h2 className="title">Seeds</h2>
          </div>

          <div>
            <Slider
              dots={ true }
              infinite={ true }
              speed={ 500 }
              slidesToShow={ 5 }
              slidesToScroll={ 2 }
              arrows={ true }
            >
              { seeds.map(seed => this.renderItem(seed)) }
            </Slider>
          </div>

        </div>
      </div>
    </Element>
  }

}
