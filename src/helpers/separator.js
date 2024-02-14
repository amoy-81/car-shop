export const priceSeparator = (price) => {
  let result = "";
  const priceToArrey = price.toString().split("");

  priceToArrey.reverse().forEach((element, index) => {
    if ((index + 1) % 3 === 0 && index + 1 !== priceToArrey.length) {
      result = `,${element}${result}`;
    } else {
      result = `${element}${result}`;
    }
  });
  return result;
};
