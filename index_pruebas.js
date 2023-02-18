function log(msg) {
    console.log(msg);
    //console.log(msg+this.name);
}

var numbers = [1,2,3,4];

numbers.filter((n) => {
    return n > 2;
}).forEach(log);