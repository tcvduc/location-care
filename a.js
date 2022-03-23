const { advanceLogArray } = require("matri");

let a = ["caret", 2, 3, 4, 5];
// let a = [1, 2, 3, 4, 5];

function swap(a, i, j) {
  const temporary = a[i];
  a[i] = a[j];
  a[j] = temporary;
}

/**
 *
 * @param {Array} a
 */
function handleCaretMove(a) {
  let moveIndex = 0;

  setInterval(() => {
    console.log("moveIndex: ", moveIndex);

    swap(a, moveIndex, moveIndex + 1);
    // advanceLogArray(a);
    console.log(a);

    moveIndex += 1;
    if (moveIndex > a.length - 2) {
      moveIndex = 0;
    }
  }, 1500);
}

handleCaretMove(a);
