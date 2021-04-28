const Heap = require('./collections/heap'); //http://www.collectionsjs.com


const find_Kth_smallest_number = function(nums, k) {
    // TODO: Write your code here
    return -1;
  };
  
  
  console.log(`Kth smallest number is: ${find_Kth_smallest_number([1, 5, 12, 2, 11, 5], 3)}`)
  // since there are two 5s in the input array, our 3rd and 4th smallest numbers should be a '5'
  console.log(`Kth smallest number is: ${find_Kth_smallest_number([1, 5, 12, 2, 11, 5], 4)}`)
  console.log(`Kth smallest number is: ${find_Kth_smallest_number([5, 12, 11, -1, 12], 3)}`)
  



///// follow along:
// we want the third largest of the smallest
// goign to iterate every 3


  function find_k_smallest_numbers(nums, k) {
    const mmaxHeap = new Heap();
    // put first 'K' numbers in the max heap
    for (let i = 0; i < k; i++) {
      maxHeap.push(nums[i]);
    }
  
    // go through the remaining numbers of the array, if the number from the array is bigger than the
    // top(i.e., smallest) number of the min-heap, remove the top number from heap and add the number from array
    for (let i = k; i < nums.length; i++) {
      if (nums[i] > maxHeap.peek()) {
        maxHeap.pop();
        maxHeap.push(nums[i]);
      }
    }
  
    // the heap has the top 'K' numbers, return them in a list
    return minHeap.toArray();
  }
  
  5
  / \
  3  1
  
  console.log(` Kth smallest number is: ${find_kth_smallest_numbers([3, 1, 5, 12, 2, 11], 3)}`);

  