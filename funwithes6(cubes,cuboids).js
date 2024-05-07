class Cuboid {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }
  get surfaceArea() {
    let SA =
      2 *
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height);
    return SA;
  }
  get volume() {
    let V = this.length * this.width * this.height;
    return V;
  }

  // TODO: Program Me
}
class Cube extends Cuboid {
  constructor(length) {
    super(length, length, length);
  }

  set(length) {
    this.length = length;
    this.width = length;
    this.height = length;
  }

  // Don't forget to make a call to super ;)
}
