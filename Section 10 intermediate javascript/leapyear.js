function isLeap(year) {
    
    /**************Don't change the code above****************/    
        
        //Write your code here.    
        return (year%4 ===0)? ( (year%100 === 0 )? ( (year%400===0)? "Leap year." : "Not leap year." ) : "Leap year." )  : "Not leap year."
    
        
    
    /**************Don't change the code below****************/    
    
    }