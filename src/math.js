export const frac = (input) => {
    if(isLetter(input.slice(-1))) {
        var variable = input.slice(-1);
        if(input.length == 1) {
            return [0, 1, [[1, 1], variable]];
        }
        var parts = input.slice(0,input.length - 1).split("/");
        var num = parseInt(parts[0]);
        var den = parts.length > 1?parseInt(parts[1]):1;
        return [0, 1, [[num,den], variable]];
    }
    if(input == "")return [0,1];
    var parts = input.split("/");
    var num = parseInt(parts[0]);
    var den = parts.length > 1?parseInt(parts[1]):1;
    return [num, den];
}

export const mult = (i1, i2) => {
    if(i1.length > 2) {
        var newFrac = [i1[0] * i2[0], i1[1] * i2[1], [[i1[2][0][0] * i2[0], i1[2][0][1] * i2[1]], i1[2][1]]];
        return simplify(newFrac);
    } else if (i2.length > 2) {
        var newFrac = [i1[0] * i2[0], i1[1] * i2[1], [[i2[2][0][0] * i1[0], i2[2][0][1] * i1[1]], i2[2][1]]];
        return simplify(newFrac);
    }
    var newFrac = [i1[0] * i2[0], i1[1] * i2[1]];
    return simplify(newFrac);
}

export const add = (i1, i2) => {
    if(i1.length > 2) {
        var newFrac = [(i1[0] * i2[1]) + (i2[0] * i1[1]), i1[1] * i2[1], [[i1[2][0][0], i1[2][0][1]], i1[2][1]]];
        return simplify(newFrac);
    } else if (i2.length > 2) {
        var newFrac = [(i1[0] * i2[1]) + (i2[0] * i1[1]), i1[1] * i2[1], [[i2[2][0][0], i2[2][0][1]], i2[2][1]]];
        return simplify(newFrac);
    }
    var newFrac = [(i1[0] * i2[1]) + (i2[0] * i1[1]), i1[1] * i2[1]];
    return simplify(newFrac);
}

export const display = (frac) => {
    if(frac == null)return "";
    if(frac.length > 2) {
        if(frac[0] == 0) {
            return display(frac[2][0]) + frac[2][1];
        } else {
            return display(frac.slice(0,2)) + " + " + display(frac[2][0]) + frac[2][1];
        }
    }
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

const isLetter = (char) => {
    return char.match(/[a-z]/i);
}