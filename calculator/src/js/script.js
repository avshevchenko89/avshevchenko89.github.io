var keys = document.querySelectorAll('span');
var operBtn = document.querySelectorAll('.operator');
var screen = document.querySelector('.screen');
var operators = [];
var userNum = [];
var userOperator = [];
var screenData = '';
var k = 0;
var result;

//определяем массив допустимых операций
for (var i = 0; i < operBtn.length; i++) {
    operators[i] = operBtn[i].innerHTML;
}

//функция вывода на экран
function write(item) {
    screen.innerHTML = item;
}

function adder(a, b) {
    return a+b;
}

function minuser(a, b) {
    return a-b;
}

function divider(a, b) {
    return a/b;
}

function multiplyer(a, b) {
    return a*b;
}

function operate (a, b, op) {
    switch (op) {
        case '+':
            result = adder(a, b);
            break;
        case '-':
            result = minuser(a, b);
            break;
        case '/':
            result = divider(a, b);
            break;
        case 'x':
            result = multiplyer(a, b);
            break;
        default:
            alert( 'Error' );
    }

    return result;
}

function clear() {
    userNum = [];
    userOperator = [];
    screenData = '';
}

for (var i = 0; i < keys.length; i++) {
    keys[i].onclick = function () {
        var btnVal = this.innerHTML;

        if ((btnVal !== '=') && (btnVal !== 'C')) {
            screenData += btnVal;
            write(screenData);

            if (this.className !== 'operator') {
                if (userNum[k] == undefined) {
                    console.log(userNum[k]);
                    userNum.push(btnVal);
                    userNum[k] = +userNum[k];
                } else {
                    console.log(userNum[k]);
                    userNum[k] = +(userNum[k] + btnVal);
                }
                console.log(userNum);
            } else {
                userOperator.push(btnVal);
                k += 1;
                console.log(userOperator);
            }
        } else if (btnVal === '=') {
            for (var i = 0; i < userNum.length-1; i++) {
                screenData = operate(+userNum[i], +userNum[i + 1], userOperator[i] + '');
                write(screenData);
                userNum = [];
                userOperator = [];
            }
        } else {
            clear();
            write(screenData);
        }
    }
};

