import * as THREE from 'three'
import { Group } from 'three'

import { TopSide } from './top-side'
import { BottomSide } from './bottom-side'
import { RightSide } from './right-side'
import { LeftSide } from './left-side'
import { FrontSide } from './front-side'
import { BackSide } from './back-side'

import { BoxSize } from 'lib/geometry/common'

export class Box extends Group {

  constructor(private targetSize: BoxSize) {
    super()
    this.create()
  }

  private create() {
    const { width, height, depth } = this.targetSize

    const p = 2

    const topSide = new TopSide({ length: width, width: depth })
    topSide.rotateX(Math.PI / 2)
    topSide.translateZ(-(height / 2 + p))
    this.add(topSide)

    const bottomSide = new BottomSide({ length: width, width: depth })
    bottomSide.rotateX(-Math.PI / 2)
    bottomSide.translateZ(-(height / 2 + p))
    this.add(bottomSide)

    const rightSide = new RightSide({ length: depth, width: height })
    rightSide.rotateY(-Math.PI / 2)
    rightSide.translateZ(-(width / 2 + p))
    this.add(rightSide)

    const leftSide = new LeftSide({ length: depth, width: height })
    leftSide.rotateY(Math.PI / 2)
    leftSide.translateZ(-(width / 2 + p))
    this.add(leftSide)

    const frontSide = new FrontSide({ length: width, width: height })
    frontSide.rotateY(-Math.PI)
    frontSide.translateZ(-(depth / 2 + p))
    this.add(frontSide)

    const backSide = new BackSide({ length: width, width: height })
    backSide.translateZ(-(depth / 2 + p))
    this.add(backSide)
  }

}
