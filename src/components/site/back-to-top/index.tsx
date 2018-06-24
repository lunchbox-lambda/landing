import './style.scss'
import * as React from 'react'
import { animateScroll } from 'react-scroll'

interface Props { }

interface State {
  show: boolean
}

export class BackToTop extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)

    this.state = {
      show: false
    }

    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll(event) {
    const { show } = this.state
    const shouldShow = event.pageY > 700

    if (show !== shouldShow)
      this.setState({ show: shouldShow })
  }

  render() {
    return <div
      id="back-to-top"
      style={ { opacity: this.state.show ? 1 : 0 } }
      onClick={ () => animateScroll.scrollToTop({
        duration: 600
      }) }>
    </div>
  }

}
