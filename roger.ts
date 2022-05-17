// Declare initial variable, i
let i: number;

// Rest of code goes here!
i = 1;

while(i <= 100)
{
    if(i%3 == 0){
        console.log('Fizz');
    }else if(i%5 == 0){
        console.log('Bang')
    }else{
        console.log(i);
    }
    i += 1;
}

const fizzBuzz = (i: number): string | number => 
    i%3 === 0 ? 'Fizz' : i%5 === 0 ? 'Buzz' : i

console.log(fizzBuzz(1))

export {}