function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteDigit() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function appendNumber(number) {
    document.getElementById("display").value += number;
}

function appendOperator(operator) {
    let display = document.getElementById("display");
    let lastChar = display.value.slice(-1);
    if ("+-*/.".includes(lastChar) && "+-*/.".includes(operator)) {
        display.value = display.value.slice(0, -1) + operator;
    } else {
        display.value += operator;
    }
}

function calculate() {
    try {
        let result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}
