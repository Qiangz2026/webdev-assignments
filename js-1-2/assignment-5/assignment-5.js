let year = parseInt(prompt("Enter a year:"))
if(year % 4 == 0 && year % 100 != 0){
    yearStr = year.toString()
    output = year + "is a leap year."
}else if (year % 400 == 0){
    yearStr = year.toString()
    output = year + "is a leap year."
}else{
    yearStr = year.toString()
    output = year + "is not a leap year."
}
document.querySelector("#target").innerHTML = output