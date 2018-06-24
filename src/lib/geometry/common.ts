import * as THREE from 'three'
// TODO: imports
import {
  Box3,
  Vector3,
  Geometry,
  BoxGeometry,
  MeshLambertMaterial,
  TextureLoader,
  Material,
  MeshBasicMaterial,
  MeshPhongMaterial
} from 'three'

export interface SheetSize {
  length: number
  width: number
}

export interface BoxSize {
  width: number
  height: number
  depth: number
}

export class Group extends THREE.Group {

  private box3: Box3 = null

  get size() {
    if (!this.box3)
      this.box3 = new Box3().setFromObject(this)

    let target = new Vector3()
    this.box3.getSize(target)

    return target
  }

}

class Sheet extends THREE.Mesh {

  constructor(
    public length: number,
    public width: number,
    public thickness: number,
    material: Material
  ) {
    super(new BoxGeometry(length, width, thickness), material)
  }

}

export class CartonSheet extends Sheet {

  private static thickness = 0.3

  private static material = new MeshPhongMaterial({
    color: 0x156289,
    emissive: 0x072534,
    side: THREE.DoubleSide,
    flatShading: true
  })

  constructor(length: number, width: number) {
    super(
      length, width, CartonSheet.thickness,
      CartonSheet.material
    )
  }

}


class Mesh extends THREE.Mesh {

  private box3: Box3 = null

  get size() {
    if (!this.box3)
      this.box3 = new Box3().setFromObject(this)

    let target = new Vector3()
    this.box3.getSize(target)

    return target
  }

}

export class AluminiumSheet extends Mesh {

  private static material = new MeshPhongMaterial({
    color: 0x156289,
    emissive: 0x072534,
    side: THREE.DoubleSide,
    flatShading: true
  })

  constructor(geometry: Geometry) {
    super(geometry, AluminiumSheet.material)
  }

}
