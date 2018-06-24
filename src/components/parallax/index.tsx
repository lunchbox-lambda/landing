import './style.scss'
import * as React from 'react'

interface Props {
  background: string
  title?: string
}

interface State {
  background: string
}

export class Parallax extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)

    this.state = {
      background: require(`assets/cdn/${props.background}`)
    }
  }

  render() {
    const { title } = this.props
    const { background } = this.state

    return <div className="parallax md-padding">

      <div className="bg-img" style={ {
        backgroundImage: `url(${background})`
      } }>
        <div className="overlay"></div>
      </div>

      <div className="container">

        <div className="row">
          {
            !title ? null :
              <h3 className="white-text" >{ title }</h3>
          }
        </div>

      </div>

    </div>
  }

}
