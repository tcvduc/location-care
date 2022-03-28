function saveCodeRegex() {
  const a = "     abc    ";
  const regex = / /g;
  console.log(a.replace(regex, ""));
}

function generateRandomString(length: number) {
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

export { generateRandomString, saveCodeRegex };
