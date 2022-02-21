function f() {
  const countryColumn = document.querySelectorAll(".country-col a");
  const codeColumn = document.querySelectorAll(".code-col span");

  const countryPhoneCode = [
    {
      countryName: "",
      countryCode: "",
    },
  ];

  for (let i = countryColumn.length - 1; i >= 0; --i) {
    const regex = / /g;

    countryPhoneCode.push({
      countryName: countryColumn[i].innerHTML.replace(regex, ""),
      countryCode: codeColumn[i].innerHTML.replace(regex, ""),
    });
  }

  return countryPhoneCode;
}

const ret = f();
ret.shift();
console.log(ret);
