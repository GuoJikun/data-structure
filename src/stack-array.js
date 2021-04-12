export default class Stack {
  constructor() {
    this.resp = [];
    this.size = 0;
  }
  pop() {
    if (this.size > 0) {
      --this.size;
    }
    return this.resp.pop();
  }
  push() {
    this.resp.push();
    ++this.size;
  }
  size() {
    return this.size;
  }

  empty() {
    return this.size === 0;
  }

  peek() {
    if (this.empty()) {
      return undefined;
    }
    return this.resp[this.size];
  }

  clear() {
    this.size = 0;
    this.resp = [];
  }
}
