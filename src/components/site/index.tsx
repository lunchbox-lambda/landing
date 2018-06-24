import './style.scss'
import * as React from 'react'
import { Component } from 'components/common'

import { Home } from 'components/home'
import { Overview } from 'components/overview'
import { Seeds } from 'components/seeds'
import { Parallax } from 'components/parallax'
import { Models } from 'components/models'
import { Design } from 'components/design'
import { Download } from 'components/download'

import { BackToTop } from './back-to-top'
import { Preloader } from './preloader'
import { Footer } from './footer'

interface Props { }

interface State { }

export class Site extends Component<Props, State> {

  constructor(props: Props) {
    super(props)
  }

  componentDidMount() {

  }

  render() {
    return <div>

      <Home />
      <Overview />

      <Parallax
        title="Step 1: Choose the plant you want to grow"
        background="5b56a629-6a94-4cdf-a283-8afa37d23d8a.jpg"
      />

      <Seeds />

      <Parallax
        title="Step 2: Select the model you want to build"
        background="7b758bed-b736-4b07-833e-792081253fed.jpg"
      />

      <Models />

      <Parallax
        title="Step 3: Design the box"
        background="measure-size-ss-1920-800x450.jpg"
      />

      <Design />

      <Parallax
        title="Step 4: Download the software"
        background="4192.jpg"
      />

      <Download />

      <Footer />

      <BackToTop />
      <Preloader />

    </div>
  }

}
