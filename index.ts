export function doWork() {
  // Simulate doing some other work: multiply numbers from 1 to 5
  let result = 1;
  for (let i = 1; i <= 5; i++) {
    result *= i;
  }
  return `Other work done! Product: ${result}`;
}