let s = "12345";
let s2 = "abctransform:translateX(1px)";

const regex = /[3-5]/g;
const regex2 = /[transform:translateX(1px)]+/gm;
const regex3 = /[transform:translateX(1px)]/gm;

s = s.replace(regex, "");
console.log(s);

// s2 = s2.replace(regex2, "");
console.log(s2.match(regex3));
