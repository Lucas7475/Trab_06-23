module.exports = (arr) => {
    inicio = performance.now();
    let cont = 0;
    for (let i = 1; i < arr.length; i++) {
        cont++;
        let currentValue = arr[i]
        let j = i - 1;
        while(j >= 0 && arr[j] > currentValue) {
          arr[j + 1] = arr[j]
          j--;
          cont++;
        }
        arr[j + 1] = currentValue
      }
    console.log(cont, "time:" + (performance.now() - inicio));
    return {cont};
}