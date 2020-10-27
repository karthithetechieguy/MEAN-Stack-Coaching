let print = (message)=>
{
    console.log(message);
}
print("arrow function example");


let sum=(...num)=>
{
    //logic
    //num=[1,2,3]
    let sum=0;

    for(i in num)
    {
        sum+=num[i];
    }

    console.log(`the sum is ${sum} and the last index is ${i}`);

}

sum(1); // 1
sum(1,2,3,4); // 10
sum(20,30,45,50,100); //  145

let sumOfnNUmbers=(n)=>
{
    // sum of n numbers
    // n=3 => 1+2+3
    // n=3 => (n*(n+1))/2 => 3*(3+1) / 2 = 6
    //loop - linear time
    print((n*(n+1))/2); // constant time

}
let startTime=Date.now();
console.log(startTime);

sumOfnNUmbers(5); //
sumOfnNUmbers(10); //
sumOfnNUmbers(20); // 
sumOfnNUmbers(2000); // 
sumOfnNUmbers(10000000); // 
sumOfnNUmbers(10000000); // 
sumOfnNUmbers(10000000); // 
sumOfnNUmbers(10000000); // 
sumOfnNUmbers(10000000); // 
sumOfnNUmbers(100000); // 
sumOfnNUmbers(100000); // 
sumOfnNUmbers(900000); // 
sumOfnNUmbers(1000000); // 
sumOfnNUmbers(1000000); // 
sumOfnNUmbers(100); //
sumOfnNUmbers(5); //
sumOfnNUmbers(10); //
sumOfnNUmbers(20); // 
sumOfnNUmbers(2000); // 
sumOfnNUmbers(10000000); // 
sumOfnNUmbers(10000000); // 
sumOfnNUmbers(10000000); // 
sumOfnNUmbers(10000000); // 
sumOfnNUmbers(10000000); // 
sumOfnNUmbers(100000); // 
sumOfnNUmbers(100000); // 
sumOfnNUmbers(900000); // 
sumOfnNUmbers(1000000); // 
sumOfnNUmbers(1000000); // 
sumOfnNUmbers(100); //

let endTime=Date.now();
console.log(endTime);

console.log(`Run time is ${endTime - startTime}`);


let firstName="xyz";
let lastName="k";

let obj={
    firstName,
    lastName
}
console.log(obj.firstName);
console.log(obj.lastName);



let forVariant=(arr)=>
{
    for(let i=0;i<arr.length;i++)
        console.log(`Value is ${arr[i]} and index is ${i}`); 
    
    for(let j in arr)
        console.log(`Value is ${arr[j]} and index is ${j}`);
    
    for(i of arr)
        console.log(`Value is ${i}`);
    
}
let obj1={
    firstName:"karthick",
    lastName:'k',
    mark:"450",
    maths:"90",
    sub2:"80",
    sub3:"90",
    sub4:"95",
    sub5:"95"
}

for(let j in obj1)
    console.log(`${j} is ${obj1[j]}`);


