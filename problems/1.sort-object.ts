/**
 * Problem: write a function to sort the
 * array of object.
 * + Input: object key, order_type ("asc":ascending, "desc":descending)
 * + Output: The array was sorted according to the input
 *
 * Understanding the problem
 * - Input:
 * + const a = [
 *   {
 *     name: "1"
 *   },
 *   {
 *     name: "2"
 *   },
 *   {
 *     name: "3"
 *   },
 * ]
 * + const object_key = "name"
 * + const order_type = "descending"
 *
 * - ret
 * [
 *   {
 *     name: "3"
 *   },
 *   {
 *     name: "2"
 *   },
 *   {
 *     name: "1"
 *   },
 * ]
 *
 *
 *
 */
const data = [
  {
    name: "a1",
  },
  {
    name: "a2",
  },
  {
    name: "a3",
  },
];

const sortOrderType = {
  ascending: "ascending",
  descending: "descending",
};


function mergeSort(a:object[], orderType:string):object[] {
  if (a.length <= 1) return a;

  const arrayMiddleIndex = Math.floor((a.length - 1) / 2);
  const left = [];
  const right = [];

  for (let i = arrayMiddleIndex; i >= 0; --i) {
    left.push(a[i]);
  }

  for (let i = a.length - 1; i >= arrayMiddleIndex + 1; --i) {
    right.push(a[i]);
  }

  if (orderType === sortOrderType.ascending) {
    return mergingAndSortingInAscendingOrder(
      mergeSort(left, orderType),
      mergeSort(right, orderType)
    );
  }

    return mergingAndSortingInDescendingOrder(
      mergeSort(left, orderType),
      mergeSort(right, orderType)
    );
  
}

function mergingAndSortingInAscendingOrder(left:object[], right:object[]) {
  const ret = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      ret.push(left[0]);
      left.shift();
    }
    if (right[0] <= left[0]) {
      ret.push(right[0]);
      right.shift();
    }
  }

  return [...ret, ...left, ...right];
}

function mergingAndSortingInDescendingOrder(left:object[], right:object[]) {
  const ret = [];

  while (left.length && right.length) {
    if (left[0] >= right[0]) {
      ret.push(left[0]);
      left.shift();
    }
    if (right[0] >= left[0]) {
      ret.push(right[0]);
      right.shift();
    }
  }

  return [...ret, ...left, ...right];
}


function sortArrayObject(a:object[], objectKey:string, orderType:string) {
  if (orderType === "ascending") {
    let ret = [];
    for (let i = a.length - 1; i >= 0; --i) {
      ret.push(a[objectKey]);
    }
  }
  if (orderType === "descending") {
  }
}

{
  // const a = [1, 3, 5, 2, 4, 9, 6, 7, 8];

}

const s = "a1";
