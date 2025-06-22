let root = document.getElementById("root");
let input = document.getElementById("inp");
let goBTN = document.getElementById("goBTN");

const styleCase = (val) => {
  root.innerHTML = `${val.toUpperCase()}`;
  return root;
};

const styTxt = (val) => {
  val.style.fontStyle = "italic";
  val.style.fontFamily = "cursive";
  return val;
};

const styDeco = (val) => {
  val.style.textDecoration = "underline";
  return val;
};

const styEmogi = (val) => {
  val.innerHTML = `🎈 Happy Birthday 🎁 ${val.textContent} 😇`;
  return val;
};

const styWeight = (val) => {
  val.style.fontWeight = "999";
  return val;
};

const compose =
  (...argu) =>
  (input) =>
    argu.reduceRight((a, b) => b(a), input);
const exe = compose(styWeight, styEmogi, styDeco, styTxt, styleCase);

input.addEventListener("change", () => {
  if (input && input.value) {
    exe(input.value);
  }
});

goBTN.addEventListener("click", () => {
  if (input && input.value !== "") {
    exe(input.value);
  }
});
