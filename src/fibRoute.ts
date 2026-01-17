// Endpoint for querying the fibonacci numbers
import type {Request,Response } from "express";
import fibonacci from "./fib";

type FibParams = { num: string };

export default function fibRoute(req: Request<FibParams>, res: Response): void {
  const { num } = req.params;

  const n = Number.parseInt(num, 10);
  
  if (Number.isNaN(n)) {
    res.status(400).send(`fibonacci(${num}) is undefined`);
    return;
  }

  const fibN = fibonacci(n);
  const result =
    fibN < 0 ? `fibonacci(${num}) is undefined` : `fibonacci(${num}) is ${fibN}`;

  res.send(result);
}
