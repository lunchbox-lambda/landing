import './style.scss'
import app from 'lib/app'
import * as React from 'react'
import { Element } from 'react-scroll'
import { Component } from 'components/common'
import { Preview } from './preview'
import { BoxSize } from 'lib/geometry/common'
import { actions } from 'lib/redux'

interface Props { }

interface State {
  boxSize: BoxSize
}

export class Design extends Component<Props, State> {

  constructor(props: Props) {
    super(props)

    this.state = {
      boxSize: {
        width: 36,
        height: 24,
        depth: 23
      }
    }
  }

  componentDidMount() {
    this.handleSubscriptions([
      app.store.getSelectedBoxSize()
        .subscribe(boxSize => {
          // TODO: Find out update issue
          console.log(boxSize)
          this.setState({ boxSize })
        })
    ])
  }

  onChange(target: string, event: React.ChangeEvent<HTMLInputElement>) {
    const { boxSize } = this.state
    boxSize[target] = Number.parseInt(event.target.value)
    app.store.dispatch(
      actions.setSelectedBoxSize(boxSize)
    )
  }

  render() {
    return <Element name="design" className="section md-padding">
      <div className="container">
        <div className="row">

          <div className="section-header text-center">
            <h2 className="title">Design</h2>
          </div>

          <div style={ { display: 'flex' } }>

            <div style={ { border: '1px solid lightgray', flex: '1 0 0' } }>
              <Preview boxSize={ this.state.boxSize } />
            </div>

            <div style={ { flex: '1 0 0' } }>
              <div style={ { padding: '50px 100px', height: '350px' } }>

                <label>Box Width</label>
                <input
                  type="range" min="10" max="50"
                  defaultValue={ '' + this.state.boxSize.width }
                  onChange={ event => this.onChange('width', event) }
                ></input>

                <label>Box Height</label>
                <input
                  type="range" min="10" max="50"
                  defaultValue={ '' + this.state.boxSize.height }
                  onChange={ event => this.onChange('height', event) }
                ></input>

                <label>Box Depth</label>
                <input
                  type="range" min="10" max="50"
                  defaultValue={ '' + this.state.boxSize.depth }
                  onChange={ event => this.onChange('depth', event) }
                ></input>

              </div>
            </div>

          </div>

        </div>
      </div>
    </Element>
  }

}
