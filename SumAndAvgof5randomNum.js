//Read 5 Random 2 Digit values , then find their sum and the average
/*let num1= Math.floor(Math.random() * 99)+1;  
let num2= Math.floor(Math.random() * 99)+1;  
let num3= Math.floor(Math.random() * 99)+1;  
let num4= Math.floor(Math.random() * 99)+1;  
let num5= Math.floor(Math.random() * 99)+1;  
let sum=num1+num2+num3+num4+num5;
let avg=sum/5;


console.log("Sum of 5 random 2 digit numbers : "+sum);
console.log("Average of 5 random 2 digit numbers : "+avg);
*/

//Calculate Sum and Average of 5 Random 2 Digit Number-----With For loop
let num = 0;
let summing = 0;
let countOfRandommNumbers = 5;

for(let i = 0; i < countOfRandommNumbers; i++){
    num = Math.floor(Math.random()*100);
    summing = summing + num;
}
let average = summing / countOfRandommNumbers;
console.log("Sum : " +summing +", Average : "+average);