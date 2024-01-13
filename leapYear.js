// // function isLeapYear(year){
// //     const remainder = year % 4;
// //     if(remainder == 0){
// //         return true;
// //     }
// //     else{
// //         return false;
// //     }
// // }

// console.log(isLeapYear(1700));

function isLeapYear(year){
    //three conditions to find out the leap year
    if((year % 4 == 0) && ( year % 100 != 0  || year % 400 == 0)){
        console.log(year + ' is a leap year');
    }
    else{
        console.log(year + ' is not a leap year');
    }
}

// take input

// const year = prompt('Enter a year:');

const checkLeapYear = isLeapYear(2000);
console.log(checkLeapYear);
