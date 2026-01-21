export default function fibonacci(n: number): number {
  if (n < 0) {
    return -1;
  } else if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }

  const a = fibonacci(n - 1) as number;
  const b = fibonacci(n - 2) as number;
  return a + b;
}

