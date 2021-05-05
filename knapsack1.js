let solveKnapsack = function(profits, weights, capacity) {
	  const n = profits.length;
	  // if we get no values for capacity or profits or weights, return 0
	  if (capacity <= 0 || n == 0 || weights.length != n) return 0;
	
	  const dp = Array(capacity + 1).fill(0);
	
	  // create new array with the length of the capacity
	  // if we have only one weight, we will take it if itis not more than the capacity
	  for (let c = 0; c <= capacity; c++) {
		if (weights[0] <= c) dp[c] = profits[0]; // we'll create in our dp array at the iteration that we're at, the profit of the first iteration, the value of the first array in the profits.  These are solving for edge cases.
	  }
	
	  // process all sub-arrays for all the capacities 
	  // looping through those capacities and assigning hte most you can get with each capacity through the array
	  for (let i = 1; i < n; i++) { // iterating up till n (n is length of profit array)
		for (let c = capacity; c >= 0; c--) { // also iterating downward
		  let profit1 = 0, // create variables
			profit2 = 0;
		  // include the item, if it is not more than the capacity
		  if (weights[i] <= c) profit1 = profits[i] + dp[c - weights[i]];
		                       //         3           dp[1]
							   //         
		  // exclude the item
		  profit2 = dp[c];// assigned to profit2
		  // take maximum
		  dp[c] = Math.max(profit1, profit2); // with variable scope we have to use. max of the 2 variables
		}
	  }
	
	  // maximum profit will be at the bottom-right corner. // return max profit 
	  return dp[capacity];
	};
	
	var profits = [1, 6, 10, 16];
	var weights = [1, 2, 3, 5];
	console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 7)}`);
	console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 6)}`);
	
	
	
	
