console.log("Yo Yo 7Edge");
//Objects
const student={
    fullName:"yoyo",
    age:20,
    school:"hfghfh",
};
console.log(student["age"]);

//let 
let a=10;
a=20;
console.log(a);

//Arithmetic opperator

let b=5;
let c=2;
console.log("b+c=",b+c);
console.log("b-c=",b-c);
console.log("b*c=",b*c);
console.log("b/c=",b/c);
console.log("b % c =", b%c);// reminder
console.log("b ** c =", b ** c);// a power b 

//unary operator

a++;
console.log("a++ value",a);
a--;
console.log("a-- value",a);

--a;
console.log("--a value",a);

++a;
console.log("++a value",a);


// Asignment operator
a += 4;
console.log("a+=4 value",a);

a -= 10;
console.log("a-=10 value",a);

a *= 10;
console.log("a*=10 value",a);


a /= 10;
console.log("a/=10 value",a);

a **= 2;
console.log("a **= 2 value",a);


// comprasion opperators

let d = 3;
let e = 4;

console.log("d == e value",d == e);

console.log("d != e value",d != e);

let f="4";// string --> number convert
console.log("f == e value if f is string with number ",f == e);// bcz it converts string to number


console.log("f === e value",f === e);// here its strict version === evn if its string 
console.log("f !== e value",f !== e);// here its strict version !== evn if its string 


console.log("f > e value",f > e);
console.log("f >= e value",f >= e);
console.log("f > e value",f < e);
console.log("f <= e value",f <= e);



//logical operator

let g=5;
let h=6;

let cond1 = g<h;
let cond2 = g===5;
//AND
console.log("cond1 && cond2 ", cond1 && cond2);
// OR
console.log("cond1 || cond2 ", cond1 || cond2); // any one statement is true thn full is true only f || f = f
//NOT
console.log("!(5 > 6) ", !(g > h));


// conditional statement

//IF and ELSE

let age = 13;
if(age >= 18){
    console.log("can vote");
}
else{
    console.log("can't vote");
}

let num1 = 3;

if(num1%2 === 0){
    console.log("even");
}
else{
    console.log("odd");
}

// else if

let mode="white";
if(mode === "black"){
    console.log("dark");
}
else if(mode === "white"){
    console.log("light");
} 
else {
    console.log("wrong colour");
}

//  Turnery opperator

let goo= 18<=19 ? "go" : "not go";
console.log(goo);


// switch statement

let fruit='appl';
switch (fruit){
    case 'mango':
        console.log("sweet");
        break;
    case 'apple':
        console.log("jusiii");
        break;
    default:
        console.log("no cart ${fruit}. ");

}


// using a input see that it is multiple by 5
/*
let num=prompt("enter number");
if(num%5===0){
    console.log("it is multiple of 5");

}
else{
    console.log("not multiple by 5");
}
*/
   
// sum of in for loop
/*sum=0;
for(let i=0;i<=10;i++){
    sum += i;
    
}
console.log("sum is",sum);

// DO while
z=10;
do{
    console.log("yoyoyooy");
    z++;

}while(z<20); 
*/


// 0 to 100 evn number
for(let i=0;i<=100;i++){
    if(i%2===0){
        console.log(i);

    }
    
    i++;
}


// guessing number 
let guess = prompt("guess the number");
if(guess==10){
    console.log("correct guess")
}
else {
    console.log("wrong guess");
}


