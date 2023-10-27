// <--- QUESTION --->

/* Alice owns 4 rings: one agate ring, two identical diamond rings and one citrine ring.
Every time Alice leaves the house she wears a different combination of her rings, with the following
constraints:
- She never wears rings on her thumbs.
- She always wears at least one ring.
- She always wears at least one ring on her right ring finger.
- She wears a maximum of two rings on one finger.
- Since the diamond rings look identical, they are interchangeable.
- She can wear the rings on one or both hands.

Write a program that tells Alice 365 possible combinations (and the number of total combinations) so
that she can wear a different combination every day of the year. */

// <--- ANSWER --->

const ringTypes = ["agate", "diamond", "diamond", "citrine"];
const fingers = ["index", "middle", "ring", "little"];
const result = [];

function isUnique(combine) {
  // Iterate through each existing combination in result
  for (const existing of result) {
    if (combine.every((ring, index) => ring === existing[index])) {
      return false;
    }
  }
  // If the current combination is unique, return true
  return true;
}

function getCombine(ringTypes, combine = [], fingerIndex = 0) {
  // Check if combination has 4 rings
  if (combine.length === 4) {
    // Check if combination is unique
    if (isUnique(combine)) {
      result.push([...combine]);
    }
    return;
  }
  // Check if all fingers are included
  if (fingerIndex >= 4) {
    return;
  }
  
  // Add ring to combination
  getCombine(
    ringTypes,
    [...combine, ringTypes[fingerIndex]],
    fingerIndex + 1
  );
  getCombine(ringTypes, [...combine], fingerIndex + 1);
}

getCombine(ringTypes);

console.log(`Alice has ${result.length} possible ring combinations for the year:`);
result.forEach((combine, index) => {
  const totalCombine = combine.map(
    (ring, fingerIndex) => `${ring} on ${fingers[fingerIndex]}`
  );
  console.log(`Day ${index + 1}: ${totalCombine.join(", ")}`);
});

