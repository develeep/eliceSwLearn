function isTriangle(a, b, c) {
  const semiperimeter = (a+b+c)/2;
  const area = Math.sqrt(semiperimeter * (semiperimeter - a) * (semiperimeter - b) * (semiperimeter - c));
  if(Number.isNaN(area)) return false;
  return area > 0;
}

console.log(isTriangle(2, 4, 6)); //false

module.exports = { isTriangle };
