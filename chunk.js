const chunkArray = (arr, number) => {
  const chunkedArr = [];

  arr.forEach(val => {
    const last = chunkedArr[chunkedArr.length - 1];

    if (!last || last.length === number) {
      chunkedArr.push([val]);
    } else {
      last.push(val);
    }
  });

  return chunkedArr;
};

// const result = chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 3);
// console.log(result); // [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

module.exports = chunkArray;
