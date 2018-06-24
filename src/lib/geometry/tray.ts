import { PlaneGeometry, CylinderGeometry } from 'three'
import { Group, AluminiumSheet, BoxSize } from './common'

export class Tray extends Group {

  private static baseWidth = 14.5
  private static baseLength = 19.5
  private static baseHeight = 3.5
  private static edgeWidth = 0.5

  private static bottomCornerRadius = 1.5

  constructor(private targetSize: BoxSize) {
    super()
    this.create()
  }

  private create() {
    // const { width, height, depth } = this.targetSize

    const length = Tray.baseLength
    const height = Tray.baseHeight
    const width = Tray.baseWidth
    const edge = Tray.edgeWidth

    const backSide = new AluminiumSheet(
      new PlaneGeometry(length, width)
    )
    backSide.rotateX(Math.PI / 2)
    this.add(backSide)



    const aa = new AluminiumSheet(
      new CylinderGeometry(6, 5, height, 32, 1, true, 0, Math.PI / 2)
    )
    aa.translateY(height / 2)
    this.add(aa)

  }

}
