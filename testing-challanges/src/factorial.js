export function factorial(n) {
  if (n < 0) throw new Error("Negative numbers are not allowed");
  let result = 1;
  for (let index = 2; index <= n; index++) {
    result *= index;
  }
  return result;
}
