import { test } from "@jest/globals";
import { pipe } from "./pipe";

test("pipe", () => {
  const add = (x) => x + 1;
  const multiply = (x) => x * 2;
  const subtract = (x) => x - 1;

  const actual = pipe(add, multiply, subtract)(1);
  const expected = 3;

  expect(actual).toBe(expected);
});
