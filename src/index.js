module.exports = function solveEquation(equation) {
  // your implementation

  const arrayOfNumbers = equation.match(/[0-9]+/g);
  const arrayOfSigns = equation.match(/[+-]+/g);
  arrayOfNumbers.splice(1, 1);

  if (arrayOfSigns.length === 3) {
    var squareDegree = Number(arrayOfSigns[0] + arrayOfNumbers[0]);
    var firstDegree = Number(arrayOfSigns[1] + arrayOfNumbers[1]);
    var freeСoefficient = Number(arrayOfSigns[2] + arrayOfNumbers[2]);
  } else {
    var squareDegree = Number(arrayOfNumbers[0]);
    var firstDegree = Number(arrayOfSigns[0] + arrayOfNumbers[1]);
    var freeСoefficient = Number(arrayOfSigns[1] + arrayOfNumbers[2]);
  }

  const descriminant = firstDegree * firstDegree - (4 * squareDegree * freeСoefficient);

  const firstRoot = Math.round( (-firstDegree + Math.sqrt(descriminant)) / (2 * squareDegree));
  const secondRoot = Math.round( (-firstDegree - Math.sqrt(descriminant)) / (2 * squareDegree));
  const result = [firstRoot, secondRoot];

  return result.sort((a, b) => a - b);d
}
