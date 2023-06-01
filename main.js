let arr = [45, 6, 7, -4];

let n = parseInt(prompt("Enter the n-th Element"));

function nsmall(arr, n) {
  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) { // Change the comparison operator to '>'
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  
  let small = arr[n - 1];

  return small;
}

document.write(nsmall(arr, n));