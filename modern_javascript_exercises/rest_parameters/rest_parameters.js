// Instructions can be found in rest_parameters.md

// Add rest parameters here!
export function add(... nums) {
  // Add a loop here
  let total = 0
  for (const num of nums){
    total += num
  }
  return total
}

add(1, 2, 3, 4, 5);
