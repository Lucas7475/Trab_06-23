module.exports = (arr) => {
  inicio = performance.now();
  let cont = 0;
    for (let i = 0; i < arr.length; i++) {
      cont++
      let lowest = i
      for (let j = i + 1; j < arr.length; j++) {
        cont++
        if (arr[j] < arr[lowest]) {
          lowest = j
        }
      }
      if (lowest !== i) {
        // Swap
        ;[arr[i], arr[lowest]] = [arr[lowest], arr[i]]
      }
    }
    console.log(cont, "time:" + (performance.now() - inicio));
    return {list:arr, cont};
  }