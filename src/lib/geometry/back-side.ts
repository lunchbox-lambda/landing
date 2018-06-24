import * as THREE from 'three'
import { Group, Mesh, BoxGeometry } from 'three'
import { CartonSheet } from './common'
import { SheetSize } from 'lib/geometry/common'
import { BoardCover } from 'lib/geometry/board-cover'

export class BackSide extends Group {

  constructor(private size: SheetSize) {
    super()
    this.create()
  }

  private create() {
    const { length, width } = this.size

    const panel = new CartonSheet(length, width)
    this.add(panel)

    const boardCover = new BoardCover()
    boardCover.rotateY(Math.PI)
    boardCover.translateZ(boardCover.size.z)
    this.add(boardCover)
  }

}
