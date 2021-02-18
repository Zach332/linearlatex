export const frac = (input) => {
    if(input == "")return [0,1];
    var parts = input.split("/");
    var num = parseInt(parts[0]);
    var den = parts.length > 1?parseInt(parts[1]):1;
    return [num, den];
}

export const mult = (i1, i2) => {
    var newFrac = [i1[0] * i2[0], i1[1] * i2[1]];
    return simplify(newFrac);
}

export const add = (i1, i2) => {
    var newFrac = [(i1[0] * i2[1]) + (i2[0] * i1[1]), i1[1] * i2[1]];
    return simplify(newFrac);
}

export const display = (frac) => {
    if(frac[1] == 1) {
        return frac[0];
    } else {
        return frac[0] + "/" + frac[1];
    }
}

const simplify = (frac) => {
    if(frac[0] == 0) {
        frac[1] = 1;
        return frac;
    }
    var min = Math.min(Math.abs(frac[0]), Math.abs(frac[1]));
    for(var i = 2; i <= min; i++) {
        if((frac[0] / i) % 1 == 0 && (frac[1] / i) % 1 == 0) {
            frac[0] /= i;
            frac[1] /= i;
            i--;
        }
    }
    return frac;
}