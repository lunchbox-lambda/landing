import './style.scss'
import * as React from 'react'
import { Element } from 'react-scroll'
import * as ReactMarkdown from 'react-markdown'
import { Component } from 'components/common'

interface Props { }

interface State { }

const installInstructions = `
### 1) Install Docker on the Raspberry Pi
\`\`\`
curl -sSL get.docker.com | sh
\`\`\`

\`\`\`
sudo usermod -aG docker pi
\`\`\`

\`\`\`
sudo systemctl enable docker
\`\`\`

\`\`\`
sudo systemctl start docker
\`\`\`

\`\`\`
sudo pip install docker-compose
\`\`\`
`
export class Download extends Component<Props, State> {

  constructor(props: Props) {
    super(props)
  }

  componentDidMount() {
    this.handleSubscriptions([

    ])
  }

  render() {
    return <Element name="download" className="section md-padding">
      <div className="container">
        <div className="row">

          <div className="section-header text-center">
            <h2 className="title">Download</h2>
          </div>

          <div className="description-wrapper">
            <div className="install-instructions">
              <ReactMarkdown source={ installInstructions } />
            </div>
            <div className="download-instructions">
              <button className="main-btn">Download the brain</button>
              <div className="coming-soon">
                <div></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Element>
  }

}
