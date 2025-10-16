const waitfun = (time, message) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(message);
      resolve();
    }, time);
  });
  //     setTimeout(() => {
  //         console.log(message);
  //     }, time);
};
const orderCoffee = async () => {
  await waitfun(4000, " Make some order");
  await waitfun(2000, " Start the machine");
  await waitfun(1000, " Grinding the beans");
  await waitfun(1000, " Boiling the water");
  await waitfun(1000, " Mixing the coffee");
  await waitfun(1000, " Pouring in the cup");
  await waitfun(1000, " Adding sugar and milk");
  await waitfun(1000, " Coffee is ready!");
  // waitfun(4000, " Make some order")
    // .then(() => waitfun(2000, " Start the machine"))
    // .then(() => waitfun(10000, " Grinding the beans"))
    // .then(() => waitfun(1000, " Boiling the water"))
    // .then(() => waitfun(5000, " Mixing the coffee"))
    // .then(() => waitfun(3000, " Pouring in the cup"))
    // .then(() => waitfun(9000, " Adding sugar and milk"))
    // .then(() => waitfun(1000, " Coffee is ready!"));
}
orderCoffee();

//   waitfun(2000, " Start the machine");
//   waitfun(1000, " Grinding the beans");
//   waitfun(1000, " Boiling the water");
//   waitfun(1000, " Mixing the coffee");
//   waitfun(1000, " Pouring in the cup");
//   waitfun(1000, " Adding sugar and milk");
//   waitfun(1000, " Coffee is ready!");
// };
