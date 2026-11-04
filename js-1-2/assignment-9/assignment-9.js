const number = parseInt(prompt("Enter an integer: "));
if (number <= 1){
    output = number + "is not a prime number.";
}else if (number == 2){
    output = number + "is a prime number.";
}else{
    for(i = 2; i < number; i++){
        if(number % i ==0){
            output = number + "is not a prime number.";
            break
        }else if(i == (number - 1)){
            output = number + "is a prime number";
        }
    }
}
document.querySelector("#target").innerHTML = output
