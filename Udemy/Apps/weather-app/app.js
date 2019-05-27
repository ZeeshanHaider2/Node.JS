console.log("start");

setTimeout(() => {
  console.log("2 second timer");
}, 2000);

setTimeout(() => {
  console.log("0 second timer");
}, 0);

console.log("stop");

const names = ["alpha", "beta", "gama", "delta"];

const listNames = () => {
  names.forEach(name => console.log(name));
};

listNames();

//this is another example (refer video number 35)
const add = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b);
  }, 2000);
};

add(2, 3, sum => {
  console.log(sum);
});
