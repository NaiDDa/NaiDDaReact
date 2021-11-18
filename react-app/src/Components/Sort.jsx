const Sort = () => {
  const arr = [6, 4, 12, 51, 5, 7, 17, 24, 52, 86, 76];
  for (let j = arr.length - 2; j >= 0; j--) {
    for (let i = 0; i <= j; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
  const arr2 = [6, 1, 12, 51, 5, 82, 77, 24, 52, 3, 8];

  for (let j = 0; j < arr2.length; j++) {
    let minIndex = j;
    for (let i = j + 1; i < arr2.length; i++) {
      if (arr2[minIndex] > arr2[i]) {
        minIndex = i;
      }
    }
    let temp = arr2[j];
    arr2[j] = arr2[minIndex];
    arr2[minIndex] = temp;
    console.log(arr2);
  }

  return <>sort</>;
};
export default Sort;
