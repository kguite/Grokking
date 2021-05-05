const Heap = require('./collections/heap'); //http://www.collectionsjs.com

class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function merge_lists(lists) {
  const minHeap = new Heap([], null, ((a, b) => b.value - a.value));

  // put the root of each list in the min heap
  lists.forEach((a) => {
    if (a !== null) {
      minHeap.push(a);
    }
  });

  // take the smallest(top) element form the min-heap and add it to the result
  // if the top element has a next element add it to the heap

  // resulthead and result tail, condition, while we still have elements in our minheap... 
  // minheap.pop is the end of the collection value in the minheap
  // if result head which is what we intialized to null = null, then it's running on the first iteration
  // then equal our result tal
  // also equal our node

  let resultHead = null,
    resultTail = null;
  while (minHeap.length > 0) {
      // node is one we created 
    const node = minHeap.pop();
    // if result head is not equal to null, we initialize it to null
    if (resultHead === null) {
    // we want to change resultHead from NULL to resultTail then change resultTail to node, which is the value of the minheap
    // assigning the value from head to tail to node 
      resultHead = resultTail = node; // resultHead = resultTail = node;
      
    } else {
      resultTail.next = node;
      resultTail = resultTail.next;
    }
    if (node.next !== null) {
      minHeap.push(node.next);
    }
  }

  return resultHead;
}

const l1 = new ListNode(2);
l1.next = new ListNode(6);
l1.next.next = new ListNode(8);

const l2 = new ListNode(3);
l2.next = new ListNode(6);
l2.next.next = new ListNode(7);

const l3 = new ListNode(1);
l3.next = new ListNode(3);
l3.next.next = new ListNode(4);

let result = merge_lists([l1, l2, l3]);
process.stdout.write('Here are the elements form the merged list: ');
while (result !== null) {
  process.stdout.write(`${result.value} `);
  result = result.next;
}