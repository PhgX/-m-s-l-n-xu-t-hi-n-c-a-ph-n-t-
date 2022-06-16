function CountTotalNumberPresent(arr: number[], findValue: number): number {
  let count = 0;
  let index = 0;
  while (index < arr.length) {
    if (arr[index] == findValue) {
      count++;
    }
    index++;
  }
  return count;
}

let arr = [5, 13, 44, 5, 43, 44, 44];
let num = CountTotalNumberPresent(arr, 44);
console.log(num);

function RecursiveCountTotalNumberPresent(
  arr: number[],
  findValue: number
): number {
  let count = 0;
  let arrAfterSort = arr.sort((a, b) => a - b);
  let startIndex = 0;
  let endIndex = arrAfterSort.length - 1;
  while (startIndex <= endIndex) {
    let mid = (startIndex + endIndex) / 2;
    if (arrAfterSort[mid] == findValue) {      
      for (let item of arrAfterSort) {
        if (item == findValue) {
          count++;
        }
      }
      return count;
    } else if (arrAfterSort[mid] > findValue) {
      endIndex = mid - 1;
    } else {
      startIndex = mid + 1;
    }
  }
  return -1;
}

let arr1 = [0, -1, 0, 0, 12, 5, 9];
let total = RecursiveCountTotalNumberPresent(arr1, 9);
if (total === 0) {
  console.log("Số cần tìm không có trong mảng");
} else {
  console.log(`Số lần xuất hiện của số cần tìm là: ${total}`);
}
