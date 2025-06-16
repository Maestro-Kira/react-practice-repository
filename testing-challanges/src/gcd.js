export function gcd(a, b) {
  if (a < 0 || b < 0) throw new Error("No negative numbers allowed");

  let factorsA = [1];
  let factorsB = [1];
  for (let index = 2; index <= a; index++) {
    if (a % index === 0) {
      factorsA.push(index);
    }
  }

  for (let index = 2; index <= b; index++) {
    if (b % index === 0) {
      factorsB.push(index);
    }
  }

  const commonFactors = factorsA.filter((number) => {
    return factorsB.includes(number);
  });

  return Math.max.apply(null, commonFactors);
}
