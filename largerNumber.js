function largestNumber(numbers){
    var larger = numbers[0];
for(var i = 0; i < numbers.length; i++ ){
    var element = numbers[i];
    if(element > larger){
        larger = element;
    }
}
return larger;
}

var result = largestNumber([40,79,90]);

console.log("result", result);

