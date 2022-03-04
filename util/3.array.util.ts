import { generateRandomString } from "./1.string.util";
import { generateRandomNumber } from "./2.number.util";

function generateArrayRandomString(length: number) {
  const ret: string[] = new Array(length);
  for (let i = ret.length - 1; i >= 0; --i) {
    // 1 - 9
    ret[i] = generateRandomString(generateRandomNumber(1, 9));
  }
  return ret;
}

export { generateArrayRandomString };
