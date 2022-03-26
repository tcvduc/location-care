function generateRandomString(length) {
  let ret = "";

  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = length - 1; i >= 0; --i) {
    ret += characters.charAt(
      Math.floor(Math.random() * (characters.length - 1))
    );
  }

  return ret;
}

console.log(generateRandomString(255));
