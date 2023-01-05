function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
        
        //Write your code here:
        
        var fibarray=[];
        fibarray.push(0)
        if (n===1) return fibarray;
        fibarray.push(1)
        if (n===2) return fibarray;
        for(var i=3; i<n+1;i++)
        {
            fibarray.push(fibarray[i-2] + fibarray[i-3]);
        }
        return fibarray;
        
        
        //Return an array of fibonacci numbers starting from 0.
        
    //Do NOT change any of the code below 👇
    }
    
    