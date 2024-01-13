var marks = [89, 97, 89, 68, 94, 86, 79];

// var element = 0;
// for(var i = 0; i < marks.length; i++){
//     element = element + marks[i];
// }
// console.log(element);

var sum = 0;
for(var i=0; i < marks.length; i++){
    sum = sum + marks[i];
}
console.log(sum);
function addingMachine(num1){
    var sum = 0;
    for(var i = 0; i<num1.length; i++){
        var element = num1[i];
        sum = sum + element;
    }
    return sum;
}

function addingMachine2(num2){
    var sum = 0;
    for(let i=0; i<num2.length; i++){
        sum = sum + num2[i];
    }
    return sum;
}
var total = addingMachine2(marks);
console.log('Ola Eu estou aqui, nao tenho pre-occups', total);