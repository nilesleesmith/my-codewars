function digitalRoot(n) {
    // get the number of digits in n.
    const nString = n.toString();
    const nLength = nString.length;
    // if n is only 1 digit then return n.
    if (nLength === 1) {
        console.log(n);
        return n;
    }
    // add up n then sum again.
    else {
        let nSum = 0;
        for (let i = 0; i < nLength; i++) {
            nSum += Number(nString[i]);
            console.log(nSum);
        }
        return digitalRoot(nSum);
    }
}