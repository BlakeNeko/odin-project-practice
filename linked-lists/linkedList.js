class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.nextNode = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.nextNode = this.head;
      this.head = newNode;
    }
    this.size++;
  }

  at(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }

    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }

  pop() {
    if (this.size === 0) {
      return null;
    }

    if (this.size === 1) {
      const removedNode = this.head;
      this.head = null;
      this.tail = null;
      this.size--;
      return removedNode;
    }

    let currentNode = this.head;
    while (currentNode.nextNode !== this.tail) {
      currentNode = currentNode.nextNode;
    }
    const removedNode = this.tail;
    currentNode.nextNode = null;
    this.tail = currentNode;
    this.size--;
    return removedNode;
  }

  contains(value) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      } else {
        currentNode = currentNode.nextNode;
      }
    }
    return false;
  }

  find(value) {
    let currentNode = this.head;
    let index = 0;

    while (currentNode) {
      if (currentNode.value === value) {
        return index;
      } else {
        currentNode = currentNode.nextNode;
        index++;
      }
    }
    return null;
  }

  toString() {
    let result = ``;
    let currentNode = this.head;

    while (currentNode) {
      result += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.nextNode;
    }
    result += `null`;
    return result;
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

export default LinkedList;
