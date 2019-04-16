String.prototype.filter = function (str) {

    let string = this;
    let index = string.indexOf(str);
    let result = "";


    for (let i = 0; i < string.length; i++) {
        if (i < index || i > index + str.length - 1) {
            result += string[i]
        }
    }


    return result;

};

console.log("This house is not nice!".filter("not "));