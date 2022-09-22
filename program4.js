function factors(arrInp) {
    arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    arrOut = {}
    for (i of arr) {
        count = 0
        for (j of arrInp) {
            if (j % i == 0) {
                count++
            }
        }
        arrOut[i] = count
    }
    console.log(arrOut);
}


factors([1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30])