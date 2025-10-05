export function doWork() {
  // Simulate doing some work
  let result = 0;
  for (let i = 1; i <= 10; i++) {
    result += i;
  }
  return `Work done! Result: ${result}`;
}