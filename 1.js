function getStringBitSize(s) {
  return Buffer.from(s).length;
}

const s = "abcv";
console.log(getStringBitSize(s));
