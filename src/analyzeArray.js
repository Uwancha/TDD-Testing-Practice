function analyzeArray(array) {
    let average;
    let sum = 0
    let minimum = array[0]
    let maximum = array[0]
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    for (let i = 1; i < array.length; i++) {
        minimum > array[i] ? minimum = array[i] : minimum;
        maximum < array[i] ? maximum = array[i] : maximum;
    }

    average = sum / array.length;
    const length = array.length

    return {
        average,
        minimum,
        maximum,
        length
    }
}

export { analyzeArray }