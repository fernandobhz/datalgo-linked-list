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
}

let myLinkedList = new LinkedList(10);
console.log(JSON.stringify(myLinkedList));

myLinkedList.append(5);
console.log(JSON.stringify(myLinkedList));

myLinkedList.append(16);
console.log(JSON.stringify(myLinkedList));

myLinkedList.prepend(1);
console.log(JSON.stringify(myLinkedList));





