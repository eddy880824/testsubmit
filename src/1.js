const a = "1";
const b = "2";
const c = "#";
const d = a + b + c;

console.log(d);
function e(x1, x2, x3) {
  console.log(x1, x2, x3);
}

e(
  function () {},
  function () {},
  function () {}
);
