/**
 * Generates a range of numbers.
 * @param start - The starting number of the range.
 * @param end - The ending number of the range (exclusive). Defaults to `start`, with `start` defaulting to 0.
 * @param step - The step size between numbers. Defaults to 1.
 * @returns An array of numbers in the specified range.
 */
export const range = (
  start: number,
  end?: number,
  step: number = 1
): number[] => {
  if (step === 0) {
    throw new Error('Step cannot be zero.');
  }

  const output: number[] = [];
  if (end === undefined) {
    end = start;
    start = 0;
  }

  for (let i = start; i < end; i += step) {
    output.push(i);
  }

  return output;
};
