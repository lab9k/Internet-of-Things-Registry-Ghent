export default class Category {
  constructor(name) {
    this.name = name
    this.enabled = true
    this.visible = true
    this.types = []
    this.iconSize = [25, 25]
    this.popupAnchor = [0, -10]
  }
}
