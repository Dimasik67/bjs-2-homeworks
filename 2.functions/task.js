function getArrayParams(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  let avg = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    sum = sum + arr[i];
    avg = sum / arr.length;
  }

  return {
    min: min,
    max: max,
    avg: +(avg.toFixed(2))
  }
}

getArrayParams(10, 10, 11, 20, 10);

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sum = 0;

  for (i = 0; i < arr.length; i++) {

    sum += arr[i];
  }

  return sum;

}

summElementsWorker(10, 10, 11, 20, 10);

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let difference = max - min;


  if (difference === -Infinity) {
    return 0;
  } else {
    return difference;
  }
}

differenceMaxMinWorker(10, 5, 16, 13, 25);

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  sumEvenElement = 0;
  sumOddElement = 0;

  for (i = 0; i < arr.length; i++) {

    if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }

  return sumEvenElement - sumOddElement;

}

differenceEvenOddWorker(61, 206, 328, 284);

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  sumEvenElement = 0;
  countEvenElement = 0;

  for (i = 0; i < arr.length; i++) {

    if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }

  return +(sumEvenElement / countEvenElement).toFixed(2);
}


averageEvenElementsWorker(1, 5, 6, 8);

const arr = [
  [10, 10, 11, 20, 10],
  [67, 10, 2, 39, 88],
  [72, 75, 51, 87, 43],
  [30, 41, 55, 96, 62]
];

function makeWork(arrOfArr, func) {
  let maxWorkResult = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    let max = func(...arrOfArr[i]);
    if (maxWorkResult < max) {
      maxWorkResult = max;
    }
  }
  return maxWorkResult;
}
console.log(makeWork(arr, summElementsWorker)); // максимум из 61, 206, 328, 284 => 328
console.log(makeWork(arr, differenceMaxMinWorker)); // максимум из 10, 86, 44, 66 => 86
console.log(makeWork(arr, differenceEvenOddWorker)); // максимум из 39, -6, -184, 92 => 92
console.log(makeWork(arr, averageEvenElementsWorker)); // максимум из 12.5, 33.333, 72, 62.666 => 72