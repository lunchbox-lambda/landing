import './style.scss'
import app from 'lib/app'
import * as React from 'react'
import { Element } from 'react-scroll'
import Slider from 'react-slick'
import * as ReactMarkdown from 'react-markdown'
import { Component } from 'components/common'
import { actions } from 'lib/redux'

const models = require('assets/models.json') as Model[]

interface Model {
  id: string
  name: string
  description: string
  available: boolean
  bullets: string[]
}

interface Props { }

interface State {
  selectedId: string
}

export class Models extends Component<Props, State> {

  constructor(props: Props) {
    super(props)

    this.state = {
      selectedId: null
    }
  }

  componentDidMount() {
    this.handleSubscriptions([
      app.store.getSelectedModel()
        .subscribe(value => this.setState(
          { selectedId: value }
        ))
    ])
  }

  onItemClick = (item: Model) => {
    if (!item.available) return
    app.store.dispatch(
      actions.setSelectedModel(item.id)
    )
  }

  renderBullets = (bullets: string[]) => {
    return <ul>
      { bullets.map(bullet => <li key={ bullet }>
        { bullet }
      </li>) }
    </ul>
  }

  renderItem = (item: Model) => {
    const selected = this.state.selectedId === item.id

    return <div key={ item.id } onClick={ event => this.onItemClick(item) }>
      <div className={ `slider-item ${selected ? 'selected' : ''}` }>

        <div className="name">
          <h3>
            <span className="main-color">Lunch</span>
            { 'box ' + item.name.split(' ')[1] }
          </h3>
        </div>
        <div className="description">
          <ReactMarkdown source={ item.description } />
        </div>
        <div className="bullets">
          { this.renderBullets(item.bullets) }
        </div>
        {
          item.available ? null :
            <div className="coming-soon">
              <div></div>
            </div>
        }
      </div>

    </div>
  }

  render() {
    return <Element name="models" className="section md-padding">
      <div className="container">
        <div className="row">

          <div className="section-header text-center">
            <h2 className="title">Models</h2>
          </div>

          <div>
            <Slider
              dots={ false }
              infinite={ true }
              slidesToShow={ 3 }
              slidesToScroll={ 1 }
              arrows={ false }
            >
              { models.map(model => this.renderItem(model)) }
            </Slider>
          </div>

        </div>
      </div>
    </Element>
  }

}
