import * as THREE from 'three'
import { Group, Mesh, BoxGeometry } from 'three'
import { CartonSheet } from './common'
import { SheetSize } from 'lib/geometry/common'

export class BottomSide extends Group {

  constructor(private size: SheetSize) {
    super()
    this.create()
  }

  private create() {
    const { length, width } = this.size

    const panel = new CartonSheet(length, width)
    this.add(panel)

    const a = new CartonSheet(5, 5)
    a.translateZ(panel.thickness)
    this.add(a)
  }

}
