function createNode(data = null, next = null, prev = null) {
  return {
    data,
    next,
    prev
  };
}

export default class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  insert(position, data) {
    let pos = position;
    const newNode = createNode(data);
    if (!this.first) {
      return;
    }
    let node = this.first;
    while (node.prev && pos) {
      node = node.prev;
      pos--;
    }
    newNode.next = node;
    newNode.prev = node.prev;
    node.prev = newNode;
    newNode.prev.next = newNode;
  }

  enqueue(data) {
    const node = createNode(data);

    if (this.last) {
      node.next = this.last;
      this.last.prev = node;
    }

    this.last = node;

    if (this.first === null) {
      this.first = node;
    }
  }

  dequeue() {
    if (this.first === null) {
      return;
    }

    const node = this.first;
    this.first = node.prev;

    if (node === this.last) {
      this.last = null;
    }

    if (this.first) {
      this.first.next = null;
    }

    return node.data;
  }
}
