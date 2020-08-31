export default class Type {
  constructor(name) {
    this.name = name
    this.enabled = true
  }

  valueOf() {
    return this.name
  }
}
