/**
 * Queue
 *
 * Create a queue data structure. The queue
 * should be a class with methods 'add' and 'remove'.
 * Adding to the queue should store an element until
 * it is removed.
 *
 * Examples:
 * const q = new Queue();
 * q.add(1);
 * q.remove(); // returns 1
 */

class Queue {
  //const, var, let classes nerakstam
  items: number[] = [];
  frontIndex: number = 0;
  backIndex: number = 0
  add(n: number) {
    this.items[this.backIndex] = n;
    this.backIndex++;
  }

  remove() {
    const item = this.items[this.frontIndex];
    delete this.items[this.frontIndex];
    this.frontIndex++;
    return item;
  }
}

export { Queue };
