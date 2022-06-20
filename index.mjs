class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newTail = {
      value,
      next: null
    }

    this.tail.next = newTail;
    this.tail = newTail;
    this.length++;
  }
  prepend(value) {
    const newHead = {
      value,
      next: this.head
    }

    this.head = newHead;
    this.length++;
  }
  insert(index, value) {
    if (index < 1) {
      return this.prepend(value);
    }

    if (index >= this.length) {
      return this.append(value);
    }
        
    let currentIndex = 0;
    let previousNode = this.head;
    let currentNode = this.head.next;

    while(currentIndex < index - 1) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      currentIndex++;
    }

    const newNode = {
      value,
      next: currentNode
    }

    previousNode.next = newNode;
  }
  printList(label = 0) {
    const array = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    console.log(label, array.join(' > '));
  }
}
// 1 > 10 > 5 > 16
// 1 > 10 > 99 > 5 > 16

let myLinkedList = new LinkedList(10);
myLinkedList.printList(1);

myLinkedList.append(5);
myLinkedList.printList(2);

myLinkedList.append(16);
myLinkedList.printList(3);

myLinkedList.prepend(1);
myLinkedList.printList(4);

myLinkedList.append(99);
myLinkedList.printList(5);

myLinkedList.insert(2, 99);
myLinkedList.printList(6);
