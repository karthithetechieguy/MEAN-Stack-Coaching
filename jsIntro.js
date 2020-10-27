//datatypes 

var str="It is  a String";
var n=6;
var bool=true;
var undef; //intial value is undefined
console.log(undef);
var nullExample=null;

console.log(typeof(str));
console.log(typeof(n));

//js objects (JSON Format)
// "key":"value"
// key should be always unique

var userDetails={
    "name":"Karthik",
    "gender":"male",
    "phNo":9788364345
}

console.log(userDetails["name"]);
console.log(userDetails.gender);
console.log(userDetails.phNo);

// js array
// Storing sequential and same data type 

var arrExample=[1,2,3,4,5,6,7];
var strArr=["soccer","cricket","football"];

console.log(arrExample[0]); // 1
console.log(strArr[2]); // football

//array Of Objects

var arrObj=[
    {
        "name":"Karthik",
        "gender":"male",
        "phNo":9788364345,
        "password":"encryptedPassword"
    },
    {
        "name":"xyz",
        "gender":"male",
        "phNo":172983728917389,
        "password":"encryptedPassword"
    },
    {
        "name":"nivetha",
        "gender":"female",
        "phNo":1273927938,
        "password":"encryptedPassword"
    }
]

console.log(arrObj[2].name);
console.log(arrObj[2].gender);

//arr length
console.log(arrObj.length);

// == and === problem

var a=10;
var b="10";

if(a === b)
    console.log("true");
else
    console.log("false");

//typeof problem

var obj={name:"xyx"};
var arr=["xyx"];

console.log(typeof(obj));
console.log(typeof(arr));

//to overcome this problem we need to use Array.isArray()
console.log(Array.isArray(arr));


//conditional statement
// odd or even
// var a=-11;
// if( a < 0 )
//     console.log("Not Valid"); 
// else if(a%2 == 0)
//     console.log("Even");
// else
//     console.log("Odd");    

// switch

var b=2;

switch(b)
{
    case 0:
        console.log("Zero");
        break;
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    default:
        console.log("Not  valid");
}


// ternary opertors
// conditon ? block1 : block 2

//conditional statement
// odd or even
// var a=-11;
// if( a < 0 )
//     console.log("Not Valid"); 
// else if(a%2 == 0)
//     console.log("Even");
// else
//     console.log("Odd");  

var a=11; 

a%2 ? console.log("odd") : console.log("even");

// logical operators

// and or not



// short circuits
var b=10;

b < 0 && console.log(`${b} is negative`);

var arr1=[-1,2,3];

arr1.length && arr1[0] < 0  && console.log(arr1[0]);

// Loops

// for

for(var i=0;i < arr1.length;i++)
{
    console.log(arr1[i]);
}

//while



// iteration 1
// i=0
// bigArray.length =10
// bigArray[i] % 2 == 0
// i < bigArray.length = true
var bigArray=[1,2,3,4,5,6,7,8,9,10];
var i=0;
console.log("___________________")
while(i < bigArray.length)
{
    if(bigArray[i] % 2 == 0)
        console.log(bigArray[i]);
    // i++;
    i++;
}

// _______________________________________________________________________________

console.log("___________________")
for( i in bigArray)
{
    console.log(bigArray[i]); 
}

var exampleObj={
    "name":"xyz",
    "age":34
}

for( i in exampleObj)
{
    console.log(exampleObj[i]); 
}

// ________________________________________________________

// functions

function print(message)
{
    console.log(message);
}

print("this is my first message");

//iteration
// n=10

// n=-1

// n=0

// n=9

function evenOrOddOrNegative(n)
{
    n < 0 && console.log("Negative");

    n > 0 && n%2 && console.log("Odd"); // 0 -false 1-true

    n >= 0 && !(n%2) && console.log("Even");
}

evenOrOddOrNegative(-1);
evenOrOddOrNegative(0);
evenOrOddOrNegative(9);
evenOrOddOrNegative(10);

console.log("________________________________________");

// do while
var i=0;
do{
    console.log(i);
}while(i != 0);

// ouput : 1 2 3 4 5 6 7 8 9 10 

var str="exampleString";
console.log("________________________")

console.log(str.length); // 13
console.log(str.indexOf('e')); // 0
console.log(str.indexOf('z')); // -1
console.log(str.toLowerCase()); // examplestring
console.log(str.toUpperCase()); // EXAMPLESTRING
console.log(str.slice(1,5)); // xampl - wrong
console.log(str.replace("example","original")); //originalString
console.log(str.concat(" is not good")); // exampleString is not good


console.log(str.split('')); 
console.log(str.split('S')); 

var arr=[];

arr.pop();
arr.push(7); 
arr.shift(); 
arr.unshift(0);
console.log(arr); 



// bad idea

var a=10;

if(a%2 == 0)
    console.log('even')
else
    console.log('odd')

function evenOrOdd(n)
{
    n%2 == 0 ? console.log('even') : console.log('odd');
}

evenOrOdd(10);
evenOrOdd(11);
evenOrOdd(12);
evenOrOdd(13);

evenOrOdd(14);

evenOrOdd(15);

//date declaration
var date=new Date(Date.now()); 
console.log("__________________________");
const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
console.log("day is "+days[date.getDay()]); // [0 - 6]
console.log("year is "+date.getFullYear());
console.log("date is "+date.getDate());
console.log("Month is "+date.getMonth());
console.log("Hours is "+date.getHours());
console.log("Minutes is "+date.getMinutes());
console.log("Seconds is "+date.getSeconds());

// var a=100,b=0;

// var c=a/b;

// console.log(c);
console.log("it is inside try");
const test=10;

try{
    test=20;
}
catch(e)
{
    console.log("Error is catched. Remaining lines will be executed"+e);
}

console.log("it is important. it should run anyway");







