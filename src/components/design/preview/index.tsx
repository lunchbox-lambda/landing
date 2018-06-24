import './style.scss'
import * as React from 'react'
import { Component } from 'components/common'
import { BoxSize } from 'lib/geometry/common'
import { Scene, Camera, WebGLRenderer, Light, OrbitControls } from 'three'
import { PerspectiveCamera, PointLight } from 'three'
import { Box } from 'lib/geometry/box'

import * as THREE from 'three'
(window as any).THREE = THREE
import 'three/examples/js/controls/OrbitControls.js'

import { Tray } from 'lib/geometry/tray'

interface Props {
  boxSize: BoxSize
}

interface State { }

export class Preview extends Component<Props, State> {

  private node: HTMLElement
  private scene: Scene
  private camera: Camera
  private controls: OrbitControls
  private renderer: WebGLRenderer
  private lights: Array<Light>

  // private rotationOffsetY = 0

  private obj: any

  constructor(props: Props) {
    super(props)
    this.animate = this.animate.bind(this)
  }

  componentDidMount() {
    this.initRenderer()
    this.initCamera()
    this.initControls()
    this.initScene()
    this.animate()
  }

  componentDidUpdate() {
    this.initScene()
  }

  animate() {
    requestAnimationFrame(this.animate)
    this.controls.update();
    this.renderer.render(this.scene, this.camera)
  }

  initRenderer() {
    this.renderer = new WebGLRenderer({ antialias: true })
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.setSize(this.width, this.height)
    this.renderer.setClearColor(0xffffff, 1)
    this.node.appendChild(this.renderer.domElement)
  }

  initCamera() {
    this.camera = new PerspectiveCamera(50, this.width / this.height, 1, 100)
    this.camera.position.set(0, 0, 60)
  }

  initControls() {
    // TODO: Add controls.autoRotate are set to true
    this.controls = new OrbitControls(this.camera, this.node)
  }

  initScene() {
    this.scene = new Scene()

    this.lights = []
    this.lights[0] = new PointLight(0xffffff, 1, 0)
    this.lights[1] = new PointLight(0xffffff, 1, 0)
    this.lights[2] = new PointLight(0xffffff, 1, 0)

    this.lights[0].position.set(0, 100, 0)
    this.lights[1].position.set(100, 100, 100)
    this.lights[2].position.set(- 100, - 100, - 100)

    this.scene.add(this.lights[0])
    this.scene.add(this.lights[1])
    this.scene.add(this.lights[2])

    const { boxSize } = this.props
    this.obj = new Box(boxSize)

    // this.obj = new Tray(boxSize)

    this.scene.add(this.obj)
  }

  get width() { return this.node.offsetWidth }

  get height() { return this.node.offsetHeight }

  render() {
    return <div className="preview" ref={ node => this.node = node }></div>
  }

}
