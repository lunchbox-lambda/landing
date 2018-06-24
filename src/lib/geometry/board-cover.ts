import { Group, CartonSheet } from './common'

export class BoardCover extends Group {

  private static baseLength = 1 + 5 + 1 + 5 + 1
  private static baseHeight = 1 + 8 + 1
  private static baseDepth = 2.5
  private static flapWidth = 2

  constructor() {
    super()
    this.create()
  }

  private create() {

    const length = BoardCover.baseLength
    const height = BoardCover.baseHeight
    const depth = BoardCover.baseDepth
    const flap = BoardCover.flapWidth

    const backSide = new CartonSheet(length, height)
    this.add(backSide)

    // Top side
    const topSide = new CartonSheet(length, depth)
    topSide.rotateX(Math.PI / 2)
    topSide.translateY(-(topSide.width / 2))
    topSide.translateZ(-(backSide.width / 2))
    this.add(topSide)

    // Right side

    const rightSide = new CartonSheet(depth, height)
    rightSide.rotateY(Math.PI / 2)
    rightSide.translateZ(backSide.length / 2)
    rightSide.translateX(rightSide.length / 2)
    this.add(rightSide)

    const rightFlap = new CartonSheet(flap, height)
    rightFlap.translateZ(-rightSide.length)
    rightFlap.translateX(backSide.length / 2 + rightFlap.length / 2)
    this.add(rightFlap)

    const rightPin = new CartonSheet(depth, depth)
    rightPin.rotateX(Math.PI / 2)
    rightPin.translateX(backSide.length / 2 - rightPin.length / 2)
    rightPin.translateY(-(rightPin.width / 2))
    rightPin.translateZ(-(backSide.width / 2 - rightPin.thickness / 2))
    this.add(rightPin)

    // Left side

    const leftSide = new CartonSheet(depth, height)
    leftSide.rotateY(Math.PI / 2)
    leftSide.translateZ(-(backSide.length / 2))
    leftSide.translateX(rightSide.length / 2)
    this.add(leftSide)

    const leftFlap = new CartonSheet(flap, height)
    leftFlap.translateZ(-rightSide.length)
    leftFlap.translateX(-(backSide.length / 2 + leftFlap.length / 2))
    this.add(leftFlap)

    const leftPin = new CartonSheet(depth, depth)
    leftPin.rotateX(Math.PI / 2)
    leftPin.translateX(-(backSide.length / 2 - leftPin.length / 2))
    leftPin.translateY(-(leftPin.width / 2))
    leftPin.translateZ(-(backSide.width / 2 - leftPin.thickness / 2))
    this.add(leftPin)

  }

}
