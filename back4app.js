string = "Programming";
string = string.toLowerCase().split("");
r = [];
for (i = 0; i < string.length; i++) {
    cont = 1;
    for (j = 0; j < string.length; j++) {
        if (i !== j) {
            if (string[i] === string[j]) {
                r[i] = [string[i], ++cont];
            }
        }
    }
}
for (i = 0; i < r.length; i++) {
    if (r[i] != null) {
        for (j = 0; j < r.length; j++) {
            if (r[j] != null) {
                if (i !== j) {
                    if (r[i][0] === r[j][0]) {
                        r[j] = null;
                    }
                }
            }
        }
    }
}
for (i = 0; i < r.length; i++) {
    if (r[i] != null) {
        document.write(r[i][0] + " : " + r[i][1] + " ");
    }
}
