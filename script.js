var display = document.getElementById("display");
var buttons = document.getElementsByClassName("buttons");
var arr = [];

for (var i = 0; i <= buttons.length; i++) {

    buttons[i].addEventListener('click', function () {
        var value = this.getAttribute('data-value');
        if (value == 'AC') {
            display.innerText = " ";
            arr = [];
        }
        else if (value == "+" || value == "-" || value == "/" || value == "*" || value == "%") {
            if (arr.length !== 0) {
                arr.push(String(value));
            }

            display.innerText = " ";
        }
        else if (value == "+/-") {
            display.innerHTML += (-(arr[arr.length - 2]));
            arr.push(-(arr[arr.length - 2]))
        }
        else if (value == "=") {
            var result = "";
            for (var j = 0; j < arr.length; j++) {
                result += arr[j];
            }
            console.log(result)
            var FinalResult = eval(result)
            display.innerHTML = " ";
            display.innerHTML += FinalResult;
            arr = [];

        }
        else {
            arr.push(value)
            display.innerHTML += value;
        }
    });
}