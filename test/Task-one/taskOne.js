/* <--- QUESTION ---> */

/* A math teacher gives his students the following problem:
Solve the following three tasks and create three more in the same
style:
364 * 2475 = x
308 * 2925 = x
165 * 5460 = x
The students quickly realize that the factor is always 900900.
The lazy teacher doesn’t want to calculate every single equation the students have come up with.
Therefore, he prefers a list of all possible products of two factors that add up to 900900, in ascending
order by the first factor, where the first factor should always be smaller than the second factor.
900900 = 1 * 900900
= 2 * 450450
= 3 * 300300
…
Write a program that outputs such a list so that the lazy teacher can quickly check the correct results */


/* <--- ANSWER ---> */

function findNumber(n) {
  // Initialize result list
  let result = [];
  // Loop through the numbers from 1 to the square root of the input integer
  for (let i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
    // Check if the number is a factor of the input integer
    if (n % i === 0) {
      // Calculate the two factors of the input integer
      let factor1 = i;
      let factor2 = n / i;
      if (factor1 < factor2) {
        result.push([factor1, factor2]);
      }
    }
  }
  return result;
}

function targetNumber(n) {
  // Find all possible pairs that can product the target number
  let finalResult = findNumber(n);

  // Log the pair result
  finalResult.forEach(function (pair) {
    console.log(pair[0] + " * " + pair[1] + " = " + n);
  });
}
