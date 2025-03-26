class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
}

class Node {
  constructor(value, nextNode) {
    this.value = value ? value : null;
    this.nextNode = nextNode ? nextNode : null;
  }
}
