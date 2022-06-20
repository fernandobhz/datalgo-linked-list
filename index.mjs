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
    const next = {
      value,
      next: null
    }

    this.tail.next = next;
    this.tail = next;
    this.length++;
  }
}

let myLinkedList = new LinkedList(10);
console.log(JSON.stringify(myLinkedList));

myLinkedList.append(5);
console.log(JSON.stringify(myLinkedList));

myLinkedList.append(16);
console.log(JSON.stringify(myLinkedList));



