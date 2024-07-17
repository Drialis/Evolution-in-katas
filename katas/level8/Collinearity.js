function collinearity(x1, y1, x2, y2) {

    // x1 = a * x2
    // y1 = b * y2

    // if ( a = b ) {
    // return true
    //}

    if (x1 == 0 && y1 == 0 || x2 == 0 && y2 == 0) {
        return true
    }

    if (x1 == 0 && x2 == 0 || y1 == 0 && y2 == 0) {
        return true
    }

    let a = x1 / x2
    console.log(a)

    let b = y1 / y2
    console.log(b)


    if (a == b) {
        return true
    }

    return false
}