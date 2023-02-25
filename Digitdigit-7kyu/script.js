function squareDigits(num) {
  let result = [];
  String(num).split("").forEach((elem) => {
      result.push(Math.pow(elem, 2));
    });
  return (result = Number(result.join("")));
}