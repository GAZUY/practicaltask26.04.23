var enteringANumber = +prompt('введите число');
alert('число во второй степени равно: ' + Math.pow(enteringANumber, 2));
var enteringANumberOne = +prompt('введите первое число');
var enteringANumberTwo = +prompt('введите второе число');
alert('среднеарифметическое чисел равно: ' + (enteringANumberOne + enteringANumberTwo) / 2);
var lengthSideSquare = +prompt('введите длину стороны квадрата');
alert('площадь квадрата равна: ' + lengthSideSquare * lengthSideSquare);
var distanceInKm = +prompt('введите расстояние в киллометрах');
var distanceInMil = 0.621371;
alert('Ваше расстояние в милях: ' + distanceInKm * distanceInMil);
var calculator1 = +prompt('введите первое число для расчёта');
var calculator2 = +prompt('введите второе число для расчёта');
alert('сумма: ' + (calculator1 + calculator2)
    + ', вычитание: ' + (calculator1 - calculator2)
    + ', умножение: ' + (calculator1 * calculator2)
    + ', деление: ' + (calculator1 / calculator2));
var numberA = +prompt('введите значение "A" для расчёта формулы a * x + b = 0');
var numberB = +prompt('введите значение "B" для расчёта формулы a * x + b = 0');
alert('значение "X" равно:' + (-numberB / numberA));
var realHour = +prompt('введите время в часах');
var realMinute = +prompt('введите время в минутах');
var minutesLeft = (24 * 60 - (realHour * 60 + realMinute)) % 60;
var hourLeft = (24 * 60 - (realHour * 60 + realMinute + minutesLeft)) / 60;
alert('до следующих суток осталось: ' + hourLeft + 'часов ' + minutesLeft + 'минут');
console.log(hourLeft);
var threeDigits = +prompt('введите трёхзначное число');
alert('ваша вторая цифра:' + ((threeDigits - (threeDigits % 10)) / 10) % 10);
var fiveDigits = +prompt('введите пятизначное число');
var fivtOneDigits = fiveDigits % 10;
var fourDigits = (fiveDigits - fivtOneDigits) / 10;
alert('последняя цифра стала первой: ' + fivtOneDigits + fourDigits);
var salesAmount = +prompt('введите сумму продаж для расчёта заработной платы');
var wages = 250;
alert('заработная плата составит:' + (wages + salesAmount / 10));
