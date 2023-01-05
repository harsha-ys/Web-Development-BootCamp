function bmiCalculator (weight, height) {
    var BMI = weight/(Math.pow(height, 2));
    var rounded = Math.round(BMI*10)/10;
    var interpretation;
    
    if( rounded < 18.5 ) interpretation = "Your BMI is "+rounded+", so you are underweight.";
    else if ( rounded >= 18.5 && rounded <= 24.9) interpretation = "Your BMI is "+rounded+", so you have a normal weight.";
    else interpretation = "Your BMI is "+rounded+", so you are overweight.";
    
    return interpretation;
}