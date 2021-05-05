//Completed algorithm:

const Heap = require('./collections/heap'); //http://www.collectionsjs.com

// initialization is null, then sorting it
function minimum_cost_to_connect_ropes(ropeLengths) {
  // add all ropes to the min heap
  const minHeap = new Heap(ropeLengths, null, ((a, b) => b - a));

  // go through the values of the heap, in each step take top (i.e., lowest) rope lengths from the min heap
  // connect them and push the result back to the min heap.
  // keep doing this until the heap is left with only one rope

  // going through a loop to determine the...
  //pop removes from end of array plus minHeap.pop
  //add that to the result

  //pushing the addition back into the minheap because took out values we added.

  // while we still have values in our minHeap, we're pushing it back so while it still falls under our while loop
  // the result itself will store our answer, but we could store back into our minHeap the cost of each, so we can add them all together.
  // the last iteration of our loop is the addition of the 4 + 9 = 13 + 20
  let result = 0;
  while (minHeap.length > 1) {
    const temp = minHeap.pop() + minHeap.pop();
    result += temp;
    minHeap.push(temp);
  }

  return result;
}

console.log(`Minimum cost to connect ropes: ${minimum_cost_to_connect_ropes([1, 3, 11, 5])}`);
console.log(`Minimum cost to connect ropes: ${minimum_cost_to_connect_ropes([3, 4, 5, 6])}`);
console.log(`Minimum cost to connect ropes: ${minimum_cost_to_connect_ropes([1, 3, 11, 5, 2])}`);



  