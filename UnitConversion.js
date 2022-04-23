//Unit Conversion
//a. 1ft = 12 in then 42 in = ? ft

let inputInches=42;
let inchToFeet=inputInches/12;
console.log("42 in = "+inchToFeet+" ft");

//b. Rectangular Plot of 60 feet x 40 feet in meters
let AreaInFeet=60*40;
let AreaInMeter=AreaInFeet/10.764;
console.log("Plot area in meter : "+AreaInMeter);

//c. Calculate area of 25 such plots in acres
let AreaInAcre=AreaInFeet*25/43560;
console.log("25 plots area in meter : "+AreaInAcre);



//Unit Conversion-------With Function
//a
/*
function ftToIn(valueInInch){
    return valueInInch/12;
}
let convertedValue = ftToIn(42);
console.log("Inch value from feet is "+convertedValue);
//b & c
function ftToMtr(valueInFeet){
    return valueInFeet/3.281;
}
let area = ftToMtr(60) * ftToMtr(40);
console.log("Area in sq meters "+ area);

function SqMtrToAcre(sqMeterValue){
    return sqMeterValue/4047;
}
console.log("Ares in Acres :" +SqMtrToAcre(area));
*/