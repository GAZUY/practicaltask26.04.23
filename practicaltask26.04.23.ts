
let enteringANumber = +(prompt ('введите число') as string)
alert ('число во второй степени равно: ' + enteringANumber ** 2)



let enteringANumberOne = +(prompt ('введите первое число') as string)
let enteringANumberTwo = +(prompt ('введите второе число') as string)
alert ('среднеарифметическое чисел равно: ' + (enteringANumberOne + enteringANumberTwo) / 2)



let lengthSideSquare = +(prompt('введите длину стороны квадрата') as string)
alert ('площадь квадрата равна: ' + lengthSideSquare * lengthSideSquare)



let distanceInKm = +(prompt ('введите расстояние в киллометрах') as string)
const distanceInMil = 0.621371
alert ('Ваше расстояние в милях: ' + distanceInKm * distanceInMil)



let calculator1 = +(prompt('введите первое число для расчёта') as string)
let calculator2 = +(prompt('введите второе число для расчёта') as string)
alert ('сумма: ' + (calculator1 + calculator2) 
+ ', вычитание: ' + (calculator1 - calculator2) 
+ ', умножение: ' + (calculator1 * calculator2) 
+ ', деление: ' + (calculator1 / calculator2))



let numberA = +(prompt ('введите значение "A" для расчёта формулы a * x + b = 0') as string)
let numberB = +(prompt ('введите значение "B" для расчёта формулы a * x + b = 0') as string)
alert ('значение "X" равно:' + (- numberB / numberA))



let realHour = +(prompt('введите время в часах') as string)
let realMinute = +(prompt ('введите время в минутах') as string)
let minutesLeft = (24*60-(realHour*60+realMinute))%60
let hourLeft = (24*60-(realHour*60+realMinute+minutesLeft))/60
alert ('до следующих суток осталось: ' + hourLeft + 'часов ' + minutesLeft + 'минут')
console.log (hourLeft)



let threeDigits = +(prompt('введите трёхзначное число') as string)
alert ('ваша вторая цифра:' + ((threeDigits-(threeDigits%10))/10)%10 )



let fiveDigits = +(prompt('введите пятизначное число') as string)
let fivtOneDigits = fiveDigits % 10
let fourDigits = (fiveDigits - fivtOneDigits) / 10
alert ('последняя цифра стала первой: ' + fivtOneDigits + fourDigits) 



let salesAmount = +(prompt('введите сумму продаж для расчёта заработной платы') as string)
const wages = 250
alert ('заработная плата составит:' + (wages +salesAmount / 10 ))