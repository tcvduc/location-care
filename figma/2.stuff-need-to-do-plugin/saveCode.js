const scriptCode = `
  < script  src="http://localhost:3/api/localtion-care/2_timer_script_js">
</ script  >`;

const fetchOptions = {
  // mode: "no-cors", // no-cors, *cors, same-origin
  mode: "cors", // no-cors, *cors, same-origin

  method: "delete", // *GET, POST, PUT, DELETE, etc.
  cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
  // credentials: "same-origin", // include, *same-origin, omit
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    id: id,
  }),
};
