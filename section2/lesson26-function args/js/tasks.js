function sayHello(name) {
    return `Hello, ${name}`;
}

console.log(sayHello('Dima'));

function returnNeighboringNumbers(num) {
    return [num - 1, num, num + 1];
}

console.log(returnNeighboringNumbers(5));

function getMathResult(base, multiplier) {
    let str = "";
    if (typeof(multiplier) === 'string' || multiplier <= 0) {
        return base;
    } else {
        for (let i = 1; i <= multiplier; i++) {
            if (i === multiplier) {
                str += `${base*i}`;
            } else {
                str += `${base*i}---`;
            }
        }
        return str;
    }
}

console.log(getMathResult(5, 3));

function calculateVolumeAndArea(num) {
    if (typeof(num) === 'string' || num <= 0 || num % 1 !== 0) {
        return 'При вычислении произошла ошибка';
    } else {
        return `Объем куба: ${Math.pow(num, 3)}, площадь всей поверхности: ${6 * Math.pow(num, 2)}`;
    }

}

calculateVolumeAndArea(5);
calculateVolumeAndArea(-15);
calculateVolumeAndArea('15');
calculateVolumeAndArea(15.5);

function getCoupeNumber(num) {
    if (typeof(num) === 'string' || num < 0 || num % 1 !== 0) {
        return "Ошибка. Проверьте правильность введенного номера места";
    }
    if (num > 36 || num === 0) {
        return "Таких мест в вагоне не существует";
    }
    for (let i = 4; i <= 36; i = i + 4) {
        if (num <= i) {
            return Math.ceil(i / 4);
        }
    }
}

function getTimeFromMinutes(totalMinutes) {
    if (typeof(totalMinutes) !== 'number' || totalMinutes < 0 || totalMinutes % 1 !== 0) {
        return "Ошибка, проверьте данные";
    }

    let hours = Math.floor(totalMinutes / 60);
    let minutes = totalMinutes % 60;

    let hourString = '';

    switch (hours) {
        case 1:
            hourString = 'час';
            break;
        case 2:
        case 3:
        case 4:
            hourString = 'часа';
            break;
        default:
            hourString = "часов";
            break;
    }

    return `Это ${hours} ${hourString} и ${minutes} минут`;
}

console.log(getTimeFromMinutes(150));
console.log(getTimeFromMinutes(0));
console.log(getTimeFromMinutes(50));
console.log(getTimeFromMinutes(150.3));


function findMaxNumber(num1, num2, num3, num4) {
    if (typeof(num1) !== 'number' || typeof(num2) !== 'number' || typeof(num3) !== 'number' || typeof(num4) !== 'number') {
        return 0;
    } else {
        return Math.max(num1, num2, num3, num4);
    }
}