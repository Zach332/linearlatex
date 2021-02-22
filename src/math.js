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
        var newFrac = [i1[0] * i2[0], i1[1] * i2[1]];
        for(var i = 2; i < i1.length; i++) {
            newFrac.push([[i1[i][0][0] * i2[0], i1[i][0][1] * i2[1]], i1[i][1]]);
        }
        return simplify(newFrac);
    } else if (i2.length > 2) {
        var newFrac = [i1[0] * i2[0], i1[1] * i2[1]]
        for(var i = 2; i < i2.length; i++) {
            newFrac.push([[i2[i][0][0] * i1[0], i2[i][0][1] * i1[1]], i2[i][1]]);
        }
        return simplify(newFrac);
    }
    var newFrac = [i1[0] * i2[0], i1[1] * i2[1]];
    return simplify(newFrac);
}

export const add = (i1, i2) => {
    var newFrac = [(i1[0] * i2[1]) + (i2[0] * i1[1]), i1[1] * i2[1]];
    var usedVars = [];
    for(var i = 2; i < i1.length; i++) {
        var curVar = i1[i][1];
        usedVars.push(curVar);
        var other = getVar(i2, curVar);
        if(other === null) {
            newFrac.push([[i1[i][0][0], i1[i][0][1]], curVar]);
        } else {
            newFrac.push([[(i1[i][0][0] * other[0][1]) + (i1[i][0][1] * other[0][0]), i1[i][0][1] * other[0][1]], curVar]);
        }
    }
    for(var i = 2; i < i2.length; i++) {
        var curVar = i2[i][1];
        if(usedVars.includes(curVar)) {
            continue;
        }
        var other = getVar(i1, curVar);
        if(other === null) {
            newFrac.push([[i2[i][0][0], i2[i][0][1]], curVar]);
        } else {
            newFrac.push([[(i2[i][0][0] * other[0][1]) + (i2[i][0][1] * other[0][0]), i2[i][0][1] * other[0][1]], curVar]);
        }
    }
    return simplify(newFrac);
}

const getVar = (frac, varName) => {
    for(var i = 2; i < frac.length; i++) {
        if(frac[i][1] == varName) {
            return frac[i];
        }
    }
    return null;
}

export const display = (frac, display1=true) => {
    if(frac == null)return "";
    if(frac.length == 3) {
        if(frac[0] == 0) {
            return display(frac[2][0], false) + frac[2][1];
        } else {
            return display(frac.slice(0,2)) + " + " + display(frac[2][0], false) + frac[2][1];
        }
    }
    if(frac.length > 3) {
        return display(frac[frac.length-1][0], false) + frac[frac.length-1][1] + " + " + display(frac.slice(0,frac.length - 1))
    }
    if(!display1 && frac[1] == 1 && frac[0] == 1) {
        return "";
    } else if(!display1 && frac[1] == 1 && frac[0] == -1) {
        return "-";
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
    }
    var min = Math.min(Math.abs(frac[0]), Math.abs(frac[1]));
    for(var i = 2; i <= min; i++) {
        if((frac[0] / i) % 1 == 0 && (frac[1] / i) % 1 == 0) {
            frac[0] /= i;
            frac[1] /= i;
            i--;
        }
    }
    for(var index = 2; index < frac.length; index++) {
        if(frac[index][0][0] == 0) {
            frac[index][0][1] = 1;
        }
        var min = Math.min(Math.abs(frac[index][0][0]), Math.abs(frac[index][0][1]));
        for(var i = 2; i <= min; i++) {
            if((frac[index][0][0] / i) % 1 == 0 && (frac[index][0][1] / i) % 1 == 0) {
                frac[index][0][0] /= i;
                frac[index][0][1] /= i;
                i--;
            }
        }
    }
    return frac;
}

const isLetter = (char) => {
    return char.match(/[a-z]/i);
}