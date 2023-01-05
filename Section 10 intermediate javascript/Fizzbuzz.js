var numbers = [];
var start = 0;

function fizzbuzz()
{
    numbers.push( (++start%3===0 && start%5===0)? "FizzBuzz": (start%3===0)? "Fizz": (start%5===0)? "Buzz": start );
    console.log(numbers);
}
