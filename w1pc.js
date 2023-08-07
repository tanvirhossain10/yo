var students = [['Alia', 95], ['Me', 100], ['Dalia', 66], ['Salia', 80], ['Malia', 59], ['Lilia', 47], ['Jalia', 77]]
var avarageMarkes = 0;
for (var i = 0; i < students.length; i++) {
    avarageMarkes += students[i][1];
    var avg = (avarageMarkes / students.length);
}
console.log('Avereage grade:' + avg);
if (avg < 50) {
    console.log('grade:F')
}
else if (avg < 60) {
    console.log('Grade"D');

}
else if (avg < 70) {
    console.log('Grade:C')
}
else if (avg < 80) {
    console.log('Grade:B');
}
else if (avg < 90) {
    console.log('Grade:A')
}
else if (avg <= 100) {
    console.log('Grade:A+')
}


var numbers = [98, 95, 66, 80, 59, 47, 77, 99]

// for (var i = 0; i < 100; i++) {
// }
/* for (var i = 0; i < numbers.length; i++) {
    var number1 = numbers[i];
    // console.log(i)
    // console.log(number1)


    if (number1 < 50) {
        console.log('Grade:F');
    }
    else if (number1 >= 50 && numbers <= 59) {
        console.log('Grade:D');
    }
    else if (number1 >= 60 && numbers <= 69) {
        console.log('Grade:c');
    }
    else if (number1 >= 70 && numbers <= 79) {
        console.log('Grade:B');
    }
    else if (numbers >= 80 && numbers <= 89) {
        console.log('Grade:A');
    }
    else if (numbers >= 90 && numbers <= 100) {
        console.log('Grade:A+');
    }
}
 */
