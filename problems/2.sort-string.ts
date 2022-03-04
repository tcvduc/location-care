/**
 * Problem: sort the array of string
 *
 * Understanding the problem
 * + a = ["a1","a3","a2"]
 *
 * - ret = ["a1","a2","a3"]
 *
 * + a[0] = "a1"
 *   + a[0][0] = 'a'
 *   + a[0][0] charcode = 97
 *
 *   + a[0][1] = '1'
 *   + a[0][1] char code = 49
 *
 * + a[1] = "a3"
 *   + a[1][0] = "a"
 *   + a[1][0] char code = 97
 *
 *   + a[1][1] = '3'
 *   + a[1][1] char code = 51
 *
 *
 *
 *
 *
 *
 */
import { generateArrayRandomString } from "../util/3.array.util";


function fx(a:string[]) {
  for (let i = a.length - 1; i >= 0; --i) {
    for (let j = i - 1; j >= 0; --j) {
      const currentCheckingString = a[i];
      const shouldThisStringTobeSwapped = a[j];
      if (shouldThisStringTobeSwapped.length > currentCheckingString.length) {
        // nang chim xuong, nhe noi len
        const temporary = a[i];
        a[i] = a[j];
        a[j] = temporary;
      }
      if (shouldThisStringTobeSwapped.length === currentCheckingString.length) {
        // so sanh char code cua tung ky tu roi swap
        for (let k = 0; k <= a[i].length - 1; ++k) {
          const currentCheckingStringCharCode = a[i].charCodeAt(k);
          const shouldThisStringTobeSwappedCharCode = a[j].charCodeAt(k);

          if (
            shouldThisStringTobeSwappedCharCode > currentCheckingStringCharCode
          ) {
            // nang chim xuong, nhe noi len
            const temporary = a[i];
            a[i] = a[j];
            a[j] = temporary;
            break;
          }
        }
      }
    }
  }

  return a;
}



{
  const a1 = ["abc", "ab", "a"];
  const a2 = ["ac", "ab", "bc"];
  const a3 = generateArrayRandomString(5);

  
  console.log(a1);
  
  console.log(fx(a1)); // [ 'a', 'ab', 'abc' ]

  console.log(a2);
  console.log(fx(a2)); // [ 'ab', 'ac', 'bc' ]


  console.log(a3);
  console.log(fx(a3));
}
