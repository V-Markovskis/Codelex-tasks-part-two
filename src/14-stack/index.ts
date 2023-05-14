/**
 * Stack
 *
 * Create a stack data structure. The stack
 * should be a class with methods 'push', 'pop', and
 * 'peek'.  Adding an element to the stack should
 * store it until it is removed.
 *
 * Examples:
 * const s = new Stack();
 * s.push(1);
 * s.push(2);
 * s.pop(); // returns 2
 * s.pop(); // returns 1
 */

class Stack {
  stack: number[] = [];
  push(n: number) {
    //add new element to the end of the array
    this.stack.push(n);
  }

  pop() {
    //removes last element from the array
    return this.stack.pop();
  }

  peek() {
    //return last element from the array
    return this.stack[this.stack.length -1];
  }
}

export { Stack };
