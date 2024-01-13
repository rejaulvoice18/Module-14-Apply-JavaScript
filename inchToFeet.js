function inchToFeet(inch) {
    var feet = inch / 12;
    return feet;
}

var senior = [156, 288, 300];

var nanaFeet = inchToFeet(senior[0]);
console.log(nanaFeet);
var naniFeet = inchToFeet(288);
console.log(naniFeet);
var dadiFeet = inchToFeet(300);
console.log(dadiFeet)