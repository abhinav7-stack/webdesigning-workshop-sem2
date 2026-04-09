function factorial() {
    var num = document.getElementById("num").value;
    var fact = 1;
    let steps = "";

    if (num < 0) {
    document.getElementById("output").innerHTML = "Factorial not defined for negative numbers";
    return;
    }

    if (num == 0 || num == 1) {
    document.getElementById("output").innerHTML = 
    "Factorial = " + num + "! = 1";
    return;
    }

    for (let i = 1; i <= num; i++) {
    fact = fact * i;

    if (i == 1) {
    steps = steps + i;
    } else {
    steps = steps + " × " + i;
    }
    }

    document.getElementById("output").innerHTML =
    "Entered Number = " + num + "<br>" +
    "Factorial = " + num + "! = " + steps + " = " + fact;
}